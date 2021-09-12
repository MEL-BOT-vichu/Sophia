const WhatsAlexa = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')

// Bad word Block System
// This Plugins By Hisham and saidalisaid
const BAD = "Bad words Not Allowed"
 if (Config.BADBLOCK == 'true') {
WhatsAlexa.addCommand({on: 'text', fromMe: false, delownsewcmd: false, onlyPm: true }, (async (message, match) => {
        let regexb1ichu = new RegExp('thayoli')
        let regexb2ichu = new RegExp('Myre')
        let regexb3ichu = new RegExp('myre')
        let regexb4ichu = new RegExp('Poori')
        let regexb5ichu = new RegExp('poori')
        let regexb6ichu = new RegExp('Myr')
        let regexb7ichu = new RegExp('myr')
        let regexb8ichu = new RegExp('poorimone')
        let regexb9ichu = new RegExp('Poorimone')
        let regexb10ichu = new RegExp('Poorimon')
        let regexb11ichu = new RegExp('poorimon')
        let regexb12ichu = new RegExp('Polayadi')
        let regexb13ichu = new RegExp('polayadi')
        let regexb14ichu = new RegExp('pooran')
        let regexb15ichu = new RegExp('thalayoli')
        let regexb16ichu = new RegExp('Thalayoli')
        let regexb17ichu = new RegExp('Myren')
        let regexb18ichu = new RegExp('myren')
        let regexb19ichu = new RegExp('umbi')
        let regexb20ichu = new RegExp('ombi')
        let regexb21ichu = new RegExp('pundachi')
        let regexb22ichu = new RegExp('Pundachi')
        let regexb23ichu = new RegExp('andi')
        let regexb24ichu = new RegExp('Andi')
        let regexb25ichu = new RegExp('Thantha')
        let regexb26ichu = new RegExp('funda')
        let regexb27ichu = new RegExp('thantha')
        
      
     
    
    
// export data -(Hisham-muhammed)
          if (regexb1ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + BAD + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          } 
        else if (regexb2ichu.test(message.message)) {
          
           await message.client.sendMessage(message.jid, '*' + BAD + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
         else if (regexb3ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + BAD + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
        else if (regexb4ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + BAD + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
          else if (regexb5ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + BAD + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
          else if (regexb6ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + BAD + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
          else if (regexb7ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + BAD + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
          else if (regexb8ichu.test(message.message)) {
          
           await message.client.sendMessage(message.jid, '*' + BAD + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
         else if (regexb9ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + BAD + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
        else if (regexb10ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + BAD + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
          else if (regexb11ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + BAD + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
          else if (regexb12ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + BAD + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
          else if (regexb13ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + BAD + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
          else if (regexb14ichu.test(message.message)) {
          
           await message.client.sendMessage(message.jid, '*' + BAD + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
         else if (regexb15ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + BAD + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
        else if (regexb16ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + BAD + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
          else if (regexb17ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + BAD + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
          else if (regexb18ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + BAD + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
          else if (regexb19ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + BAD + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
          else if (regexb20ichu.test(message.message)) {
          
           await message.client.sendMessage(message.jid, '*' + BAD + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
         else if (regexb21ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + BAD + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
        else if (regexb4ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + BAD + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
          else if (regexb22ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + BAD + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
          else if (regexb23ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + BAD + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
          else if (regexb24ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + BAD + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
          else if (regexb25ichu.test(message.message)) {
          
           await message.client.sendMessage(message.jid, '*' + BAD + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
         else if (regexb26ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + BAD + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
        else if (regexb27ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + BAD + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
               
}));

}
