import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

import { ElectronAPI } from '@electron-toolkit/preload'
import { ipcRenderer } from 'electron/renderer'

declare global {
  export interface Window {
    electron: ElectronAPI
    api: typeof api
  }
}


// Custom APIs for renderer
const api = {
  fetchDocuments(): Promise<Array<{ id: string; title: string }>> {
    return ipcRenderer.invoke('fetch-documents')
  },
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  window.electron = electronAPI
  window.api = api
}
