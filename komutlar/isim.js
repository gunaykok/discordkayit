const Discord = require("discord.js");
const db = require('quick.db');
exports.run = async (client, message, args,member) => {// chimp#6907

let rol = "738239593177940007"
let embedd = new Discord.RichEmbed()
.setColor("RANDOM")
         
.setDescription(`Bu komutu kullanmak için <@&738239593177940007> rolüne sahip olmalısın`)
     
if(!message.member.roles.has(rol)) return message.channel.send(embedd)
  
if(!args[0]) return message.channel.send(new Discord.RichEmbed().setDescription(`Bir kişiyi etiketlemelisin!`));
let kullanıcı = message.mentions.users.first()
if(!kullanıcı) return message.channel.send(new Discord.RichEmbed().setDescription(`${args[0]}, kullanıcısını sunucuda bulamıyorum!`))
if(kullanıcı.bot) return;
  
let isim = args[1];
if(!isim) return message.channel.send(new Discord.RichEmbed().setDescription(`${args[0]}, için bir isim girmelisin!`))
if(isim.length > 16) return message.channel.send(new Discord.RichEmbed().setDescription(`Daha kısa bir isim yaz!`))

let yaş = args[2];
if(!yaş) return message.channel.send(new Discord.RichEmbed().setDescription(`${args[0]}, için bir yaş gir!`))
if(yaş.length > 2) return message.channel.send(new Discord.RichEmbed().setDescription(`99 Yaşından daha büyük bir yaş giremezsin!`))
  
  
message.guild.members.get(kullanıcı.id).setNickname(`${isim} \|\ ${yaş}`)

const embb = new Discord.RichEmbed()
embb.setDescription(`${kullanıcı}, kullanıcısının ismi değiştirildi `)
.addField(`Yeni ismi:`, `${isim} \|\ ${yaş}` , true)
.setFooter(message.author.tag,message.author.avatarURL);
  
    await client.channels.get("734556241321394247").send(embb)
  

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['i'],
  permLevel: 0
};

exports.help = {
  name: 'isim'
};