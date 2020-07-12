const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  const kategoriliyardım = new Discord.RichEmbed()
  .setTitle("KOMA | VIP")
  .setColor("BLUE") 
  .setDescription("Örnek komut kullanımı; `k!eğlence`\n Destek sunucumuza gelerek bize destek çıkabilirsiniz!")
  .addField("**🔨 Yetkili Komutları 🔨**", `${prefix}yetkili : Yetkili komutlarını gösterir.`)
  .addField("**✨ Eğlence Komutları ✨**", `${prefix}eğlence : Eğlence komutlarını gösterir.`)
  .addField("**👥 Kullanıcı Komutları 👥**", `${prefix}kullanıcı : Kullanıcı komutlarını gösterir.`)
  .addField("**:musical_note: Müzik Komutları :musical_note:**", `${prefix}müzik : Müzik komutlarını gösterir.`)
  .setThumbnail("https://media.discordapp.net/attachments/651606399796641808/730924648111276113/kompng.png?width=448&height=452")
  .addField("Linkler", "[Destek Sunucusu!](https://discord.gg/cmW6pck) | [Davet Et!](https://discord.com/oauth2/authorize?client_id=651165646171930655&scope=bot&permissions=8)")
  .setTimestamp()
  .setFooter(message.author.tag + " Tarafından istendi", message.author.avatarURL);
  message.channel.send(kategoriliyardım);
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y", "help", "h"],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: 'KOMA VIP Yardım',
  usage: 'yardım <kategori>'
};