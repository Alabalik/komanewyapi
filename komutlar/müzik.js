const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
var prefix = ayarlar.prefix
exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('#FF0000')
.setTitle('» Muzik Komut Grupları')
.setTimestamp()
.addField('» -Çal- Müzik Dinlersiniz', prefix + 'çal ')
.addField('» -Ses- Müziğin Sesin Ayarlarsınız', prefix + 'ses 1/100')
.addField('» -Geç- Şarkıyı Geçersiniz', prefix + 'geç')
.addField('» -Çalan- Çalan Şarkı Hakkında Bilgi Verir', prefix + 'çalan')
.addField('» -Duraklat- Şarkıyı Durdurursunuz', prefix + 'duraklat')
.addField('» -Devam- Şarkıyı Devam Ettirirsiniz', prefix + 'devam')
.addField('» -Sıra- Kuyruğu Görürsünüz', prefix + 'sıra')
.addField('» -Komutlar- Botun Komutlarını Gösterir', prefix + 'komutlar')
.setFooter('© 2020 KOMA VIP Müzik', client.user.avatarURL)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['y','yardım','müzik','muzik','muzık'], 
  permLevel: 0 
};

exports.help = {
  name: 'müzik',
  description: 'Tüm komutları gösterir.',
  usage: 'müzik'
};