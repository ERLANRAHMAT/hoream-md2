const chalk = require('chalk')
const fs = require('fs')

//Exports Menu

//Rules
exports.mrules = () => {
	return`*R U L E S ๐*
	
1. Jangan Pernah Spam Bot โ
2. Jangan Call Nomer Bot โ
3. Jangan Mengeksploitasi Bot โ

Sanksi : *Warn/Soft Block ๐ง*

*About Questions โ๏ธ*

๐ฆ : Bot nya Slow Respon ๐
๐ค : Mohon Bersabar, Mungkin Kendala Dari Jaringan, Signal, Atau Bahkan Terbanned Dari Pihak WhatsApp

๐ฆ : Scriptnya Beli Dimana? ๐
๐ค : Script Ini Tidak Di Perjualbelikan Karena Script Ini Dibagikan Secara Free. Kalian Bisa Mendapatkannya Di Github Botcahx/Erlanrahmat

๐ฆ : Min Ko Pas Saya Telfon Langsung Di Block?๐ค
๐ค : Untuk Masalah Tersebut Jangan Telfon Bot Karena Bot Akan Secara Otomatis Memblokir Nomor Anda

๐ฆ : Apakah Bot Ini Masih Menyimpan File Yang Saya Kirim?
๐ค : Data WhatsApp Anda Hanya Tersimpan Saat Bot Aktif, Dan Bot Tidak Pernah Menyimpan File-file Yang Anda Kirim

๐ฆ : Min, Ada Fitur Yang Error ๐
๐ค : Jika Menemukan Bug/Error Silahkan Langsung Hubungi Owner/Creator Agar Segera Di Fix 


Tetap Patuhi Rules Agar Tetap Bisa Menikmati Bot ๐

*โ ๏ธ Note :* Segala Ketentuan Dan Kebijakan Yang Berlaku Di Pegang Oleh Owner Bot, Sewaktu-Waktu Owner Berhak Memakai Ataupun Mengubah Kebijakan Dan Ketentuan Yang Berlaku

*Thanks To ๐* Buat Kalian User-User Yang Sudah Memakai Script Ini Dan Pengguna Bot Yang Sudah Mau Mematuhi Rules, Serta Para Constributor Yang Sudah Membantu Dalam Pembuatan Bot Ini ๐๐
`
}
//List

exports.mlist = (pushname, ucapanWaktu, botname) => {
	return`*Halo Kak ${pushname} ๐*
*${ucapanWaktu}*

*Berikut List Menu Yang Tersedia Di ${global.botname}*

*Jika Menemukan Bug Harap Dimaklumi Dan Laporkan Kepada*
*Owner Atau Creator Agar Segera Di Fix ๐*

*Terima Kasih ๐*
`
}

exports.mgroup = (prefix) => {
  return`
โญโโโใ *Group Menu* ใ
โ *ยป* ${prefix}linkgroup
โ *ยป* ${prefix}ephemeral [option]
โ *ยป* ${prefix}setppgc [image]
โ *ยป* ${prefix}setname [text]
โ *ยป* ${prefix}setdesc [text]
โ *ยป* ${prefix}group [option]
โ *ยป* ${prefix}editinfo [option]
โ *ยป* ${prefix}add @user
โ *ยป* ${prefix}kick @user
โ *ยป* ${prefix}hidetag [text]
โ *ยป* ${prefix}tagall [text]
โ *ยป* ${prefix}antilink [on/off]
โ *ยป* ${prefix}antinsfw [on/off]
โ *ยป* ${prefix}mute [on/off]
โ *ยป* ${prefix}promote @user
โ *ยป* ${prefix}demote @user
โ *ยป* ${prefix}vote [text]
โ *ยป* ${prefix}devote
โ *ยป* ${prefix}upvote
โ *ยป* ${prefix}cekvote
โ *ยป* ${prefix}hapusvote
โ *ยป* ${prefix}tagme
โ *ยป* ${prefix}totag
โ *ยป* ${prefix}quoted
โ *ยป* ${prefix}wm
โ *ยป* ${prefix}emoji
โ *ยป* ${prefix}toqr
โ *ยป* ${prefix}gcsearch 
โฐโโโโโโ`
}

exports.mwebzone = (prefix) => {
  return`
โญโโโใ *Web Zone Menu* ใ
โ *ยป* ${prefix}playstore
โ *ยป* ${prefix}webtoon
โ *ยป* ${prefix}dogesticker
โ *ยป* ${prefix}patricksticker
โ *ยป* ${prefix}lovesticker
โ *ยป* ${prefix}gura
โ *ยป* ${prefix}paimon
โ *ยป* ${prefix}mukelu
โ *ยป* ${prefix}sanime
โ *ยป* ${prefix}myip
โ *ยป* ${prefix}cersex
โ
โฐโโโโโ`
}

exports.mdownloader = (prefix) => {
  return`
โญโโโใ *Download Menu* ใ
โ *ยป* ${prefix}tiktok [url]
โ *ยป* ${prefix}instagram [url]
โ *ยป* ${prefix}instagramreel [url]
โ *ยป* ${prefix}instagramstory [url]
โ *ยป* ${prefix}twitter [url]
โ *ยป* ${prefix}facebook [url]
โ *ยป* ${prefix}pinterest [url]
โ *ยป* ${prefix}ytmp3 [url]
โ *ยป* ${prefix}ytmp4 [url]
โ *ยป* ${prefix}getmusic [query]
โ *ยป* ${prefix}getvideo [query]
โ *ยป* ${prefix}umma [url]
โ *ยป* ${prefix}ssweb [url]
โ *ยป* ${prefix}sshp [url]
โ *ยป* ${prefix}ss [url]
โ *ยป* ${prefix}ai
โ *ยป* ${prefix}aigambar
โ *ยป* ${prefix}tts
โ *ยป* ${prefix}githubstalk [url]
โ *ยป* ${prefix}stalknpm [url]
โ *ยป* ${prefix}infogempa
โ *ยป* ${prefix}cuaca
โฐโโโโโ`
}

exports.msearch = (prefix) => {
  return`
โญโโโใ *Search Menu* ใ
โ *ยป* ${prefix}play [query]
โ *ยป* ${prefix}yts [query]
โ *ยป* ${prefix}google [query]
โ *ยป* ${prefix}gimage [query]
โ *ยป* ${prefix}pinterest [query]
โ *ยป* ${prefix}wallpaper [query]
โ *ยป* ${prefix}wikimedia [query]
โ *ยป* ${prefix}ytsearch [query]
โ *ยป* ${prefix}ringtone [query]
โ *ยป* ${prefix}totalhit
โฐโโโโโ`
}

exports.mrandom = (prefix) => {
  return`
โญโโโใ *Random Menu* ใโ
โ *ยป* ${prefix}gbtku
โ *ยป* ${prefix}coffe
โ *ยป* ${prefix}quotesanime
โ *ยป* ${prefix}dilanquote
โ *ยป* ${prefix}bucinquote
โ *ยป* ${prefix}katasenja
โ *ยป* ${prefix}puisi
โ *ยป* ${prefix}couple
โ *ยป* ${prefix}anime
โ *ยป* ${prefix}waifu
โ *ยป* ${prefix}sound1-161
โฐโโโโโ`
}

exports.mtextpro = (prefix) => {
  return`
โญโโโใ *Textpro Menu* ใ
โ *ยป* ${prefix}3dchristmas
โ *ยป* ${prefix}3ddeepsea
โ *ยป* ${prefix}americanflag
โ *ยป* ${prefix}3dscifi
โ *ยป* ${prefix}3drainbow
โ *ยป* ${prefix}3dwaterpipe
โ *ยป* ${prefix}halloweenskeleton
โ *ยป* ${prefix}sketch
โ *ยป* ${prefix}bluecircuit
โ *ยป* ${prefix}space
โ *ยป* ${prefix}metallic
โ *ยป* ${prefix}fiction
โ *ยป* ${prefix}greenhorror
โ *ยป* ${prefix}transformer
โ *ยป* ${prefix}berry
โ *ยป* ${prefix}thunder
โ *ยป* ${prefix}magma
โ *ยป* ${prefix}3dcrackedstone
โ *ยป* ${prefix}3dneonlight
โ *ยป* ${prefix}impressiveglitch
โ *ยป* ${prefix}naturalleaves
โ *ยป* ${prefix}fireworksparkle
โ *ยป* ${prefix}matrix
โ *ยป* ${prefix}dropwater
โ *ยป* ${prefix}harrypotter
โ *ยป* ${prefix}foggywindow
โ *ยป* ${prefix}neondevils
โ *ยป* ${prefix}christmasholiday
โ *ยป* ${prefix}3dgradient
โ *ยป* ${prefix}blackpink
โ *ยป* ${prefix}gluetext
โฐโโโโโ`
  }

exports.mphotooxy = (prefix) => {
  return`
โญโโโใ *Photo Oxy Menu* ใ
โ *ยป* ${prefix}bevel-text
โ *ยป* ${prefix}luxury
โ *ยป* ${prefix}flaming
โ *ยป* ${prefix}underwater
โ *ยป* ${prefix}shadow-sky
โ *ยป* ${prefix}wolf-metal
โ *ยป* ${prefix}metallic
โ *ยป* ${prefix}metallic2
โ *ยป* ${prefix}burn-paper
โ *ยป* ${prefix}naruto
โ *ยป* ${prefix}3d-summer
โ *ยป* ${prefix}under-grass
โ *ยป* ${prefix}smoke
โ *ยป* ${prefix}flower-typography
โ *ยป* ${prefix}picture-of-love
โ *ยป* ${prefix}hello-kitty
โ *ยป* ${prefix}coffe-cup
โ *ยป* ${prefix}butterfly
โ *ยป* ${prefix}night-sky
โ *ยป* ${prefix}carved-wood
โ *ยป* ${prefix}sweet-candy
โฐโโโโโ`
}

exports.mephoto = (prefix) => {
  return`
โญโโโใ *Ephoto Menu* ใ
โ *ยป* ${prefix}ytsilver
โ *ยป* ${prefix}igsilver
โ *ยป* ${prefix}fbsilver
โ *ยป* ${prefix}twtsilver
โ *ยป* ${prefix}ytgold
โ *ยป* ${prefix}iggold
โ *ยป* ${prefix}fbgold
โ *ยป* ${prefix}twtgold
โ *ยป* ${prefix}televisi
โ *ยป* ${prefix}glasses
โ *ยป* ${prefix}blackpink
โ *ยป* ${prefix}blackpink2
โ *ยป* ${prefix}coverpubg
โ *ยป* ${prefix}greenbrush
โ *ยป* ${prefix}eraser
โ *ยป* ${prefix}dragonfire
โ *ยป* ${prefix}incandescent 
โ *ยป* ${prefix}typography
โ *ยป* ${prefix}typography2
โ *ยป* ${prefix}cloth
โ *ยป* ${prefix}grafitti
โ *ยป* ${prefix}galaxy
โ *ยป* ${prefix}blueneon
โ *ยป* ${prefix}nightstars
โ *ยป* ${prefix}cloud
โ *ยป* ${prefix}papercut
โ *ยป* ${prefix}horor
โ *ยป* ${prefix}sunlight
โ *ยป* ${prefix}pig 
โฐโโโโโ`  
}

exports.mfun = (prefix) => {
  return`
โญโโโใ *Fun Menu* ใ
โ *ยป* ${prefix}halah
โ *ยป* ${prefix}hilih
โ *ยป* ${prefix}huluh
โ *ยป* ${prefix}heleh
โ *ยป* ${prefix}holoh
โ *ยป* ${prefix}jadian
โ *ยป* ${prefix}jodohku
โ *ยป* ${prefix}apakah
โ *ยป* ${prefix}bisakah
โ *ยป* ${prefix}kapan
โ *ยป* ${prefix}slot
โ *ยป* ${prefix}delttt
โ *ยป* ${prefix}tictactoe
โ *ยป* ${prefix}family100
โ *ยป* ${prefix}tebak [option]
โ *ยป* ${prefix}math [mode]
โ *ยป* ${prefix}suitpvp [@tag]
โฐโโโโโ`
}

exports.mprimbon = (prefix) => {
  return`
โญโโโใ *Primbon Menu* ใ
โ *ยป* ${prefix}nomorhoki
โ *ยป* ${prefix}artimimpi
โ *ยป* ${prefix}artinama
โ *ยป* ${prefix}ramaljodoh
โ *ยป* ${prefix}ramaljodohbali
โ *ยป* ${prefix}suamiistri
โ *ยป* ${prefix}ramalcinta
โ *ยป* ${prefix}cocoknama
โ *ยป* ${prefix}pasangan
โ *ยป* ${prefix}jadiannikah
โ *ยป* ${prefix}sifatusaha
โ *ยป* ${prefix}rezeki
โ *ยป* ${prefix}pekerjaan
โ *ยป* ${prefix}nasib
โ *ยป* ${prefix}penyakit
โ *ยป* ${prefix}tarot
โ *ยป* ${prefix}fengshui
โ *ยป* ${prefix}haribaik
โ *ยป* ${prefix}harisangar
โ *ยป* ${prefix}harisial
โ *ยป* ${prefix}nagahari
โ *ยป* ${prefix}arahrezeki
โ *ยป* ${prefix}peruntungan
โ *ยป* ${prefix}weton
โ *ยป* ${prefix}karakter
โ *ยป* ${prefix}keberuntungan
โ *ยป* ${prefix}memancing
โ *ยป* ${prefix}masasubur
โ *ยป* ${prefix}zodiak
โฐโโโโโ`  
}

exports.mconvert = (prefix) => {
  return`
โญโโโใ *Convert Menu* ใ
โ *ยป* ${prefix}attp
โ *ยป* ${prefix}ttp
โ *ยป* ${prefix}toimage
โ *ยป* ${prefix}removebg
โ *ยป* ${prefix}sticker
โ *ยป* ${prefix}emojimix
โ *ยป* ${prefix}emojimix2
โ *ยป* ${prefix}tovideo
โ *ยป* ${prefix}togif
โ *ยป* ${prefix}tourl
โ *ยป* ${prefix}tovn
โ *ยป* ${prefix}tomp3
โ *ยป* ${prefix}toaudio
โ *ยป* ${prefix}ebinary
โ *ยป* ${prefix}dbinary
โ *ยป* ${prefix}styletext
โ *ยป* ${prefix}smeme
โฐโโโโโ` 
}

exports.mmain = (prefix) => {
  return`
โญโโโใ *Main Menu* ใ
โ *ยป* ${prefix}ping
โ *ยป* ${prefix}owner
โ *ยป* ${prefix}report
โ *ยป* ${prefix}menu / ${prefix}help / ${prefix}?
โ *ยป* ${prefix}delete
โ *ยป* ${prefix}infochat
โ *ยป* ${prefix}quoted
โ *ยป* ${prefix}listpc
โ *ยป* ${prefix}listgc
โ *ยป* ${prefix}listonline
โ *ยป* ${prefix}speedtest
โ *ยป* ${prefix}menfes
โ *ยป* ${prefix}tinyurl [link]
โ *ยป* ${prefix}shrturl [link]
โ *ยป* ${prefix}linkpoi
โ *ยป* ${prefix}bitly
โ *ยป* ${prefix}cuttly
โ *ยป* ${prefix}runtime
โ *ยป* ${prefix}request
โ *ยป* ${prefix}ceklimit
โ *ยป* ${prefix}$
โ *ยป* ${prefix}~>
โ *ยป* ${prefix}.>
โฐโโโโโ`
}

exports.mdatabase = (prefix) => {
  return`
โญโโโใ *Database Menu* ใ
โ *ยป* ${prefix}setcmd
โ *ยป* ${prefix}listcmd
โ *ยป* ${prefix}delcmd
โ *ยป* ${prefix}lockcmd
โ *ยป* ${prefix}addmsg
โ *ยป* ${prefix}listmsg
โ *ยป* ${prefix}getmsg
โ *ยป* ${prefix}delmsg
โฐโโโโโ`
}

exports.mcecan = (prefix) => {
  return`
โญโโโใ *Cecan Menu* ใ
โ *ยป* ${prefix}china
โ *ยป* ${prefix}indonesia
โ *ยป* ${prefix}vietnam
โ *ยป* ${prefix}thailand
โ *ยป* ${prefix}jepang
โ *ยป* ${prefix}malaysia
โ *ยป* ${prefix}korea
โ *ยป* ${prefix}justinaxie
โ *ยป* ${prefix}jiso
โ *ยป* ${prefix}jeni
โ *ยป* ${prefix}rose
โ *ยป* ${prefix}hijaber
โ *ยป* ${prefix}justinaxie
โฐโโโโโ`
}

exports.mnsfw = (prefix) => {
  return`  
โญโโโใ *Nsfw Menu* ใ
โ *ยป* ${prefix}gay
โ *ยป* ${prefix}ahegaoo
โ *ยป* ${prefix}ass
โ *ยป* ${prefix}bdsm
โ *ยป* ${prefix}blowjob
โ *ยป* ${prefix}cuckold
โ *ยป* ${prefix}cum
โ *ยป* ${prefix}ero
โ *ยป* ${prefix}femdom
โ *ยป* ${prefix}foot
โ *ยป* ${prefix}gangbang
โ *ยป* ${prefix}hentai
โ *ยป* ${prefix}gifs
โ *ยป* ${prefix}jahy
โ *ยป* ${prefix}manga
โ *ยป* ${prefix}masturbation
โ *ยป* ${prefix}neko
โ *ยป* ${prefix}neko2
โ *ยป* ${prefix}orgy
โ *ยป* ${prefix}panties
โ *ยป* ${prefix}pussy
โ *ยป* ${prefix}tentacles
โ *ยป* ${prefix}yuri
โ *ยป* ${prefix}thighs
โ *ยป* ${prefix}zettai
โฐโโโโโ`
}

exports.manonymous = (prefix) => {
  return`
โญโโโใ*Anonymous Menu*ใ
โ *ยป* ${prefix}anonymous
โ *ยป* ${prefix}start
โ *ยป* ${prefix}next
โ *ยป* ${prefix}keluar
โฐโโโโโ`  
}

exports.mvoice = (prefix) => {
  return`
โญโโโใ*Voice Change Menu*ใ
โ *ยป* ${prefix}bass
โ *ยป* ${prefix}blown
โ *ยป* ${prefix}deep
โ *ยป* ${prefix}earrape
โ *ยป* ${prefix}fast
โ *ยป* ${prefix}fat
โ *ยป* ${prefix}nightcore
โ *ยป* ${prefix}reverse
โ *ยป* ${prefix}robot
โ *ยป* ${prefix}slow
โ *ยป* ${prefix}tupai
โฐโโโโโ`  
}

exports.mowner = (prefix) => {
  return`
โญโโโใ *Owner Menu* ใ
โ *ยป* ${prefix}react [emoji]
โ *ยป* ${prefix}chat [option]
โ *ยป* ${prefix}join [link]
โ *ยป* ${prefix}leave
โ *ยป* ${prefix}block @user
โ *ยป* ${prefix}unblock @user
โ *ยป* ${prefix}bcgroup [text]
โ *ยป* ${prefix}bcall [text]
โ *ยป* ${prefix}setppbot [image]
โ *ยป* ${prefix}setexif
โ *ยป* ${prefix}setmenu [option]
โ *ยป* ${prefix}setowner
โ *ยป* ${prefix}getcase
โ *ยป* ${prefix}public
โ *ยป* ${prefix}addprem/delprem
โฐโโโโโ`  
}




let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})