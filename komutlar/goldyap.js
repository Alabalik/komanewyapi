//    let çarpı = client.emojis.get("654344235620892682")
// let tik = client.emojis.get("654344235784470539")
const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = async (client, message, args) => {
  let çarpı = client.emojis.get("emojiid")
  let nesne = args[0]
  let çarpı2 = client.emojis.get("emojiid")
  if (!nesne) return message.channel.send(çarpı2 + ' **Gold üye olacak kişinin idsini girermisin başkan.**')
  
 await db.set(`gold_${nesne}`, 'tm')
  let tik = client.emojis.get("726403140806770750")
  message.channel.send(`${tik} <@${nesne}> kullanıcısı yani **${nesne}** IDli kullanıcı gold üye oldu!`)
   client.guilds.get(" 726403140806770750").channels.find(x => x.name === "➵gold-üye-log").send(`${tik} <@${nesne}> kullanıcısı için gold üyeliği **açıldı!**`)
 
}  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};
exports.help = {
  name: 'gold-ver',
  description: '[Admin Komutu]',
  usage: 'karaliste <ID>'
};
