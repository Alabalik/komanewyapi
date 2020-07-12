const Discord = require('discord.js');
const loglar = require('../loglar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`KOMA VIP`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .addField(`KOMA VIP Bot Istatistik `, `:small_orange_diamond: **Bellek kullanımı  :** ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\n:small_blue_diamond: **Kullanıcılar  :** ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}\n:small_orange_diamond: **Sunucular  :** ${client.guilds.size.toLocaleString()}\n:small_blue_diamond: **Kanallar  :** ${client.channels.size.toLocaleString()}\n:small_orange_diamond: **Discord.js sürüm :** v${Discord.version}\n:small_blue_diamond: **Ping  :** ${Math.round(client.ping)} ms \n\n:cyclone: **Version  :** 0.2.4\n :flag_tr: **Ülke  :** Türkiye / TR \n\n  **KOMA VIP 2020 ©**`)
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};


  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["istatiskik","i","info","bilgi","İ","İstatistik","İSTATİSTİK","İNFO","İnfo","Bilgi","BİLGİ","bot durum","Botdurum","botdurum","bi","Bi","Bİ"],
  };
  
  exports.help = {
    name: 'istatistik',
    description: 'Botun istatistiklerini gösterir.',
    usage: 'istatistik'
  };