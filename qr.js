/* Copyright (C) 2020 Yusuf Usta.
re edited by hisham-Muhammed

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsAsena - Yusuf Usta
*/

const chalk = require('chalk');
const {WAConnection, MessageOptions, MessageType} = require('@adiwajshing/baileys');
const {StringSession} = require('./whatsasena/');
const fs = require('fs');

async function whatsAsena () {
    const conn = new WAConnection();
    const Session = new StringSession();  
    conn.version = [2,2121,7];
    conn.logger.level = 'warn';
    conn.regenerateQRIntervalMs = 50000;
    
    conn.on('connecting', async () => {
        console.log(`${chalk.green.bold('Whats')}${chalk.blue.bold('Asena')}
${chalk.white.italic('AsenaString Kodu Alıcı')}

${chalk.blue.italic('ℹ️  Connecting to Whatsapp... Please Wait.')}`);
    });
    

    conn.on('open', async () => {
        var st = Session.createStringSession(conn.base64EncodedAuthInfo());
        console.log(
            chalk.green.bold('Asena String Kodunuz: '), Session.createStringSession(conn.base64EncodedAuthInfo())
        );
        
        if (!fs.existsSync('config.env')) {
            fs.writeFileSync('config.env', `ASENA_SESSION="${st}"`);
        }
        if (conn.user.jid.startsWith('90')) {
            await conn.sendMessage(conn.user.jid,st, MessageType.text)
            await conn.sendMessage(conn.user.jid,'*Bu Kodu Kimseyle Paylaşmayın!*', MessageType.text)
            console.log(
                chalk.blue.bold('Locale kuruyorsanız node bot.js ile botu başlatabilirsiniz.')
            );
        }
        else {
            await conn.sendMessage(conn.user.jid,st, MessageType.text)
            await conn.sendMessage(conn.user.jid,'*ഈ code ആർക്കും share ചെയ്യരുത്⚠️. Share ചെയ്ത് എന്തെങ്കിലും കുരിക്കിൽ പെട്ടാൽ ഞങ്ങൾ ഉത്തരവാദികൾ അല്ല⚠️!*', MessageType.text)
            console.log(
                chalk.blue.bold('നിങ്ങൾ termux വഴി bot install ആക്കിയാൽ നോട്.js എന്ന command use ചെയ്ത് bot പ്രേവർത്തിപ്പികാം💖')
            );
        }
        
        process.exit(0);
    });

    await conn.connect();
}

whatsAsena()
