const chalk = require('chalk')
const moment = require('moment')
const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

var prefix= ayarlar.prefix;

module.exports = client => {
  console.log(`----------------------------------------------------------------`);
  console.log(`᱗ Aktif!`);
  console.log(`᱗ Komutlar yüklendi!`);
  console.log(`᱗ Kullanılmaya hazır!`);
  console.log(`----------------------------------------------------------------`);
  client.user.setStatus("dnd");
  //idle = boşta
  //dnd = rahatsız etmeyin
  //online = çevrimiçi
  client.user.setGame(`CFG EKİP KRALDIR <3`);
//    var oyun = [
  //      `CFG EKİP KRALDIR <3`,
    //];
  
    //setInterval(function() {

      //  var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        //client.user.setGame(oyun[random], );
        //}, 2 * 4000);
  
};
