const Discord = require("discord.js");
const data = require('quick.db');
exports.run = async (client, message, args,member) => {// chimp#6907

let rol = "738239593177940007"
let embedd = new Discord.RichEmbed()
.setColor("RANDOM")
         
.setDescription(`Bu komutu kullanmak için <@&738239593177940007> rolüne sahip olmalısın`)
     
if(!message.member.roles.has(rol)) return message.channel.send(embedd)
  
if(!args[0]) return message.channel.send(new Discord.RichEmbed().setDescription(`Bir kişiyi etiketlemelisin.`));
  
let role = message.guild.roles.get("738239593173745698")// Erkek rol id
let rolesil = message.guild.roles.get("738239593173745696")// Silinecek rol id
let unregistered = message.guild.roles.get("738239593169682533")// Kayıtsız rol id
let kullanıcı = message.mentions.users.first()
if(!kullanıcı) return message.channel.send(new Discord.RichEmbed().setDescription(`${args[0]}, kullanıcısını sunucuda bulamıyorum!`))
if(kullanıcı.bot) return;
  
let isim = args[1];
if(!isim) return message.channel.send(new Discord.RichEmbed().setDescription(`${args[0]}, için bir isim girmelisin!`))
if(isim.length > 16) return message.channel.send(new Discord.RichEmbed().setDescription(`Daha kısa bir isim yaz!`))

let yaş = args[2];
if(!yaş) return message.channel.send(new Discord.RichEmbed().setDescription(`${args[0]}, için bir yaş gir!`))
if(yaş.length > 2) return message.channel.send(new Discord.RichEmbed().setDescription(`99 Yaşından daha büyük bir yaş giremezsin!`))
  
const emb = new Discord.RichEmbed()
.setAuthor(client.user.username, client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
.setTimestamp()
.setColor(`#fffff0`)
.setFooter(`#${message.channel.name} kanalında kullanıldı.`)

message.guild.members.get(kullanıcı.id).setNickname(`${isim} | ${yaş}`)
message.guild.members.get(kullanıcı.id).addRole(role.id)
message.guild.members.get(kullanıcı.id).removeRole(unregistered.id)
message.guild.members.get(kullanıcı.id).removeRole(rolesil.id)

const embb = new Discord.RichEmbed()
embb.setDescription(`${kullanıcı}, kullanıcısı kayıt edildi`)
.addField(`Kayıt eden:`, message.author, true)
.addField(`Yeni ismi:`, args[1], true)
.addField(`Yeni yaşı:`, args[2], true)
.addField(`Verilen rol:`, role.name, true)
.addField(`Alınan rol:`, unregistered.name, true)
.setFooter(message.author.tag,message.author.avatarURL);
  
    await client.channels.get("734556241321394247").send(embb)


// Çok isterseniz botun yolladığı mesaja tepki ekleyebilirsiniz.
// .then(m => m.react(``))
      let yetkili = message.author


}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['k'],
  permLevel: 0
};

exports.help = {
  name: 'kız'
};