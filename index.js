const Client = require('./src/client')
const config = require('./config.json')

const client = new Client({
    ws: { intents: ['GUILD_MEMBERS'] },
    ownerID: config.ownerID,
    disableMentions: "everyone"
})

client.login(config.token)
