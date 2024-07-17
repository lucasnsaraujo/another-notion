import { contextBridge } from 'electron'
import { ipcRenderer } from 'electron/renderer'
import { IPC } from '../shared/constants/ipc'
import { CreateDocumentResponse, DeleteDocumentRequest, FetchAllDocumentsResponse, FetchDocumentRequest, FetchDocumentResponse, SaveDocumentRequest } from '../shared/types/ipc'

declare global {
  export interface Window {
    api: typeof api
  }
}


// Custom APIs for renderer
const api = {
  fetchDocuments(): Promise<FetchAllDocumentsResponse> {
    return ipcRenderer.invoke(IPC.DOCUMENTS.FETCH_ALL)
  },
  fetchDocument(req: FetchDocumentRequest): Promise<FetchDocumentResponse> {
    return ipcRenderer.invoke(IPC.DOCUMENTS.FETCH, req)
  },
  createDocument(): Promise<CreateDocumentResponse> {
    return ipcRenderer.invoke(IPC.DOCUMENTS.CREATE)
  },
  saveDocument(req: SaveDocumentRequest): Promise<void> {
    return ipcRenderer.invoke(IPC.DOCUMENTS.SAVE, req)
  },
  deleteDocument(req: DeleteDocumentRequest): Promise<void> {
    return ipcRenderer.invoke(IPC.DOCUMENTS.DELETE, req)
  },
  onNewDocumentRequest(callback: () => void) {
    ipcRenderer.on(IPC.DOCUMENTS.NEW, callback)
    return () => {
      ipcRenderer.off(IPC.DOCUMENTS.NEW, callback)
    }
  },
}


if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  window.api = api
}
