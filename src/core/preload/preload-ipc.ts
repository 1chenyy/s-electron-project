import {contextBridge, ipcRenderer} from 'electron'

export default () => {
    contextBridge.exposeInMainWorld('ipc', {
        // 获取当前时间
        send: (channel, data) => {
            ipcRenderer.send(channel, data)
        },
        receive: (channel, func) => {
            if (validReceiveChannels.includes(channel)) {
                ipcRenderer.on(channel, (event, ...args) => func(event, ...args))
            }
        },
        invoke: (channel, data) => {
            if (validInvokeChannels.includes(channel)) {
                return ipcRenderer.invoke(channel, data)
            }
        }
    })

}
