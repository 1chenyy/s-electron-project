import {BrowserWindow, ipcMain} from 'electron'
import Constant from "../../help/Constant.ts";
export default () => {
    ipcMain.on(Constant.CHANNEL_ADJUST_WIN, (_, data) => {
        const win = BrowserWindow.getFocusedWindow()
        if (win == null)
            return
        switch (data) {
            case 'min':
                win.minimize()
                break
            case 'max':
                win.isMaximized() ? win.unmaximize() : win.maximize()
                break
            case 'close':
                win.destroy()
                break
        }
    })
}
