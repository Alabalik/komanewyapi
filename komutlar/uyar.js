const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`Bu komutu kullanmak için yeterli izne sahip değilsin.`)
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0x29067B)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`uyar` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first() || client.users.get(args[0]) //eğer etiket yoksa bize girdiğimiz id'den kullanıcıyı buldurur
  let gmodlog = guild.channels.find('name', 'uyarı-log');
  if (!gmodlog) return message.reply('`uyarı-log` kanalını bulamıyorum.');
  if (reason.length < 1) return message.reply('Kişiyi etiketleyip sebebi yazmalısın!');
  if (!user) return message.reply('Kimi uyaracağını yazmalısın.').catch(console.error);
  const embed = new Discord.RichEmbed()
  .setColor(0x29067B)
  .setTimestamp()
  .addField('❁Eylem:', 'Uyarı')
  .addField(':bust_in_silhouette: Kullanıcı:', `${user.tag}`)
  .addField('🔨Yetkili:', `${message.author.username}#${message.author.discriminator}`)
  .addField('✨Sebep', reason);
  guild.channels.get(gmodlog.id).sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["warn", "u","uyarı", "w"],
  permLevel: 0
};

exports.help = {
  name: 'uyar',
  description: 'İstediğiniz kişiyi uyarır.',
  usage: 'uyar [kullanıcı] [sebep]'
}; 