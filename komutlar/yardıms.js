const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

module.exports.run = async(client, message, args) => {
 
  let sayfalar = [':tools: **Yetkili Komutları** :tools: \n\n • k!kick \n • k!oylama \n • k!reboot \n • k!ban \n • k!banlist \n • k!duyuru \n • k!çekiliş \n • k!isim \n • k!fakemesaj \n • k!uyarı \n • k!sabitle \n • k!partner \n • k!botkontrol','• k!otorol-sistemi \n • k!herkesten-rol-al \n • k!herkese-rol-ver \n • k!unbanall \n • k!serverpanel \n • k!serverpanelkaldır']; 
  let page = 1; 
 
 const embed = new Discord.RichEmbed()
    .setTitle("Yardım Menüsü") 
    .setColor("BLUE")
    .setFooter(`Sayfa ${page} - ${sayfalar.length}`) 
    .setDescription(sayfalar[page-1])
    .setThumbnail("https://media.discordapp.net/attachments/651606399796641808/730924648111276113/kompng.png?width=448&height=452")
 
  message.channel.send(embed).then(msg => { 
   
    msg.react('⏪').then( r => { 
      msg.react('⏩') 
     
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id; 
     
      const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 }); 
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 }); 
     
      
      backwards.on('collect', r => { 
        if (page === 1) return; 
        page--; 
        embed.setTitle("Sayfalı Yardım Menüsü")
        embed.setDescription(sayfalar[page-1]); 
        embed.setFooter(`Sayfa ${page} - ${sayfalar.length}`);
        embed.setColor("BLUE") 
        msg.edit(embed) 
      })
     
      forwards.on('collect', r => { 
        if (page === sayfalar.length) return; 
        page++; 
        embed.setTitle("Sayfalı Yardım Menüsü")
        embed.setDescription(sayfalar[page-1]); 
        embed.setFooter(`Sayfa ${page} - ${sayfalar.length}`);
        embed.setColor("BLUE") 
        msg.edit(embed) 
      })
   
    })
 
  })
 
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["syardım"],
  permLevel: 0
};

module.exports.help = {
  name: 'syardım',
  description: 'Yardım Menüsünü Gösterir.',
  usage: 'syardım'
};