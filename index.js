const tmi = require("tmi.js");
const axios = require("axios");
const config = {
  options: { debug: true },

  connection: {
    secure: true,
    reconnect: true,
  },
  identity: {
    username: "Pamshito_bot",
    password: "oauth:x69nw2i38657whtai0lhagesi1gxkp",
  },
  channels: ["pamsho_js"],
};

const client = new tmi.client(config);
client.on("connected", (address, port) => {
  client.action("pamsho_js", `Estamos envivo perros :v`);
});
client.on("message", (channel, tags, message, self) => {
  // Ignore echoed messages.
  if (self) return;

  const args = message.slice(1).split(" ");
  const command = args.shift().toLowerCase();

  if (command === "redes") {
    client.say(
      channel,
      `
    Hola @${tags.username} mis redes son 
    Instagram:https://bit.ly/31RBxEh
    Youtube:https://bit.ly/31RBxEh
    `
    );
  }
  if (command === "pokemon") {
    const pokemon = Math.floor(Math.random() * 126);
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(response => {
      client.say(
        channel,
        `
    Hola @${tags.username} eres un ${(response.data.name).toUpperCase()} XD
    `
      );
    });
  }
  if(command ==="donacion"){

    client.say(channel,`Si quieres ayudarme en mis estudios :3 me puedes donar en : https://streamlabs.com/pamsho_js/tip`)
  }
});

client.connect();
