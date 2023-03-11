require("http").createServer((_, res) => res.end("ONLINE..")).listen(8080)
require('./setting')
const { default: tioConnect, useSingleFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("@adiwajshing/baileys")
const { state, saveState } = useSingleFileAuthState(`./${sessionName}.json`)
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const yargs = require('yargs/yargs')
const chalk = require('chalk')
const FileType = require('file-type')
const path = require('path')
const _ = require('lodash')
const lolcatjs = require('lolcatjs')
const axios = require('axios')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./lib/myfunc')

var low
try {
  low = require('lowdb')
} catch (e) {
  low = require('./lib/lowdb')
}

const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')

//global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
      new mongoDB(opts['db']) :
      new JSONFile(`src/database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
  if (global.db.data !== null) return
  global.db.READ = true
  await global.db.read()
  global.db.READ = false
  global.db.data = {
    users: {},
    chats: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    sticker: {},
    ...(global.db.data || {})
  }
  global.db.chain = _.chain(global.db.data)
}
loadDatabase()

if (global.db) setInterval(async () => {
    if (global.db.data) await global.db.write()
  }, 30 * 1000)

async function startTio() {
    const tio = tioConnect({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        browser: ['BOTCAHX','Safari','1.0.0'],
        auth: state
    })

    store.bind(tio.ev)
    
    // anticall auto block
    tio.ws.on('CB:call', async (json) => {
    const callerId = json.content[0].attrs['call-creator']
    if (json.content[0].tag == 'offer') {
    let pa7rick = await tio.sendContact(callerId, global.owner)
    tio.sendMessage(callerId, { text: `*Sistem otomatis block!*\n*Jangan menelpon bot*!\n*Silahkan Hubungi Owner Untuk Dibuka !*`}, { quoted : pa7rick })
    await sleep(8000)
    await tio.updateBlockStatus(callerId, "block")
    }
    })

    tio.ev.on('messages.upsert', async chatUpdate => {
        //console.log(JSON.stringify(chatUpdate, undefined, 2))
        try {
        mek = chatUpdate.messages[0]
        if (!mek.message) return
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        if (mek.key && mek.key.remoteJid === 'status@broadcast') return
        if (!tio.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
        if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
        m = smsg(tio, mek, store)
        require("./tio")(tio, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    })
    
    // Group Update
    tio.ev.on('groups.update', async pea => {
       //console.log(pea)
    // Get Profile Picture Group
       try {
       ppgc = await tio.profilePictureUrl(pea[0].id, 'image')
       } catch {
       ppgc = 'https://telegra.ph/file/91eca40a7c48c87716d2b.jpg'
       }
       let wm_tiodev = { url : ppgc }
       if (pea[0].announce == true) {
       tio.send5ButImg(pea[0].id, `「 *Group Settings Change* 」\n\nGroup telah ditutup oleh admin, Sekarang hanya admin yang dapat mengirim pesan !`, `GROUP MESSAGE`, wm_tiodev, [])
       } else if(pea[0].announce == false) {
       tio.send5ButImg(pea[0].id, `「 *Group Settings Change* 」\n\nGroup telah dibuka oleh admin, Sekarang peserta dapat mengirim pesan !`, `Group Settings Change Message`, wm_tiodev, [])
       } else if (pea[0].restrict == true) {
       tio.send5ButImg(pea[0].id, `「 *Group Settings Change* 」\n\nInfo group telah dibatasi, Sekarang hanya admin yang dapat mengedit info group !`, `Group Settings Change Message`, wm_tiodev, [])
       } else if (pea[0].restrict == false) {
       tio.send5ButImg(pea[0].id, `「 *Group Settings Change* 」\n\nInfo group telah dibuka, Sekarang peserta dapat mengedit info group !`, `Group Settings Change Message`, wm_tiodev, [])
       } else {
       tio.send5ButImg(pea[0].id, `「 *Group Settings Change* 」\n\nGroup Subject telah diganti menjadi *${pea[0].subject}*`, `Group Settings Change Message`, wm_tiodev, [])
     }
    })

 //Group Update
tio.ev.on('group-participants.update', async (anu) => {
console.log(anu)
try {
if (!anu.participants.includes(tio.user.jid)) {
let metadata = await tio.groupMetadata(anu.id)
let participants = anu.participants
for (let num of participants) {
try {
ppuser = await tio.profilePictureUrl(num, 'image') 
} catch {
ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
//Message Saat Ada User Yang Masuk Ke Grup
//f (global.db.data.chats[m.chat].welcome) {
        
if (anu.action == 'add') {
var but = [{buttonId: 'menu', buttonText: {displayText: 'Welcome Kak 👋'}, type: 1},]
tekswell = `Welcome @${num.split('@')[0]} 👋\n\n📛 Name : @${num.split('@')[0]}\n☎️ Nomer : ${num.split('@')[0]}\n🎎 Group : ${metadata.subject}\n👫 Member : ${metadata.participants.length} Members\n\n💠 Rest Api : ${global.webmy}\n`
tio.sendMessage(anu.id, { image: { url: ppuser }, contextInfo: { mentionedJid: [num] }, caption: tekswell, footer: `Welcome Message By ${global.botname}`, buttons: but })
//Message Saat Ada User Yang Keluar Dari Grup
} else if (anu.action == 'remove') {
var but = [{buttonId: 'menu', buttonText: {displayText: 'Sayonara Kak 👋'}, type: 1},]
teksbye = `Sayonaraa @${num.split("@")[0]} 👋\n\n📛 Name : @${num.split('@')[0]}\n☎️ Nomer : ${num.split('@')[0]}\n🎎 Group : ${metadata.subject}\n👫 Member : ${metadata.participants.length} Members\n\n💠 Rest Api : ${global.webmy}\n`
tio.sendMessage(anu.id, { image: { url: ppuser }, contextInfo: { mentionedJid: [num] }, caption: teksbye, footer: `Leave Message By ${global.botname}`, buttons: but })
//Message Saat Ada Yang Naik Jabatan
} else if (anu.action == 'promote') {
var but = [{buttonId: 'menu', buttonText: {displayText: 'Congrats Kak 🎉'}, type: 1},]
tekspromote = `Selamat Yaa @${num.split("@")[0]} Atas Kenaikan Jabatannya Di Grup ${metadata.subject} 🥂\n`
tio.sendMessage(anu.id, { image: { url: ppuser }, contextInfo: { mentionedJid: [num] }, caption: tekspromote, footer: `Promote Message By ${global.botname}`, buttons: but })
//Message Saat Ada Yang Turun Jabatan
} else if (anu.action == 'demote') {
var but = [{buttonId: 'menu', buttonText: {displayText: 'Nice Try Kak 😔'}, type: 1},]
teksdemote = `Yang Sabar Yaa @${num.split("@")[0]} Atas Penurunan Jabatannya Di Grup ${metadata.subject} 😔\n`
tio.sendMessage(anu.id, { image: { url: ppuser }, contextInfo: { mentionedJid: [num] }, caption: teksdemote, footer: `Demote Message By ${global.botname}`, buttons: but })
}
}
} else {
//Nothing Biar Ga Error
}

} catch (err) {
console.log(err)
}
})
    // Setting
    tio.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }
    
    tio.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = tio.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
        }
    })

    tio.getName = (jid, withoutContact  = false) => {
        id = tio.decodeJid(jid)
        withoutContact = tio.withoutContact || withoutContact 
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = tio.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === tio.decodeJid(tio.user.id) ?
            tio.user :
            (store.contacts[id] || {})
            return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
    
    tio.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await tio.getName(i + '@s.whatsapp.net'),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await tio.getName(i + '@s.whatsapp.net')}\nFN:${await tio.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET: tioclkp02@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://instagram.com/prm2.0\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	tio.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
    }
    
    tio.setStatus = (status) => {
        tio.query({
            tag: 'iq',
            attrs: {
                to: '@s.whatsapp.net',
                type: 'set',
                xmlns: 'status',
            },
            content: [{
                tag: 'status',
                attrs: {},
                content: Buffer.from(status, 'utf-8')
            }]
        })
        return status
    }
	
    tio.public = true

    tio.serializeM = (m) => smsg(tio, m, store)

    tio.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update
try {
if (connection === 'close') {
	let reason = new Boom(lastDisconnect?.error)?.output.statusCode
	if (reason === DisconnectReason.badSession) {
	console.log(`Bad Session File, Please Delete Session and Scan Again`);
	startTio()
	} else if (reason === DisconnectReason.connectionClosed) {
	console.log("Connection closed, reconnecting....");
	startTio();
	} else if (reason === DisconnectReason.connectionLost) {
	console.log("Connection Lost from Server, reconnecting...");
	startTio();
	} else if (reason === DisconnectReason.connectionReplaced) {
	console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First");
	startTio()
    } else if (reason === DisconnectReason.loggedOut) {
	console.log(`Device Logged Out, Please Scan Again And Run.`);
	startTio();
	} else if (reason === DisconnectReason.restartRequired) {
	console.log("Restart Required, Restarting...");
	startTio();
	} else if (reason === DisconnectReason.timedOut) {
	console.log("Waktu Koneksi Habis, Menyambungkan Ulang...");
	startTio();
	} else tio.end(`Unknown DisconnectReason: ${reason}|${connection}`)
}
if (update.connection == "connecting" || update.receivedPendingNotifications == "false") {
lolcatjs.fromString(`Connecting...`)
}
if (update.connection == "open" || update.receivedPendingNotifications == "true") {
	lolcatjs.fromString(`Mengkoneksikan Ke => WhatsApp Web`)
	lolcatjs.fromString(`Berhasil Tersambung Ke ` + JSON.stringify(tio.user, null, 2))
	global.creator = ['628569200600000']
	let imgown = await getBuffer('https://telegra.ph/file/4ea5b7309bb948e62bc3a.jpg')
	let imgcrea = await getBuffer('https://telegra.ph/file/b8aa5d61ad7bc8eb90e43.jpg')
	let butcrea = [{ buttonId: `owner`, buttonText: { displayText: 'Owner' }, type: 1 }, { buttonId: `ping`, buttonText: { displayText: 'Status Bot' }, type: 1 }]
        let butown = [{ buttonId: `owner`, buttonText: { displayText: 'Owner' }, type: 1 }, { buttonId: `ping`, buttonText: { displayText: 'Status Bot' }, type: 1 }]
	let txtown = `Halo Owner, Bot Telah Berhasil Tersambung Pada Nomer Ini \n\nJika Menemukan Eror, Bug, Atau Ingin Request Fitur Silahkan Hubungi Nomer Tersebut!`
	let txtcrea = `Script ini telah dipakai oleh\nID: ${global.owner}@s.whatsapp.net`
	lolcatjs.fromString('Sukses Mengirim Pesan Ke Owner Dan Creator ☑️')
	tio.sendMessage(global.owner+'@s.whatsapp.net', { image: imgown, caption: txtown, buttons: butcrea, footer: global.botname })
        tio.sendMessage(global.creator+'@s.whatsapp.net', { image: imgcrea, caption: txtcrea, buttons: butown, footer: global.botname })
        tio.sendContact(global.owner+'@s.whatsapp.net', global.creator)
	}
} catch (err) {
console.log('error di connection.update'+err)
startTio();
}
})

    tio.ev.on('creds.update', saveState)
      tio.reSize = async (image, width, height) => {
       let jimp = require('jimp')
       var oyy = await jimp.read(image);
       var kiyomasa = await oyy.resize(width, height).getBufferAsync(jimp.MIME_JPEG)
       return kiyomasa
      }
      
     tio.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
      let mime = '';
      let res = await axios.head(url)
      mime = res.headers['content-type']
      if (mime.split("/")[1] === "gif") {
     return tio.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options}, { quoted: quoted, ...options})
      }
      let type = mime.split("/")[0]+"Message"
      if(mime === "application/pdf"){
     return tio.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "image"){
     return tio.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options}, { quoted: quoted, ...options})
      }
      if(mime.split("/")[0] === "video"){
     return tio.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "audio"){
     return tio.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options}, { quoted: quoted, ...options })
      }
      }
        tio.sendListMsg = (jid, text = '', footer = '', title = '' , butText = '', sects = [], quoted) => {
        let sections = sects
        var listMes = {
        text: text,
        footer: footer,
        title: title,
        buttonText: butText,
        sections
        }
        tio.sendMessage(jid, listMes, { quoted: quoted })
        }
       
      tio.send5ButLoc = async (jid , text = '' , footer = '', lok, but = [], options = {}) =>{
      let bb = await tio.reSize(lok, 300, 300)
      tio.sendMessage(jid, { location: { jpegThumbnail: bb }, caption: text, footer: footer, templateButtons: but, ...options })
      }

        tio.send5ButMsg = (jid, text = '' , footer = '', but = []) =>{
        let templateButtons = but
        var templateMessage = {
        text: text,
        footer: footer,
        templateButtons: templateButtons
        }
        tio.sendMessage(jid, templateMessage)
        }

    tio.send5ButImg = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ image: img }, { upload: tio.waUploadToServer })
        var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        imageMessage: message.imageMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            tio.relayMessage(jid, template.message, { messageId: template.key.id })
    }

    tio.send5ButVid = async (jid , text = '' , footer = '', vid, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ video: vid }, { upload: tio.waUploadToServer })
        var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        videoMessage: message.videoMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            tio.relayMessage(jid, template.message, { messageId: template.key.id })
    }
    tio.send5ButGif = async (jid , text = '' , footer = '', gif, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ video: gif, gifPlayback: true }, { upload: tio.waUploadToServer })
        var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        videoMessage: message.videoMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            tio.relayMessage(jid, template.message, { messageId: template.key.id })
    }

    tio.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
        let buttonMessage = {
            text,
            footer,
            buttons,
            headerType: 2,
            ...options
        }
        tio.sendMessage(jid, buttonMessage, { quoted, ...options })
    }
    
    tio.sendText = (jid, text, quoted = '', options) => tio.sendMessage(jid, { text: text, ...options }, { quoted })

 
    tio.sendImage = async (jid, path, caption = '', quoted = '', options) => {
	let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await tio.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
    }


    tio.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await tio.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
    }

    tio.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await tio.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
    }

    tio.sendTextWithMentions = async (jid, text, quoted, options = {}) => tio.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

 
    tio.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await tio.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }

  
    tio.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await tio.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
	
 
    tio.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
	let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }

    tio.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
	}
        
	return buffer
     } 
    
  
    tio.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
        let types = await tio.getFile(path, true)
           let { mime, ext, res, data, filename } = types
           if (res && res.status !== 200 || file.length <= 65536) {
               try { throw { json: JSON.parse(file.toString()) } }
               catch (e) { if (e.json) throw e.json }
           }
       let type = '', mimetype = mime, pathFile = filename
       if (options.asDocument) type = 'document'
       if (options.asSticker || /webp/.test(mime)) {
        let { writeExif } = require('./lib/exif')
        let media = { mimetype: mime, data }
        pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
        await fs.promises.unlink(filename)
        type = 'sticker'
        mimetype = 'image/webp'
        }
       else if (/image/.test(mime)) type = 'image'
       else if (/video/.test(mime)) type = 'video'
       else if (/audio/.test(mime)) type = 'audio'
       else type = 'document'
       await tio.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
       return fs.promises.unlink(pathFile)
       }

  
    tio.copyNForward = async (jid, message, forceForward = false, options = {}) => {
        let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessage.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessage.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessage.message
			}
		}

        let mtype = Object.keys(message.message)[0]
        let content = await generateForwardMessageContent(message, forceForward)
        let ctype = Object.keys(content)[0]
		let context = {}
        if (mtype != "conversation") context = message.message[mtype].contextInfo
        content[ctype].contextInfo = {
            ...context,
            ...content[ctype].contextInfo
        }
        const waMessage = await generateWAMessageFromContent(jid, content, options ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo ? {
                contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo
                }
            } : {})
        } : {})
        await tio.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
        return waMessage
    }

    tio.cMod = (jid, copy, text = '', sender = tio.user.id, options = {}) => {
        //let copy = message.toJSON()
		let mtype = Object.keys(copy.message)[0]
		let isEphemeral = mtype === 'ephemeralMessage'
        if (isEphemeral) {
            mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
        }
        let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
		let content = msg[mtype]
        if (typeof content === 'string') msg[mtype] = text || content
		else if (content.caption) content.caption = text || content.caption
		else if (content.text) content.text = text || content.text
		if (typeof content !== 'string') msg[mtype] = {
			...content,
			...options
        }
        if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
		else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
		copy.key.remoteJid = jid
		copy.key.fromMe = sender === tio.user.id

        return proto.WebMessageInfo.fromObject(copy)
    }


  
    tio.getFile = async (PATH, save) => {
        let res
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
        if (data && save) fs.promises.writeFile(filename, data)
        return {
            res,
            filename,
	    size: await getSizeMedia(data),
            ...type,
            data
        }

    }

    return tio
}

startTio()


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
