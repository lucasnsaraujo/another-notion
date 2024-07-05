import { ipcMain } from 'electron';

ipcMain.handle('fetch-documents', async () => {
    return [
        { id: '1', title: 'Ignite' },
        { id: '2', title: 'Discover' },
        { id: '3', title: 'Rocketseat' },
        { id: '4', title: 'Docs' },
        { id: '5', title: 'Next.js' },
        { id: '6', title: 'React' },
        { id: '7', title: 'Node.js' },
        { id: '8', title: 'React Native' },
        { id: '9', title: 'Expo' },
        { id: '10', title: 'TypeScript' },
        { id: '11', title: 'JavaScript' },

    ]
})