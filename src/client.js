const { AkairoClient, ListenerHandler } = require('discord-akairo')
const path = require("path")

class DiscordWelcomerBot extends AkairoClient {
    constructor(options) {
        super(options)

        this.listenerHandler = new ListenerHandler(this, {
            directory: path.join(__dirname, "listeners")
        })

        this.listenerHandler.loadAll()

        this.listenerHandler.on("load", (listener) => {
            console.log(`Loaded ${listener} event.`)
        })
    }
}

module.exports = DiscordWelcomerBot