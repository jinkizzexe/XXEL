const chalk = require("chalk")
const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//----------------------------------[Variables]---------------------------------------\\

// TRUE / FALSE
global.autoReading = false //(true to on, false to off)
global.autoTyping = process.env.AUTO_TYPING || 'false' ; // (true to on, false to off)
global.autoRecord = false //(true to on, false to off)
global.autoblockmorroco = false //(true to on, false to off)
global.autokickmorroco = false //(true to on, false to off) 
global.antispam = process.env.ANTI_SPAM || 'false' ; // (true to on, false to off)
global.keyopenai = process.env.OPENAI_KEY || "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" ; // (Put your OpenAi key if Expires)

// DOCS
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

// PROFILE & STUFF
global.ytname = "YT: Infinite9452" //blank
global.socialm = "GitHub: V-E-N-O-X" //blank
global.location = "Japan, 愛知県, 名古屋市" //ur location
global.botname = process.env.BOT_NAME || 'Kᴀɴɴᴀ-ᴍᴅ' //add bot name
global.owner = process.env.OWNER_NUM || '8801975492880' ; //add your Owner Number 
global.premium = process.env.PREMIUM_USR || '8801975492880' ; //Add
global.ownername = process.env.OWNER_NAME || '複|ᴠᴇɴᴏx' ; //add your owner name
global.ownerweb = "https://youtube.com/@infinite9452"
global.websitex = "https://github.com/V-E-N-O-X"
global.wagc = "https://chat.whatsapp.com/Ly8r369gRm0K3UAqM5Sr93"
global.themeemoji = '🎐'
global.wm = "Kanna-Md Inc."
global.botscript = 'https://github.com/V-E-N-O-X/Kanna-MD' //script link
global.packname = process.env.PACK_NAME || 'Hᴀɴᴅᴄʀᴀғᴛᴇᴅ ʙʏ' ; //Add sticker packname
global.author = process.env.AUTHOR_NAME || '🎀 Vᴇɴᴏx-Sᴇɴᴘᴀɪɪ!' ; //add author name 
global.creator = "8801975492880@s.whatsapp.net"
global.prefa = process.env.PREFIX || '.' ; //add your prefix here or you can set multiple using ['','.','!']
global.sessionName = 'session'
global.hituet = 0

// Thumbs & Pics
global.thum = fs.readFileSync("./VenoxGallery/theme/lolikanna.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./VenoxGallery/theme/lolikanna.jpg") //ur logo pic
global.err4r = fs.readFileSync("./VenoxGallery/theme/lolikanna.jpg") //ur error pic
global.thumb = fs.readFileSync("./VenoxGallery/theme/lolikanna.jpg") //ur thumb pic
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' //default pp wa
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.mess = {
    success: '```Success```...🚀', 
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})