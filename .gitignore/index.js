const Discord = require('discord.js')
const bot = new Discord.Client()
bot.login('NTU2NTA3MjAyNDI1MzIzNTQ3.XK27wA.ma0_qo81nxwGuO9ZZeTnoOchs-I') 

var prefixs = "!"
var prefixs2 = "/"
var randnum = 3
var randpf = 2
var OwnerID = "459709643212587008"

bot.on("ready", () => {
  console.log("LOG : ToniScopBot est prêt !")
  //online, idle, dnd -- // TYPE | WATCHING | LISTENING | PLAYING | STREAMING
  //("Txt here", {type: ""}, {url: "https://www.twitch.tv/iceouuu"})
  
  setInterval(function(){
    let status = statuses[Math.floor(Math.random() * statuses.length)]
    bot.user.setActivity(status, {url: "https://twitch.tv/friandise_"});
  }, 10000) //temp avant changement !

  let statuses = [
    `${bot.guilds.size} serveurs & ${bot.users.size} utilisateurs `,
    `Chanel : ToniScop`
  ]
// || ` = altgr + 7
})

bot.on("message", function (message){
  if(message.content === "easteregg"){
  message.delete()
  message.author.createDM().then(channel => { 
    channel.send('Friandise#4475')
  })
 }

  if(message.content === prefixs2 + "help"){
    var test_embed = new Discord.RichEmbed()
    .setTitle('_**Voici Les Commandes Que Le Bot Peut Faire :**_')
    .setDescription('Mais Avant Va Voir La Chaîne de ToniScop : https://www.youtube.com/channel/UCETVQ0vBMMBEVQU9e09Pa9A')
    .addField('**⚡ Commande de base :**', '`!clear <nb>` ; `!invite` ; `en développement...`')
    .addField('**🕹️ Les jeux :**', '`pierre ou feuille ou ciseaux` ; `pile ou face ` ; `en développement...`')
    .setTimestamp()
    .setFooter('Crée par ToniScop - Ps : certains easteregg sont présent :p ')
    .setColor('#ff00ec')
    message.channel.send(test_embed)
  }

  if(message.content.startsWith(prefixs + "clear")) {
    if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("**:x: Tu ne peux pas effectuer cette commande !**").then(msg => msg.delete (3000))

    let args = message.content.split(" ").slice(1)

    if(!args[0]) return message.channel.send("**:x:Tu dois préciser un nombre de message à supprimer !**").then(msg => msg.delete (3000))
    message.channel.bulkDelete(args[0]).then(() => {
      message.channel.send(`**:recycle: nettoyage de ${args[0]} messages !**`).then(msg => msg.delete (3000))
    })
  }

  if(message.content === prefixs + "invite") { 
    var img1 = new Discord.RichEmbed()
    .setImage('https://cdn.discordapp.com/attachments/502459000315707393/509313341655613441/rainbow.gif')
    .setColor('BLUE')

    var invite_embed = new Discord.RichEmbed()
   .setColor('#ffffff') 
   .setTitle("Lien d'invitation de ToniScopBot")
   .addField('Permissions Modifiable',`[ -> Cliquez ici <- ](https://discordapp.com/oauth2/authorize?client_id=556507202425323547&scope=bot&permissions=2146958839)`)   
 
   var img2 = new Discord.RichEmbed() 
   .setColor('RED')
   .setImage('https://cdn.discordapp.com/attachments/502459000315707393/509313341655613441/rainbow.gif')
    message.channel.send(img1)
    message.channel.send(invite_embed)
    message.channel.send(img2)
  }

  if (message.content === 'pierre') { 
    randomss()
  
    if (randnum == 1){
      message.delete()
      message.channel.send('Pierre > Ciseaux').then(msg => msg.delete (5000))
      return message.channel.send('Félicitation !').then(msg => msg.delete (4000))
    } 
  
    if (randnum == 2){
      message.delete()
      message.channel.send(' Pierre < Feuille ').then(msg => msg.delete (5000))
      return message.channel.send('Dommage retente ta chance').then(msg => msg.delete (4000))
    }

    if (randnum == 3){
      message.delete()
      message.channel.send('Pierre = Pierre').then(msg => msg.delete (5000))
      return message.channel.send("Rejoue pour tenter de gagner").then(msg => msg.delete (4000))
    }
  }

  if (message.content === 'feuille') {
    randomss()
  
    if (randnum == 1){
      message.delete()
      message.channel.send('Feuille < Ciseaux ').then(msg => msg.delete (5000))
      return message.channel.send('Dommage retente ta chance').then(msg => msg.delete (4000))
    }
  
    if (randnum == 2){
      message.delete()
      message.channel.send('Feuille > Pierre').then(msg => msg.delete (5000))
     return message.channel.send('Félicitation !').then(msg => msg.delete (4000))
    }

    if (randnum == 3){
      message.delete()
      message.channel.send('Feuille = Feuille').then(msg => msg.delete (5000))
      return message.channel.send("Rejoue pour tenter de gagner").then(msg => msg.delete (4000))
    }
  }

  if (message.content === 'ciseaux') {
    randomss()
  
    if (randnum == 1){
      message.delete()
      message.channel.send('Ciseaux < Pierre ').then(msg => msg.delete (5000))
      return message.channel.send('Dommage retente ta chance').then(msg => msg.delete (4000))
    }
  
    if (randnum == 2){
      message.delete()
      message.channel.send('Ciseaux > Feuille').then(msg => msg.delete (5000))
      return message.channel.send('Félicitation !').then(msg => msg.delete (4000))
    }

    if (randnum == 3){
      message.delete()
      message.channel.send('Ciseaux = Ciseaux').then(msg => msg.delete (5000))
      return message.channel.send('Rejoue pour tenter de gagner').then(msg => msg.delete (4000))
    }
  }

  if(message.content === "op"){
    message.delete()
    message.author.createDM().then(channel => { 
      channel.send('Salut Bg !')
    })
   }

})

// ne pas toucher // pour P F C
function randomss(min, max) {
  min = Math.ceil(0)
  max = Math.floor(3)
  randnum = Math.floor(Math.random() * (max - min +1) + min) 
}

function randomspf(min, max) {
  min = Math.ceil(0)
  max = Math.floor(2)
  randpf = Math.floor(Math.random() * (max - min +1) + min) 
}

let y = process.openStdin()
y.addListener("data", res => {
  let x = res.toString().trim().split(/ +/g)
  bot.channels.get("566308129130938370").send(x.join(" "));     // bot.channels.get("l'id du chanel que tu veux").send(x.join(" "));
}) // pour mentionner une personne tu fait <@sonid>


bot.on('message', function (message){
  if (message.content === prefixs+ "list" && message.author.id === OwnerID){
    message.channel.send(bot.guilds.map(r => "Serveur : **" + r.name + `** | Utilisateurs et bots : **${r.memberCount}** | Owner : **` + r.owner + '**')).then(msg => msg.delete (10000)) 
  }
})

bot.on('message', function (message){ // genre je peux faire ça : 
  if(message.content === 'pile'){
    randomspf()
  
    if (randpf == 1){
      message.delete()
      message.channel.send('Pile').then(msg => msg.delete (5000))
      return message.channel.send('Ta Perdu, Dommage !').then(msg => msg.delete (4000))
    }
  
    if (randpf == 2){
      message.delete()
      message.channel.send('Pile').then(msg => msg.delete (5000))
      return message.channel.send('Ta Gagné, GG !').then(msg => msg.delete (4000))
    }
   }
  
   if(message.content === 'face'){
    randomspf()
  
    if (randpf == 1){
      message.delete()
      message.channel.send('Face').then(msg => msg.delete (5000))
      return message.channel.send('Ta Perdu, Dommage !').then(msg => msg.delete (4000))
    }
  
    if (randpf == 2){
      message.delete()
      message.channel.send('Face').then(msg => msg.delete (5000))
      return message.channel.send('Ta Gagné, GG !').then(msg => msg.delete (4000))
    }
   }
}) 


bot.on('message', function (message){
  if(message.content === prefixs + "partenaire"){
    var part = new Discord.RichEmbed() // la jsp
    .setDescription('Voici tout nos partenaires :')
    .setFooter('Skynl', "Lol")
    .setTimestamp()
    .setFooter(`Affichage des partenaires par ${message.author.username}`)
    .setColor('RAINBOW') // face palme JE SUIS TROP CON PTNNNNNTN4ZRG4RF j'ai pas send le messagere
    message.channel.send(part)
  }
}) 

bot.on('guildMemberAdd', member => {
  member.createDM().then(channel => {
    return channel.send(':hearts: __***Bienvenue Sur Le Serveur !***__ :hearts:')
  }).catch(console.error)
  // On pourrait catch l'erreur autrement ici (l'utilisateur a peut être désactivé les MP)
})

bot.on("message", async message => {
  if (message.content.startsWith(prefixs + "mp")&& message.author.id === OwnerID) {

            var args = message.content.split(" ").slice(1);
            var msge = args.join(' ');

            if(!msge) return message.channel.send("**:x: Précise un message**").then(msg => msg.delete (3000))

             message.delete()
             message.guild.members.map(m => m.send(msge))

             
     }

});

