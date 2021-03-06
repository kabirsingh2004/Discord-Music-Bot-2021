const { Client, Message } = require("discord.js");
const { player } = require(".");

/**
 *
 * @param {Client} client
 * @param {Message} message
 */

module.exports = async (client) => {
    console.log(`Events Loaded`);
  // track start
  player.on("trackStart", async (queue, track) => {
    queue.metadata.channel.send(`🎵 Playing \`${track.title}\``);
  });

  // song added
  player.on("trackAdd", async (queue, track) => {
    queue.metadata.channel.send(`🎵 Added to Queue \`${track.title}\``);
  });
};
