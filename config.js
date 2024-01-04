import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'



global.wait = '*⌛ _Loading..._*\n*■■■■■□□□ 60%*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🐦' 


global.multiplier = 29
global.maxwarn = '3' 



global.owner = [
  ['8801975492880', 'VENOX', true],
  ['8801928502256', 'IMYTHIC', true], 
  [''] 
] //Number of owners

//global.pairingNumber = "" //put your bot number here

global.mods = ['8801975492880','8801928502256'] 
global.prems = ['8801975492880', '8801928502256', '']
global.allowed = ['8801975492880', '8801928502256', '']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']



// Sticker WM
global.botname = 'Vɪʙʀᴀɴɪᴜᴍ-Bᴏᴛ'
global.premium = 'true'
global.packname = '🅅🄸🄱🅁🄰🄽🄸🅄🄼 - 🄱🄾🅃' 
global.author = 'ＶＥＮＯＸ' 
global.menuvid = 'https://telegra.ph/file/d4a9176eaf3ef6b3c2def.mp4'
global.igfg = '◇ Follow on Instagram\nhttps://www.instagram.com/sla.sher_\n' 
global.dygp = 'https://chat.whatsapp.com/HGnDq9xzEfDCl5Irj80QA3'
global.fgsc = 'https://github.com/V-E-N-O-X/Vibranium-Bot' 
global.fgyt = 'https://youtube.com/@infinite9452'
global.fgpyp = 'https://youtube.com/@infinite9452'
global.fglog = 'https://i.imgur.com/sJGTEc7.jpg' 
global.thumb = fs.readFileSync('./Assets/Vibranium.jpg')




global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
