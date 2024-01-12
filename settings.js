const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })



// Put Web Api-here
global.APIs = {
    xfarr: 'https://api.xfarr.com',
};

// Apikey Website Api
global.APIKeys = {
    'https://api.xfarr.com': 'Uc3LRsLE2d',
};

// Set your URL and API key here
global.APIs = {
    xfarr: {
        baseURL: 'https://api.xfarr.com',
        Key: 'Uc3LRsLE2d'
    }
};

//--------------------------------[□Variables□]------------------------------------\\

global.ownername = process.env.OWNER_NAME || "Vᴇɴᴏx" // Owner Name here
global.owner = process.env.SUDO || "8801975492880" // Put Owner Number here
global.apikey = 'bf2d2cf29b3edc604b447983'; // Do not Change
global.premium = '8801975492880'; // Do not change from here
global.packname = 'VɪʙʀAɴɪUM-ʙOT';
global.author = 'Vᴇɴᴏx';
global.sessionName = 'session';
global.prefa = process.env.PREFIX || "."  // put ur prefix ex: (.,/-)
global.sp = 'ꕢ';
global.mess = {
    success: ' *Sᴜᴄᴄᴇss*...✅ ',
    admin: ' *Oɴʟʏ ᴀᴅᴍɪɴ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ғᴇᴀᴛᴜʀᴇ*! ',
    botAdmin: ' *Iᴍ ɴᴏᴛ ᴀɴ Aᴅᴍɪɴ*! ',
    owner: ' *Tʜɪs ғᴇᴀᴛᴜʀᴇ ɪs ᴏɴʟʏ ғᴏʀ ᴍʏ Oᴡɴᴇʀ*! ',
    group: ' *Yᴏᴜ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ᴏɴʟʏ ɪɴ ɢʀᴏᴜᴘs*...❌',
    private: ' *Yᴏᴜ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ғᴇᴀᴛᴜʀᴇ ᴏɴʟʏ ɪɴ ᴘʀɪᴠᴀᴛᴇ-cʜᴀᴛ*...❌ ',
    bot: ' *Bᴏᴛ ɴᴜᴍʙᴇʀ ᴜsᴇʀ sᴘᴇᴄɪᴀʟ ғᴇᴀᴛᴜʀᴇs*! ',
    wait: '*■■■■□□ 80% ʟᴏᴀᴅɪɴɢ!*',
    endLimit: ' *Yᴏᴜʀ ᴅᴀɪʟʏ ʟɪᴍɪᴛ ʜᴀs ᴇxᴘɪʀᴇᴅ, ᴛʜᴇ ʟɪᴍɪᴛ ᴡɪʟʟ ʙᴇ ʀᴇsᴇᴛ ᴇᴠᴇʀʏ 12 ʜᴏᴜʀs* 🗃',
};
global.link = 'https://chat.whatsapp.com/Ly8r369gRm0K3UAqM5Sr93'
global.linkGroup = 'https://chat.whatsapp.com/Ly8r369gRm0K3UAqM5Sr93'
global.autoblok212 = true
global.typemenu = 'v1' // [v1- v5]
global.onlygroup = false // onlygroup
global.onlypc = false      // onlyprivatechat
global.limitawal = {
    premium: 'Infinity',
    free: 3
};

// Anticall
global.config = {
    options: {
        antiCall: false, // Set to true if you want to not get calls from anywhere
    },
};

// Ensure config object is defined before using it
if (config && config.options && config.options.antiCall) {
    let file = require.resolve(__filename);
    fs.watchFile(file, () => {
        fs.unwatchFile(file);
        console.log(chalk.redBright(`Update'${__filename}'`));
        delete require.cache[file];
        require(file);
    });
}