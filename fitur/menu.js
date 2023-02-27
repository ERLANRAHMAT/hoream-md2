const chalk = require('chalk')
const fs = require('fs')

//Exports Menu
exports.mgroup = (prefix) => {
  return`
╭──❍「 *Group Menu* 」
│ *»* ${prefix}linkgroup
│ *»* ${prefix}ephemeral [option]
│ *»* ${prefix}setppgc [image]
│ *»* ${prefix}setname [text]
│ *»* ${prefix}setdesc [text]
│ *»* ${prefix}group [option]
│ *»* ${prefix}editinfo [option]
│ *»* ${prefix}add @user
│ *»* ${prefix}kick @user
│ *»* ${prefix}hidetag [text]
│ *»* ${prefix}tagall [text]
│ *»* ${prefix}antilink [on/off]
│ *»* ${prefix}mute [on/off]
│ *»* ${prefix}promote @user
│ *»* ${prefix}demote @user
│ *»* ${prefix}vote [text]
│ *»* ${prefix}devote
│ *»* ${prefix}upvote
│ *»* ${prefix}cekvote
│ *»* ${prefix}hapusvote
│ *»* ${prefix}tagme
│ *»* ${prefix}totag
│ *»* ${prefix}quoted
│ *»* ${prefix}wm
│ *»* ${prefix}emoji
│ *»* ${prefix}toqr
│ *»* ${prefix}gcsearch 
╰─────❍`
}

exports.mwebzone = (prefix) => {
  return`
╭──❍「 *Web Zone Menu* 」
│ *»* ${prefix}playstore
│ *»* ${prefix}webtoon
│ *»* ${prefix}dogesticker
│ *»* ${prefix}patricksticker
│ *»* ${prefix}lovesticker
│ *»* ${prefix}gura
│ *»* ${prefix}paimon
│ *»* ${prefix}mukelu
│ *»* ${prefix}sanime
│ *»* ${prefix}myip
│
╰────❍`
}

exports.mdownloader = (prefix) => {
  return`
╭──❍「 *Download Menu* 」
│ *»* ${prefix}tiktok [url]
│ *»* ${prefix}instagram [url]
│ *»* ${prefix}instagramreel [url]
│ *»* ${prefix}instagramstory [url]
│ *»* ${prefix}twitter [url]
│ *»* ${prefix}facebook [url]
│ *»* ${prefix}pinterest [url]
│ *»* ${prefix}ytmp3 [url]
│ *»* ${prefix}ytmp4 [url]
│ *»* ${prefix}getmusic [query]
│ *»* ${prefix}getvideo [query]
│ *»* ${prefix}umma [url]
│ *»* ${prefix}ssweb [url]
│ *»* ${prefix}sshp [url]
│ *»* ${prefix}ss [url]
│ *»* ${prefix}ai
│ *»* ${prefix}aigambar
│ *»* ${prefix}tts
│ *»* ${prefix}githubstalk [url]
│ *»* ${prefix}stalknpm [url]
│ *»* ${prefix}infogempa
│ *»* ${prefix}cuaca
╰────❍`
}

exports.msearch = (prefix) => {
  return`
╭──❍「 *Search Menu* 」
│ *»* ${prefix}play [query]
│ *»* ${prefix}yts [query]
│ *»* ${prefix}google [query]
│ *»* ${prefix}gimage [query]
│ *»* ${prefix}pinterest [query]
│ *»* ${prefix}wallpaper [query]
│ *»* ${prefix}wikimedia [query]
│ *»* ${prefix}ytsearch [query]
│ *»* ${prefix}ringtone [query]
│ *»* ${prefix}totalhit
╰────❍`
}

exports.mrandom = (prefix) => {
  return`
╭──❍「 *Random Menu* 」❍
│ *»* ${prefix}gbtku
│ *»* ${prefix}coffe
│ *»* ${prefix}quotesanime
│ *»* ${prefix}dilanquote
│ *»* ${prefix}bucinquote
│ *»* ${prefix}katasenja
│ *»* ${prefix}puisi
│ *»* ${prefix}couple
│ *»* ${prefix}anime
│ *»* ${prefix}waifu
│ *»* ${prefix}sound1-161
╰────❍`
}

exports.mtextpro = (prefix) => {
  return`
╭──❍「 *Textpro Menu* 」
│ *»* ${prefix}3dchristmas
│ *»* ${prefix}3ddeepsea
│ *»* ${prefix}americanflag
│ *»* ${prefix}3dscifi
│ *»* ${prefix}3drainbow
│ *»* ${prefix}3dwaterpipe
│ *»* ${prefix}halloweenskeleton
│ *»* ${prefix}sketch
│ *»* ${prefix}bluecircuit
│ *»* ${prefix}space
│ *»* ${prefix}metallic
│ *»* ${prefix}fiction
│ *»* ${prefix}greenhorror
│ *»* ${prefix}transformer
│ *»* ${prefix}berry
│ *»* ${prefix}thunder
│ *»* ${prefix}magma
│ *»* ${prefix}3dcrackedstone
│ *»* ${prefix}3dneonlight
│ *»* ${prefix}impressiveglitch
│ *»* ${prefix}naturalleaves
│ *»* ${prefix}fireworksparkle
│ *»* ${prefix}matrix
│ *»* ${prefix}dropwater
│ *»* ${prefix}harrypotter
│ *»* ${prefix}foggywindow
│ *»* ${prefix}neondevils
│ *»* ${prefix}christmasholiday
│ *»* ${prefix}3dgradient
│ *»* ${prefix}blackpink
│ *»* ${prefix}gluetext
╰────❍`
  }
  exports.mphotooxy = (prefix) => {
  return`
╭──❍「 *Photo Oxy Menu* 」
│ *»* ${prefix}harrypotter
╰────❍`
}

exports.mephoto = (prefix) => {
  return`
╭──❍「 *Ephoto Menu* 」
│ *»* ${prefix}galaxy
│ *»* ${prefix}glass
│ *»* ${prefix}neon
│ *»* ${prefix}beach
│ *»* ${prefix}blackpink
╰────❍`
}

exports.mfun = (prefix) => {
  return`
╭──❍「 *Fun Menu* 」
│ *»* ${prefix}halah
│ *»* ${prefix}hilih
│ *»* ${prefix}huluh
│ *»* ${prefix}heleh
│ *»* ${prefix}holoh
│ *»* ${prefix}jadian
│ *»* ${prefix}jodohku
│ *»* ${prefix}apakah
│ *»* ${prefix}bisakah
│ *»* ${prefix}kapan
│ *»* ${prefix}slot
│ *»* ${prefix}delttt
│ *»* ${prefix}tictactoe
│ *»* ${prefix}family100
│ *»* ${prefix}tebak [option]
│ *»* ${prefix}math [mode]
│ *»* ${prefix}suitpvp [@tag]
╰────❍`
}

exports.mprimbon = (prefix) => {
  return`
╭──❍「 *Primbon Menu* 」
│ *»* ${prefix}nomorhoki
│ *»* ${prefix}artimimpi
│ *»* ${prefix}artinama
│ *»* ${prefix}ramaljodoh
│ *»* ${prefix}ramaljodohbali
│ *»* ${prefix}suamiistri
│ *»* ${prefix}ramalcinta
│ *»* ${prefix}cocoknama
│ *»* ${prefix}pasangan
│ *»* ${prefix}jadiannikah
│ *»* ${prefix}sifatusaha
│ *»* ${prefix}rezeki
│ *»* ${prefix}pekerjaan
│ *»* ${prefix}nasib
│ *»* ${prefix}penyakit
│ *»* ${prefix}tarot
│ *»* ${prefix}fengshui
│ *»* ${prefix}haribaik
│ *»* ${prefix}harisangar
│ *»* ${prefix}harisial
│ *»* ${prefix}nagahari
│ *»* ${prefix}arahrezeki
│ *»* ${prefix}peruntungan
│ *»* ${prefix}weton
│ *»* ${prefix}karakter
│ *»* ${prefix}keberuntungan
│ *»* ${prefix}memancing
│ *»* ${prefix}masasubur
│ *»* ${prefix}zodiak
╰────❍`  
}

exports.mconvert = (prefix) => {
  return`
╭──❍「 *Convert Menu* 」
│ *»* ${prefix}attp
│ *»* ${prefix}ttp
│ *»* ${prefix}toimage
│ *»* ${prefix}removebg
│ *»* ${prefix}sticker
│ *»* ${prefix}emojimix
│ *»* ${prefix}emojimix2
│ *»* ${prefix}tovideo
│ *»* ${prefix}togif
│ *»* ${prefix}tourl
│ *»* ${prefix}tovn
│ *»* ${prefix}tomp3
│ *»* ${prefix}toaudio
│ *»* ${prefix}ebinary
│ *»* ${prefix}dbinary
│ *»* ${prefix}styletext
│ *»* ${prefix}smeme
╰────❍` 
}

exports.mmain = (prefix) => {
  return`
╭──❍「 *Main Menu* 」
│ *»* ${prefix}ping
│ *»* ${prefix}owner
│ *»* ${prefix}report
│ *»* ${prefix}menu / ${prefix}help / ${prefix}?
│ *»* ${prefix}delete
│ *»* ${prefix}infochat
│ *»* ${prefix}quoted
│ *»* ${prefix}listpc
│ *»* ${prefix}listgc
│ *»* ${prefix}listonline
│ *»* ${prefix}speedtest
│ *»* ${prefix}menfes
│ *»* ${prefix}tinyurl [link]
│ *»* ${prefix}shrturl [link]
│ *»* ${prefix}linkpoi
│ *»* ${prefix}bitly
│ *»* ${prefix}cuttly
│ *»* ${prefix}runtime
│ *»* ${prefix}request
│ *»* ${prefix}ceklimit
│ *»* ${prefix}$
│ *»* ${prefix}~>
│ *»* ${prefix}.>
╰────❍`
}

exports.mdatabase = (prefix) => {
  return`
╭──❍「 *Database Menu* 」
│ *»* ${prefix}setcmd
│ *»* ${prefix}listcmd
│ *»* ${prefix}delcmd
│ *»* ${prefix}lockcmd
│ *»* ${prefix}addmsg
│ *»* ${prefix}listmsg
│ *»* ${prefix}getmsg
│ *»* ${prefix}delmsg
╰────❍`
}

exports.manonymous = (prefix) => {
  return`
╭──❍「*Anonymous Menu*」
│ *»* ${prefix}anonymous
│ *»* ${prefix}start
│ *»* ${prefix}next
│ *»* ${prefix}keluar
╰────❍`  
}

exports.mvoice = (prefix) => {
  return`
╭──❍「*Voice Change Menu*」
│ *»* ${prefix}bass
│ *»* ${prefix}blown
│ *»* ${prefix}deep
│ *»* ${prefix}earrape
│ *»* ${prefix}fast
│ *»* ${prefix}fat
│ *»* ${prefix}nightcore
│ *»* ${prefix}reverse
│ *»* ${prefix}robot
│ *»* ${prefix}slow
│ *»* ${prefix}tupai
╰────❍`  
}

exports.mowner = (prefix) => {
  return`
╭──❍「 *Owner Menu* 」
│ *»* ${prefix}react [emoji]
│ *»* ${prefix}chat [option]
│ *»* ${prefix}join [link]
│ *»* ${prefix}leave
│ *»* ${prefix}block @user
│ *»* ${prefix}unblock @user
│ *»* ${prefix}bcgroup [text]
│ *»* ${prefix}bcall [text]
│ *»* ${prefix}setppbot [image]
│ *»* ${prefix}setexif
│ *»* ${prefix}setmenu [option]
│ *»* ${prefix}setowner
│ *»* ${prefix}getcase
│ *»* ${prefix}public
│ *»* ${prefix}addprem/delprem
╰────❍`  
}




let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})