const { Listener } = require("discord-akairo");
class ReadyEvent extends Listener {
  constructor() {
    super("ready", {
      emitter: "client",
      event: "ready",
    });
  }

  exec() {
    console.log(
        `Logged in as ${this.client.user.tag}.`
    );
  }
}

module.exports = ReadyEvent;
