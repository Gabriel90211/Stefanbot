const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber = ['+35795703518']
global.ownername = "Stefan"//owner name
global.ytname = "YT: gabriel"
global.socialm = "GitHub: Gabriel90211"
global.location = "Romanian"

global.botname = 'king bot' //name of the bot

//sticker details
global.stickername = 'king bot'
global.packname = 'Sticker By'
global.author = 'Stefan Bot'
//console view/theme
global.themeemoji = '🧩'
global.wm = "stefan botz inc."

//theme link
global.link = 'https://chat.whatsapp.com/G6cnmzsem3TIFgJMlNfKJk'

//custom prefix
global.prefa = ['.']

//false=disable and true=enable
global.welcome = true //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = false //auto view status/story



//reply messages
global.mess = {
    done: '*here you go!* \n\n*king bot*\n\n*🧩 Bot link:* \nhttps://github.com/AYUSH-PANDEY023/Maria-MD\n',
    prem: '*This feature can be used by premium user only*',
    admin: '*This feature can be used by admin only*',
    botAdmin: '*This feature can only be used when the bot is a group admin* ',
    owner: '*This feature can be used by owner only*',
    group: '*This feature is only for groups*',
    private: '*This feature is only for private chats*',
    wait: '*In process...* ',    
    error: '*Error!*',
}

global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
