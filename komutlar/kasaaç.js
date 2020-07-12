const Discord = require('discord.js');

exports.run = (client, message) => {
    let csgopng = "https://cdn.discordapp.com/attachments/447829045376319500/516564269584744448/csgo.png"
    var kasadancikanlar = [
        "Glock-18 'Fade' (**Factory New**) \nFiyat:**298.88$**",
        "M4A4 Poseidon (**Factory New**) \nFiyat:**216.11$**",
        "AK-47 Fire Serpent (**Factory New**) \nFiyat:**622.62$**",
        "M4A4 Howl (**Factory New**) \nFiyat:**1713.9$**",
        "M4A1-S Knight (**Factory New**) \nFiyat:**272.69$**",
        "M4A1-S Hot Rod (**Factory New**) \nFiyat:**60.88$**",
        "AWP Medusa (**Factory New**) \nFiyat:**1582.05$**",
        "AWP Dragon Lore (**Factory New**) \nFiyat:**1813.93$**",
        "Bayonet 'Slaugther' (**Factory New**) \nFiyat:**230.6$**",
        "M9 Bayonet 'Slaughter' (**Factory New**) \nFiyat:**321.3$**",
        "Karambit 'Case Hardened' (**Factory New**) \nFiyat:**450.54$**",
        "M9 Bayonet 'Marble Fade' (**Factory New**) \nFiyat:**413.2$**",
        "Bayonet 'Marble Fade' (**Factory New**) \nFiyat:**288.19$**",
        "M9 Bayonet 'Bright Water' (**Factory New**) \nFiyat:**150.5$**",
        "Karambit 'Lore' (**Factory New**) \nFiyat:**1262.28$**",
        "Gut Knife 'Gamma Doppler' (**Factory New**) \nFiyat:**110.56$**",
        "Gut Knife 'Freehand' (**Factory New**) \nFiyat:**73.97$**",
        "Glock-18 'Fade' (**Minimal Wear**) \nFiyat:**295.61$**",
        "M4A4 Poseidon (**Minimal Wear**) \nFiyat:**198.88$**",
        "M4A4 Poseidon (**Field-Tested**) \nFiyat:**172.92$**",
        "AK-47 Fire Serpent (**Minimal Wear**) \nFiyat:**252.21$**",
        "AK-47 Fire Serpent (**Field-Tested**) \nFiyat:**183.56$**",
        "AK-47 Fire Serpent (**Well-Worn**) \nFiyat:**170.69$**",
        "AK-47 Fire Serpent (**Battle-Scared**) \nFiyat:**104.64$**",
        "M4A4 Howl (**Minimal Wear**) \nFiyat:**1335.36$**",
        "M4A4 Howl (**Field-Tested**) \nFiyat:**801.08$**",
        "M4A4 Howl (**Well-Worn**) \nFiyat:**880$**",
        "M4A1-S Knight (**Minimal Wear**) \nFiyat:**330.01$**",
        "M4A1-S Hot Rod (**Minimal Wear**) \nFiyat:**77.73$**",
        "AWP Medusa (**Minimal Wear**) \nFiyat:**798$**",
        "AWP Medusa (**Field-Tested**) \nFiyat:**677.15$**",
        "AWP Medusa (**Well-Worn**) \nFiyat:**592.69$**",
        "AWP Medusa (**Battle-Scarred**) \nFiyat:**580.01$**",
        "AWP Dragon Lore (**Minimal Wear**) \nFiyat:**1608.97$**",
        "AWP Dragon Lore (**Field-Tested**) \nFiyat:**1043.44$**",
        "AWP Dragon Lore (**Well-Worn**) \nFiyat:**1030.83$**",
        "AWP Dragon Lore (**Battle-Scarred**) \nFiyat:**915.29$**",
        "Bayonet 'Slaughter' (**Minimal Wear**) \nFiyat:**187.48$**",
        "Bayonet 'Slaughter' (**Field-Tested**) \nFiyat:**140.1$**",
        "M9 Bayonet 'Slaughter' (**Minimal Wear**) \nFiyat:**234.07$**", 
        "M9 Bayonet 'Slaughter' (**Field-Tested**) \nFiyat:**190.26    $**",
        "Karambit 'Case Hardened' (**Minimal Wear**) \nFiyat:**257.58$**",
        "Karambit 'Case Hardened' (**Field-Tested**) \nFiyat:**228.7    $**",
        "Karambit 'Case Hardened' (**Well-Worn**) \nFiyat:**195.68    $**",
        "Karambit 'Case Hardened' (**Battle-Scarred**) \nFiyat:**182.71$**",
        "M9 Bayonet 'Marble Fade' (**Minimal Wear**) \nFiyat:**498.15$**",
        "Bayonet 'Marble Fade' (**Minimal Wear**) \nFiyat:**297.6$**",
        "M9 Bayonet 'Bright Water' (**Minimal Wear**) \nFiyat**136.4$**",
        "M9 Bayonet 'Bright Water' (**Field-Tested**) \nFiyat**115.63    $**",
        "M9 Bayonet 'Bright Water' (**Well-Worn**) \nFiyat**102.13$**",
        "M9 Bayonet 'Bright Water' (**Battle-Scarred**) \nFiyat**101.83$**",
        "Karambit 'Lore' (**Minimal Wear**) \nFiyat:**748.02$**",
        "Karambit 'Lore' (**Field-Tested**) \nFiyat:**347.65$**",
        "Karambit 'Lore' (**Well-Worn**) \nFiyat:**348.81$**",
        "Karambit 'Lore' (**Battle-Scarred**) \nFiyat:**244.97$**",
        "Gut Knife 'Gamma Doppler' (**Minimal Wear**) \nFiyat:**125$**",
        "Gut Knife 'Freehand' (**Minimal Wear**) \nFiyat:**68.82$**",
        "Gut Knife 'Freehand' (**Field-Tested**) \nFiyat:**60.46$**",
        "Gut Knife 'Freehand' (**Well-Worn**) \nFiyat:**64.84    $**",
        "Gut Knife 'Freehand' (**Battle-Scarred**) \nFiyat:**52$**",

    ]
    var kasadancikanlar = kasadancikanlar[Math.floor(Math.random(1) * kasadancikanlar.length)]
    const embed  = new Discord.RichEmbed()
    .setImage("https://cdn.wallpapersafari.com/40/16/8rTMh6.jpg")
    .setAuthor('KOMA BOT', csgopng)
    .setDescription(`${kasadancikanlar}`)
    .setFooter(`Kasayı açan (${message.author.username}) | Açtığın kasanın Fiyatı: 80$ | Kasadan çıkan bütün ürünler sizde kalmaz sadece eğlence için yapılmış bir komutdur`)
    .setColor("RANDOM")
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['csgokasa'],
  permLevel: 0
};

exports.help = {
  name: 'kasaaç',
  description: 'CS:GO kasa açma simülasyonu',
  usage: 'kasaaç'
};