const config = {
  "ownerID": "726403140806770750",//Bu kısıma, kendi ID'niz. 
  "sahip": ["726403140806770750"],
  "admins": [""],//Yetkili eklemek isterseniz, o kişinin ID'si.
  "support": [""],//Destek ekibi eklemek isterseniz, o kişinin ID'si.
  "token": "",//Botun, tokeni.
  "dashboard" : {
    "oauthSecret": "",//Client secret.
    "callbackURL": `https://v12muzik.glitch.me/callback`,//oAuth2 kısmında bulunan kutucuğa, bu bağlantıyı ekleyiniz.
    "sessionSecret": "Codare",//Bu kısımı, değiştirmeyiniz.
    "domain": "https://v12muzik.glitch.me"//Sitenin, adresi.
  }
};

module.exports = config;