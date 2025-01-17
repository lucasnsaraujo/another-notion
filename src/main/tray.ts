import { BrowserWindow, Menu, Tray } from "electron";
import path from "node:path";
import { IPC } from "../shared/constants/ipc";

export function createTray(window: BrowserWindow) {
    const tray = new Tray(path.join(__dirname, '../../resources/rotionTemplate.png'));

    const menu = Menu.buildFromTemplate([
        { label: 'Rotion', enabled: false },
        { type: 'separator' },
        {
            label: 'Criar novo documento', click: () => {
                window.webContents.send(IPC.DOCUMENTS.NEW)
            }
        },
        { type: 'separator' },
        { label: 'Documentos recentes', enabled: false },
        {
            label: 'Discover',
            accelerator: 'CommandOrControl+1',
            acceleratorWorksWhenHidden: false,
        },
        {
            label: 'Teste',
            accelerator: 'CommandOrControl+2',
            acceleratorWorksWhenHidden: false,
        },
        {
            label: 'Testenovo',
            accelerator: 'CommandOrControl+3',
            acceleratorWorksWhenHidden: false,
        },
        { type: 'separator' },
        {
            label: 'Sair do Rotion',
            role: 'quit'
        }

    ])
    tray.setContextMenu(menu)

}