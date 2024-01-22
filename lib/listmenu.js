const chalk = require('chalk')
const fs = require('fs')
let mono = '```'

global.allmenu = (prefix, hituet) => {
return`
---🤖 *ʙᴏᴛ ᴍᴇɴᴜ* 🤖---

 •  ${mono}ping${mono}
 •  ${mono}mylocation${mono}
 •  ${mono}reportbug${mono}
 •  ${mono}listprem${mono}
 •  ${mono}liststicker${mono}
 •  ${mono}listimage${mono}
 •  ${mono}listapk${mono}
 •  ${mono}listpc${mono}
 •  ${mono}listgc${mono}
 •  ${mono}isgroup${mono}
 •  ${mono}owner${mono}
 •  ${mono}rentbot${mono}
 •  ${mono}listrentbot${mono}
 •  ${mono}repo${mono}
 •  ${mono}setcmd${mono}
 •  ${mono}delcmd${mono}
 
  
---🔮 *ᴏᴡɴᴇʀ ᴍᴇɴᴜ* 🔮---

 •  ${mono}setbotname${mono}
 •  ${mono}setbotbio${mono}
 •  ${mono}delppbot${mono}
 •  ${mono}setppbot${mono}
 •  ${mono}addprem${mono}
 •  ${mono}delprem${mono}
 •  ${mono}addowner${mono}
 •  ${mono}ban${mono}
 •  ${mono}delowner${mono}
 •  ${mono}addsticker${mono}
 •  ${mono}delsticker${mono}
 •  ${mono}addapk${mono}
 •  ${mono}delapk${mono}
 •  ${mono}addimage${mono}
 •  ${mono}delimage${mono}
 •  ${mono}setpublic${mono}
 •  ${mono}setprivate${mono}
 •  ${mono}join${mono}
 •  ${mono}bctext${mono}
 •  ${mono}poll${mono}
 •  ${mono}bcimage${mono}
 •  ${mono}bcvideo${mono}
 •  ${mono}creategc${mono}
 •  ${mono}setsticker${mono}
 •  ${mono}userjid${mono}
 •  ${mono}block${mono}
 •  ${mono}leavegc${mono}
 •  ${mono}pushcontact${mono}
 •  ${mono}upswtext${mono}
 
 
 ---⛩ *ɢʀᴏᴜᴘ ᴍᴇɴᴜ* ⛩---

 •  ${mono}setppgroup${mono}
 •  ${mono}delppgroup${mono}
 •  ${mono}setname${mono}
 •  ${mono}setdesc${mono}
 •  ${mono}add${mono}
 •  ${mono}kick${mono}
 •  ${mono}antilink${mono}
 •  ${mono}antilinkgc${mono}
 •  ${mono}grouplink${mono}
 •  ${mono}invite${mono}
 •  ${mono}promote${mono}
 •  ${mono}demote${mono}
 •  ${mono}savecontact${mono}
 •  ${mono}hidetag${mono}
 •  ${mono}tag${mono}
 •  ${mono}tagall${mono}
 •  ${mono}editinfo${mono}
 •  ${mono}opentime${mono}
 •  ${mono}closetime${mono}
 •  ${mono}resetlink${mono}
 •  ${mono}vote${mono}
 •  ${mono}upvote${mono}
 •  ${mono}downvote${mono}
 •  ${mono}checkvote${mono}
 •  ${mono}delvote${mono}
 •  ${mono}autostickergc${mono}
 •  ${mono}nsfw${mono}
 
 
  ---🍥 *ᴅʟ ᴍᴇɴᴜ* 🍥---

 •  ${mono}ytsearch${mono}
 •  ${mono}play${mono}
 •  ${mono}ytmp3${mono}
 •  ${mono}ytmp4${mono}
 •  ${mono}tiktokaudio${mono}
 •  ${mono}tiktok${mono}
 •  ${mono}igvideo${mono}
 •  ${mono}igimage${mono}
 •  ${mono}apk${mono}
 •  ${mono}google${mono}
 •  ${mono}imdb${mono}
 •  ${mono}weather${mono}
 •  ${mono}wanumber${mono}
 •  ${mono}spotify${mono}
 •  ${mono}gitclone${mono}
 •  ${mono}happymod${mono}
 •  ${mono}gdrive${mono}
 •  ${mono}pinterest${mono}
 •  ${mono}ringtone${mono}
 •  ${mono}lyrics${mono}
 
 
  ---🎀 *sᴏᴄɪᴀʟ ᴍᴇɴᴜ* 🎀---

 •  ${mono}tiktokgirl${mono}
 •  ${mono}tiktoknukthy${mono}
 •  ${mono}tiktokkayes${mono}
 •  ${mono}tiktokpanrika${mono}
 •  ${mono}tiktoknotnot${mono}
 •  ${mono}tiktokghea${mono}
 •  ${mono}aesthetic${mono}
 •  ${mono}coffee${mono}
 •  ${mono}couplepp${mono}
 •  ${mono}profilepic${mono}
 •  ${mono}japanese${mono}
 •  ${mono}hijab${mono}
 •  ${mono}randomgirl${mono}
 •  ${mono}randomboy${mono}
 •  ${mono}chinese${mono}
 •  ${mono}indo${mono}
 •  ${mono}korean${mono}
 •  ${mono}malai${mono}
 •  ${mono}shadow${mono}
 •  ${mono}write${mono}
 •  ${mono}romantic${mono}
 •  ${mono}burnpaper${mono}
 •  ${mono}smoke${mono}
 •  ${mono}narutobanner${mono}
 •  ${mono}love${mono}
 •  ${mono}naturetypography${mono}
 •  ${mono}glitchtext${mono}
 •  ${mono}styletext${mono}
 •  ${mono}fliptext${mono}
 •  ${mono}writetext${mono}
 •  ${mono}typographytext${mono}
 •  ${mono}advancedglow${mono}
 •  ${mono}logomaker${mono}
 
 
  ---🎮 *ғᴜɴ ᴍᴇɴᴜ* 🎮---

 •  ${mono}define${mono}
 •  ${mono}qc${mono}
 •  ${mono}suit${mono}
 •  ${mono}math${mono}
 •  ${mono}tictactoe${mono}
  •  ${mono}delttt${mono}
 •  ${mono}fact${mono}
 •  ${mono}truth${mono}
 •  ${mono}dare${mono}
 •  ${mono}couple${mono}
 •  ${mono}soulmate${mono}
 •  ${mono}stupidcheck${mono}
 •  ${mono}handsomecheck${mono}
 •  ${mono}uncleancheck${mono}
 •  ${mono}hotcheck${mono}
 •  ${mono}smartcheck${mono}
 •  ${mono}greatcheck${mono}
 •  ${mono}coolcheck${mono}
 •  ${mono}evilcheck${mono}
 •  ${mono}waifucheck${mono}
 •  ${mono}awesomecheck${mono}
 •  ${mono}gaycheck${mono}
 •  ${mono}cutecheck${mono}
 •  ${mono}lesbiancheck${mono}
 •  ${mono}hornycheck${mono}
 •  ${mono}pick${mono}
 •  ${mono}quotes${mono}
 •  ${mono}can${mono}
 •  ${mono}is${mono}
 •  ${mono}when${mono}
 •  ${mono}where${mono}
 •  ${mono}what${mono}
 •  ${mono}how${mono}
 •  ${mono}rate${mono}
 •  ${mono}cry${mono}
 •  ${mono}kill${mono}
 •  ${mono}hug${mono}
 •  ${mono}pat${mono}
 •  ${mono}lick${mono}
 •  ${mono}bite${mono}
 •  ${mono}kiss${mono}
 •  ${mono}poke${mono}
 •  ${mono}nom${mono}
 •  ${mono}foxgirl${mono}
 •  ${mono}checkme${mono}
 •  ${mono}sound1 - sound161${mono}
 
 
  ---💻 *ᴀɪ ᴍᴇɴᴜ* 💻---

 •  ${mono}openai${mono}
 •  ${mono}ai${mono}
 •  ${mono}mathsai${mono}
 •  ${mono}remini${mono}
 •  ${mono}tts${mono}
 •  ${mono}say${mono}
 
 
 
   ---🎗 *sᴛᴀʟᴋᴇʀ ᴍᴇɴᴜ* 🎗---

 •  ${mono}igstalk${mono}
 •  ${mono}ffstalk${mono}
 •  ${mono}mlbbstalk${mono}
 •  ${mono}npmstalk${mono}
 •  ${mono}ghstalk${mono}
 
 
 
   ---🍁 *sᴛɪᴄᴋᴇʀ ᴍᴇɴᴜ* 🍁---

 •  ${mono}goose${mono}
 •  ${mono}woof${mono}
 •  ${mono}8ball${mono}
 •  ${mono}lizard${mono}
 •  ${mono}meow${mono}
 •  ${mono}gura${mono}
 •  ${mono}patrick${mono}
 •  ${mono}doge${mono}
 •  ${mono}lovestick${mono}
 •  ${mono}telestick${mono}
 
 
   ---🐞 *ʙᴜɢs ᴍᴇɴᴜ* 🐞---

 •  ${mono}amountbug${mono}
 •  ${mono}pmbug${mono}
 •  ${mono}delaybug${mono}
 •  ${mono}docubug${mono}
 •  ${mono}trollybug${mono}
 •  ${mono}gcbug${mono}
 •  ${mono}verif${mono}
 •  ${mono}banv1${mono}
 •  ${mono}banv2${mono}
 •  ${mono}unbanv1${mono}
 •  ${mono}unbanv2${mono}
 
 
   ---💙 *ᴡᴇᴇʙ ᴍᴇɴᴜ* 💙---

 •  ${mono}anime${mono}
 •  ${mono}manga${mono}
 •  ${mono}akira${mono}
 •  ${mono}akiyama${mono}
 •  ${mono}ana${mono}
 •  ${mono}boruto${mono}
 •  ${mono}chiho${mono}
 •  ${mono}chitoge${mono}
 •  ${mono}cosplayloli${mono}
 •  ${mono}cosplaysagiri${mono}
 •  ${mono}deidara${mono}
 •  ${mono}elaina${mono}
 •  ${mono}emilia${mono}
 •  ${mono}gremory${mono}
 •  ${mono}hestia${mono}
 •  ${mono}husbu${mono}
 •  ${mono}inori${mono}
 •  ${mono}itachi${mono}
 •  ${mono}kakasih${mono}
 •  ${mono}keneki${mono}
 •  ${mono}kaori${mono}
 •  ${mono}megumin${mono}
 •  ${mono}madara${mono}
 •  ${mono}mikasa${mono}
 •  ${mono}minato${mono}
 •  ${mono}nezuko${mono}
 •  ${mono}naruto${mono}
 •  ${mono}onepiece${mono}
 •  ${mono}randomanime${mono}
 •  ${mono}randomanime2${mono}
 •  ${mono}sasuke${mono}
 •  ${mono}shizuka${mono}
 •  ${mono}shota${mono}
 •  ${mono}waifu${mono}
 •  ${mono}tsunade${mono}
 •  ${mono}toukachan${mono}
 •  ${mono}animewall${mono}
 
 
   ---🏮 *ɴsғᴡ ᴍᴇɴᴜ* 🏮---

 •  ${mono}hentai${mono}
 •  ${mono}gifhentai${mono}
 •  ${mono}gifblowjob${mono}
 •  ${mono}hentaivid${mono}
 •  ${mono}hneko${mono}
 •  ${mono}nwaifu${mono}
 •  ${mono}animespank${mono}
 •  ${mono}trap${mono}
 •  ${mono}gasm${mono}
 •  ${mono}ahegao${mono}
 •  ${mono}ass${mono}
 •  ${mono}bdsm${mono}
 •  ${mono}blowjob${mono}
 •  ${mono}cuckold${mono}
 •  ${mono}cum${mono}
 •  ${mono}milf${mono}
 •  ${mono}femdom${mono}
 •  ${mono}foot${mono}
 •  ${mono}gangbang${mono}
 •  ${mono}glasses${mono}
 •  ${mono}jahy${mono}
 •  ${mono}masturbation${mono}
 •  ${mono}neko-hentai${mono}
 •  ${mono}neko-hentai2${mono}
 •  ${mono}nsfwloli${mono}
 •  ${mono}orgy${mono}
 •  ${mono}panties${mono}
 •  ${mono}pussy${mono}
 •  ${mono}tentacles${mono}
 •  ${mono}thighs${mono}
 •  ${mono}zettai${mono}
 •  ${mono}yuri${mono}
 
 
   ---🦄 *ᴛᴏᴏʟs ᴍᴇɴᴜ* 🦄---

 •  ${mono}togif${mono}
 •  ${mono}toqr${mono}
 •  ${mono}bass${mono}
 •  ${mono}blown${mono}
 •  ${mono}deep${mono}
 •  ${mono}earrape${mono}
 •  ${mono}fat${mono}
 •  ${mono}fast${mono}
 •  ${mono}nightcore${mono}
 •  ${mono}reverse${mono}
 •  ${mono}robot${mono}
 •  ${mono}slow${mono}
 •  ${mono}smooth${mono}
 •  ${mono}squirrel${mono}
 •  ${mono}tinyurl${mono}
 •  ${mono}tovn${mono}
 •  ${mono}toaudio${mono}
 •  ${mono}tomp3${mono}
 •  ${mono}tomp4${mono}
 •  ${mono}toimg${mono}
 •  ${mono}vv${mono}
 •  ${mono}sticker${mono}
 •  ${mono}take${mono}
 •  ${mono}volume${mono}
 •  ${mono}ebinary${mono}
 •  ${mono}dbinary${mono}
 •  ${mono}ssweb${mono}
 •  ${mono}quoted${mono}
 
 
 *© K A N N A - ＭＤ  ||  ２０２４*`}






global.botmenu = (prefix) => {
return`
*╭─「 ʙᴏᴛ ɪɴғᴏ 」*
*│ꕥ ʙᴏᴛɴᴀᴍᴇ -* ᴋᴀɴɴᴀ-ᴍᴅ
*│ꕥ ᴀᴜᴛʜᴏʀ -* ᴠᴇɴᴏx-xᴇʀ
*╰──────────*

      〢━━━ 🤖 *Bot Menu* 🤖 ━━━〢

❒  ${mono}ping, mylocation, reportbug, listprem, liststicker, listimage,listapk, listpc, listgc, isgroup, owner, rentbot, listrentbot, repo, setcmd, delcmd${mono}`}





global.ownermenu = (prefix) => {
return`
*╭─「 ʙᴏᴛ ɪɴғᴏ 」*
*│ꕥ ʙᴏᴛɴᴀᴍᴇ -* ᴋᴀɴɴᴀ-ᴍᴅ
*│ꕥ ᴀᴜᴛʜᴏʀ -* ᴠᴇɴᴏx-xᴇʀ
*╰──────────*

       〢━━━ 🔮 *Owner Menu* 🔮 ━━━〢

❒  ${mono}setbotname, setbotbio, ban, delppbot, setppbot, addprem, delprem, addowner, delowner, addsticker, delsticker, addapk, delapk, addimage, delimage, setpublic, setprivate, join, bctext, poll, bcimage, bcvideo, creategc, setsticker, userjid, block, leavegc, pushcontact, upswtext${mono}`}





global.groupmenu = (prefix) => {
return`
*╭─「 ʙᴏᴛ ɪɴғᴏ 」*
*│ꕥ ʙᴏᴛɴᴀᴍᴇ -* ᴋᴀɴɴᴀ-ᴍᴅ
*│ꕥ ᴀᴜᴛʜᴏʀ -* ᴠᴇɴᴏx-xᴇʀ
*╰──────────*

       〢━━━ ⛩ *Group Menu* ⛩ ━━━〢

❒  ${mono}setppgroup, delppgroup, setname, setdesc, add, kick, antilink, antilinkgc, grouplink, invite, promote, demote, savecontact, hidetag, tag, tagall, editinfo, opentime, closetime, resetlink, vote, upvote, downvote, checkvote, delvote, autostickergc, nsfw${mono}`}






global.dlmenu = (prefix) => {
return`
*╭─「 ʙᴏᴛ ɪɴғᴏ 」*
*│ꕥ ʙᴏᴛɴᴀᴍᴇ -* ᴋᴀɴɴᴀ-ᴍᴅ
*│ꕥ ᴀᴜᴛʜᴏʀ -* ᴠᴇɴᴏx-xᴇʀ
*╰──────────*

       〢━━━ 🍥 *Dl Menu* 🍥 ━━━〢

❒  ${mono}ytsearch, play, ytmp3, ytmp4, tiktokaudio, tiktok, igvideo, igimage, apk, google, imdb, weather, wanumber, spotify, gitclone, happymod, gdrive, pinterest, ringtone, lyrics${mono}`}







global.funmenu = (prefix) => {
return`
*╭─「 ʙᴏᴛ ɪɴғᴏ 」*
*│ꕥ ʙᴏᴛɴᴀᴍᴇ -* ᴋᴀɴɴᴀ-ᴍᴅ
*│ꕥ ᴀᴜᴛʜᴏʀ -* ᴠᴇɴᴏx-xᴇʀ
*╰──────────*

       〢━━━ 🎮 *Fun Menu* 🎮 ━━━〢

❒  ${mono}define, qc, suit, math, tictactoe, delttt, fact, truth, dare, couple, soulmate, stupidcheck, handsomecheck, uncleancheck, hotcheck, smartcheck, greatcheck, coolcheck, evilcheck, waifucheck, awesomecheck, gaycheck, cutecheck, lesbiancheck, hornycheck, pick, quotes, can, is, when, where, what, how, rate, cry, kill, hug, pat, lick, bite, kiss, poke, nom, foxgirl, checkme, sound1 - sound161${mono}`}







global.aimenu = (prefix) => {
return`
*╭─「 ʙᴏᴛ ɪɴғᴏ 」*
*│ꕥ ʙᴏᴛɴᴀᴍᴇ -* ᴋᴀɴɴᴀ-ᴍᴅ
*│ꕥ ᴀᴜᴛʜᴏʀ -* ᴠᴇɴᴏx-xᴇʀ
*╰──────────*

       〢━━━ 💻 *Ai Menu* 💻 ━━━〢

❒  ${mono}openai, ai, mathsai, remini, tts, say${mono}`}





global.animemenu = (prefix) => {
return`
*╭─「 ʙᴏᴛ ɪɴғᴏ 」*
*│ꕥ ʙᴏᴛɴᴀᴍᴇ -* ᴋᴀɴɴᴀ-ᴍᴅ
*│ꕥ ᴀᴜᴛʜᴏʀ -* ᴠᴇɴᴏx-xᴇʀ
*╰──────────*

       〢━━━ 💙 *Weeb Menu* 💙 ━━━〢

❒  ${mono}anime, manga, akira, akiyama, ana, boruto, chiho, chitoge, cosplayloli, cosplaysagiri, deidara, elaina, emilia, gremory, hestia, husbu, inori, itachi, kakasih, keneki, kaori, megumin, madara, mikasa, minato, nezuko, naruto, onepiece, randomanime, randomanime2, sasuke, shizuka, shota, waifu, tsunade, toukachan, animewall${mono}`}







global.nsfwmenu = (prefix) => {
return`
*╭─「 ʙᴏᴛ ɪɴғᴏ 」*
*│ꕥ ʙᴏᴛɴᴀᴍᴇ -* ᴋᴀɴɴᴀ-ᴍᴅ
*│ꕥ ᴀᴜᴛʜᴏʀ -* ᴠᴇɴᴏx-xᴇʀ
*╰──────────*

       〢━━━ 🏮 *Nsfw Menu* 🏮 ━━━〢

❒  ${mono}hentai, gifhentai, gifblowjob, hentaivid, hneko, nwaifu, animespank, trap, gasm, ahegao, ass, bdsm, blowjob, cuckold, cum, milf, femdom, foot, gangbang, glasses, jahy, masturbation, neko-hentai, neko-hentai2, nsfwloli, orgy, panties, pussy, tentacles, thighs, zettai, yuri${mono}`}





global.bugsmenu = (prefix) => {
return`
*╭─「 ʙᴏᴛ ɪɴғᴏ 」*
*│ꕥ ʙᴏᴛɴᴀᴍᴇ -* ᴋᴀɴɴᴀ-ᴍᴅ
*│ꕥ ᴀᴜᴛʜᴏʀ -* ᴠᴇɴᴏx-xᴇʀ
*╰──────────*

       〢━━━ 🐞 *Bugs Menu* 🐞 ━━━〢

❒  ${mono}amountbug, pmbug, delaybug, docubug, trollybug, gcbug, verif, banv1, banv2, unbanv1, unbanv2${mono}`}






global.socialmenu = (prefix) => {
return`
*╭─「 ʙᴏᴛ ɪɴғᴏ 」*
*│ꕥ ʙᴏᴛɴᴀᴍᴇ -* ᴋᴀɴɴᴀ-ᴍᴅ
*│ꕥ ᴀᴜᴛʜᴏʀ -* ᴠᴇɴᴏx-xᴇʀ
*╰──────────*

       〢━━━ 🎀 *Social Menu* 🎀 ━━━〢

❒  ${mono}tiktokgirl, tiktoknukthy, tiktokkayes, tiktokpanrika, tiktoknotnot, tiktokghea, aesthetic, coffee, couplepp, profilepic, japanese, hijab, randomgirl, randomboy, chinese, indo, korean, malai, shadow, write, romantic, burnpaper, smoke, narutobanner, love, naturetypography, glitchtext, styletext, fliptext, writetext, typographytext, logomaker, advancedglow${mono}`}







global.stickermenu = (prefix) => {
return`
*╭─「 ʙᴏᴛ ɪɴғᴏ 」*
*│ꕥ ʙᴏᴛɴᴀᴍᴇ -* ᴋᴀɴɴᴀ-ᴍᴅ
*│ꕥ ᴀᴜᴛʜᴏʀ -* ᴠᴇɴᴏx-xᴇʀ
*╰──────────*

       〢━━━ 🍁 *Sticker Menu* 🍁 ━━━〢

❒  ${mono}goose, woof, 8ball, lizard, meow, gura, patrick, doge, lovestick, telestick${mono}`}








global.toolsmenu = (prefix) => {
return`
*╭─「 ʙᴏᴛ ɪɴғᴏ 」*
*│ꕥ ʙᴏᴛɴᴀᴍᴇ -* ᴋᴀɴɴᴀ-ᴍᴅ
*│ꕥ ᴀᴜᴛʜᴏʀ -* ᴠᴇɴᴏx-xᴇʀ
*╰──────────*

       〢━━━ 🦄 *Tools Menu* 🦄 ━━━〢

❒  ${mono}togif, toqr, bass, blown, deep, earrape, fat, fast, nightcore, reverse, robot, slow, smooth, squirrel, tinyurl, tovn, toaudio, tomp3, tomp4, toimg, vv, sticker, take, volume, ebinary, dbinary, ssweb, quoted${mono}`}





global.stalkermenu = (prefix) => {
return`
*╭─「 ʙᴏᴛ ɪɴғᴏ 」*
*│ꕥ ʙᴏᴛɴᴀᴍᴇ -* ᴋᴀɴɴᴀ-ᴍᴅ
*│ꕥ ᴀᴜᴛʜᴏʀ -* ᴠᴇɴᴏx-xᴇʀ
*╰──────────*

       〢━━━ 🎗 *Stalker Menu* 🎗 ━━━〢

❒  ${mono}igstalk, nowa, ffstalk, mlbbstalk, npmstalk, ghstalk${mono}`}





let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})