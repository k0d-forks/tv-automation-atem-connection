const { Atem, Commands } = require('./dist')

const atem = new Atem()
atem.connect('192.168.168.240')
atem.once('connected', () => {
    console.log(atem.state.settings.multiViewerConfig[0])

    const cmd = new Commands.MultiViewInputCommand()
    cmd.multiViewIndex = 0
    cmd.updateProps({ windowIndex: 0, source: 1 })
    atem.sendCommand(cmd).then(() => {
        cmd.updateProps({ windowIndex: 1, source: 2 })
        atem.sendCommand(cmd).then(() => {
            console.log(atem.state.settings.multiViewerConfig[0])
        })
    })
})
