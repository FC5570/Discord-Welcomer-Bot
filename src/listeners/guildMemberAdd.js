const { Listener } = require('discord-akairo')
const { MessageEmbed } = require('discord.js')
const config = require('../../config.json')

class guildMemberAddEvent extends Listener {
    constructor() {
        super("guildMemberAdd", {
            emitter: "client",
            event: "guildMemberAdd"
        })
    }

    async exec(member) {
        const embed = new MessageEmbed()
        .setTitle(`> Welcome to ${member.guild.name}`)
        .setDescription(`<#812312497587617793> **for roles**\n<#812312266934059008> **for info**\n\n> Talk in <#812310675657195524> to increase your levels and gain roles!\nReach Level 5 for pic perms!`)
        .setFooter(`We are now at ${member.guild.members.cache.size} members`)
        .setThumbnail('https://media.discordapp.net/attachments/697225482370023439/804650122197336084/image3.gif')

        this.client.channels.cache.get(config.channelID).send(`<@${member.id}>`, embed)
    }
}

module.exports = guildMemberAddEvent