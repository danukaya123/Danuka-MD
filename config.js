const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Kegalle/Sri Lanka."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Colombo";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/danukaya123/Danuka-MD/blob/main/lib/assets/Star.png?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ Quizontal" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94764105270";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://github.com/danukaya123/Danuka-MD/blob/main/lib/assets/Star.png?raw=true" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_34_03_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDMxLFxuICAgICAgICAxODksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDYwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2LFxuICAgICAgICA4OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDUxLFxuICAgICAgICA1NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDM4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgISUHAIL_17_34_03_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDMxLFxuICAgICAgICAxODksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDYwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2LFxuICAgICAgICA4OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDUxLFxuICAgICAgICA1NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDM4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3LFxuICAgICAgICAyOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDcxLFxuICAgICAgICA0NixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDMyLFxuICAgICAgICAxMixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjQwLFxuICAgICAgICA4MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQyLFxuICAgICAgICA3NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTE3LFxuICAgICAgICA1NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjM3LFxuICAgICAgICA1LFxuICAgICAgICA1NixcbiAgICAgICAgNDQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjEzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDExNixcbiAgICAgICAgMjExLFxuICAgICAgICA4NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDgwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjksXG4gICAgICAgIDYsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDQ0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjEzLFxuICAgICAgICA4MixcbiAgICAgICAgMTgsXG4gICAgICAgIDIwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQzLFxuICAgICAgICAzMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTksXG4gICAgICAgIDEwLFxuICAgICAgICAxODgsXG4gICAgICAgIDIwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI4LFxuICAgICAgICA4NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDksXG4gICAgICAgIDQ2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNixcbiAgICAgICAgNzEsXG4gICAgICAgIDQ3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAzNixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTI2LFxuICAgICAgICA4OSxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOSxcbiAgICAgICAgODIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMyxcbiAgICAgICAgOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDk2LFxuICAgICAgICA3MixcbiAgICAgICAgMjIxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTAzLFxuICAgICAgICA3MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDczLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDc0LFxuICAgICAgICAxMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDM3LFxuICAgICAgICA3NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDU0LFxuICAgICAgICA0NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDMwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTUyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIk10SkpGR2I5VUVodTQzRmRRVDFmbUgraGtFMGIza0tvMGpkSmMwK1A5ZGs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NjQxMDUyNzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjc2MzdFRTFGQTg3QzIwQ0MwRUNBMEFBQjYzRTExQUVDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0MTQ1NTI3OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzY0MTA1MjcwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzN0QzNzA2QTJGQThGRDc5RENCRjg0MzAxMkYxRDk1N1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDE0NTUyNzhcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRUVPS1c0LS1UOGk4dGt5UDRaOGlqZ1wiLFxuICBcInBob25lSWRcIjogXCI0YzI2OGZiOS01MzAyLTQ4YTgtOGYzOC1jODI5YWRmNjAyNDJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEyLFxuICAgICAgMTcsXG4gICAgICAxOTUsXG4gICAgICAxNDUsXG4gICAgICAxMjAsXG4gICAgICAyMTgsXG4gICAgICAxNzYsXG4gICAgICAxNjYsXG4gICAgICAxNjksXG4gICAgICA2NyxcbiAgICAgIDEwLFxuICAgICAgNDYsXG4gICAgICAyMDUsXG4gICAgICAxMjUsXG4gICAgICAxNjcsXG4gICAgICAxMTcsXG4gICAgICA0MSxcbiAgICAgIDIyOCxcbiAgICAgIDEwMCxcbiAgICAgIDMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MyxcbiAgICAgIDE1NSxcbiAgICAgIDE1NSxcbiAgICAgIDE2OSxcbiAgICAgIDMxLFxuICAgICAgMTIwLFxuICAgICAgNSxcbiAgICAgIDE1NyxcbiAgICAgIDE4OSxcbiAgICAgIDMsXG4gICAgICAyMSxcbiAgICAgIDEzOCxcbiAgICAgIDEzNCxcbiAgICAgIDE5MSxcbiAgICAgIDE2MixcbiAgICAgIDQzLFxuICAgICAgNjIsXG4gICAgICA2OCxcbiAgICAgIDE0NixcbiAgICAgIDYxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTUQ4OTR3REVLai9zYjRHR0FZZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJnUnpXYUxybjBESGwzbVkrMVRGazJWY1hZTnNiN0xCWUdEcXlpV2QzbFc4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImk0WS8vT1VkNFRJY2FwQnVnR2NDbDlDbUFjQWlxQ1IrcUdFcnA5UTgvOG9ZU2NOTXdkUEthcnc2ZWxSbE5sRHhTcUxiMyt3MTF0SGgvZHNZelBiOENBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInlacHZNdURoMG9rSmxEanVyN1hRZzhkbmRnYlAwc2FVOUZONEl0NVhDejU1cTd5dTYvWmxkZmxUNHUxVzE4K3Z5RFB3dlhUclhDRGN0K0lPcHA0N0JBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NjQxMDUyNzA6MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJHZW1pbmkgLSBBSVwiLFxuICAgIFwibGlkXCI6IFwiMTg2OTEzMzM2MDc0NDk0OjMxQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NjQxMDUyNzA6MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQxNDU1Mjc2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSXdrXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJd2QuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJwMWdGd2dheUxuRWorYU00enVoVlNFbitWd2cwOTkvQkUrZHY3b2tjQjJNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjgzMjQzNzgyMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSXdlLmpzb24iOiAie1wia2V5RGF0YVwiOlwiKy9hRGYxNzV5c29hK0o1cG5ZZUlzKzdrenFxbVZCcUJoRk5mN3RFc1V2MD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4MzI0Mzc4MjIsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUl3Zi5qc29uIjogIntcImtleURhdGFcIjpcInY0ZmFldVlibEUvWFZJRVppQkptSW0wRndrdEhRUHVZNHhqdWJHbTV4dUE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODMyNDM3ODIyLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQwMDU2NDY4MDc5XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSXdnLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYmV6WUFDbncxM1lraWxTWHRTalk0eFR6T1A0TnlRc21rS0l0YS9pUkdUbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4MzI0Mzc4MjMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUl3aC5qc29uIjogIntcImtleURhdGFcIjpcIkZaaUJRMzNwSElwZ2NpWFZUQ3dKdVBqeC9Bd0hoZ3JSNTAzeHRRemFlRWM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODMyNDM3ODIzLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUl3aS5qc29uIjogIntcImtleURhdGFcIjpcIlhIS21FM2NLZ3VSRXJTeCt0LzZEQUxENWxDZGREbjJNdmpYWU5mT1FHZEE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODMyNDM3ODIzLFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwyLDRdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUl3ai5qc29uIjogIntcImtleURhdGFcIjpcIkpkVlVjcHg5U3RVbnZvYlM1QlZ1Y2NndDVrc3dzUVR6eFk2S3JGOTgzc289XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODMyNDM3ODIzLFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJd2suanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJtRzErZjBQWEh4N3d2bFdDS0tXcWFneDRKNmdUb01UZWloWHVMckcydGxnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjgzMjQzNzgyMyxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSXdsLmpzb24iOiAie1wia2V5RGF0YVwiOlwiV053UFNQemVFdVEvLzRHWTZzeW1nUG10TUcyR0JmS3NVQStqRXF6OUJydz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4MzI0Mzc4MjMsXCJjdXJyZW50SW5kZXhcIjo4LFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsNiw3XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJd20uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJTL0FoN3orUFBNaC94WFc2bndmT2V1Z0xYWmNLcWtxb2lLMlN3ZmJXckRJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjgzMjQzNzgyMyxcImN1cnJlbnRJbmRleFwiOjksXCJkZXZpY2VJbmRleGVzXCI6WzAsMiw2LDddfSxcInRpbWVzdGFtcFwiOlwiMTc0MDc1ODY3NTQ2OFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUl3bi5qc29uIjogIntcImtleURhdGFcIjpcIk5WMkRvMHE0UHo0WlhMRkJxMEZGZEZWWXBzMVJkNEtoK3ZuT0tkL3VnWk09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODMyNDM3ODIzLFwiY3VycmVudEluZGV4XCI6MTAsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiw2LDddfSxcInRpbWVzdGFtcFwiOlwiMTc0MDc1ODk3MDQzMVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUl3by5qc29uIjogIntcImtleURhdGFcIjpcIkFsVDd6NVJEU2Nlcjl5WktzMUUyNnNtdTJJanNWZWRXTXBlNG1YK0NZTzQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODMyNDM3ODIzLFwiY3VycmVudEluZGV4XCI6MTAsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiw3XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJd3AuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIwMFYvUGl2TWVKZTczUlZMb3ExUWZVOTkwQWs5c2RqemtuaHRjb2ZQellZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjgzMjQzNzgyMyxcImN1cnJlbnRJbmRleFwiOjEwLFwiZGV2aWNlSW5kZXhlc1wiOlswLDddfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUl3cS5qc29uIjogIntcImtleURhdGFcIjpcIkZJeGxXOFZBUlpRV3NoUXNXQTEzR21mL1M5WXg5TDZPSG5uUWc4MnI4Qlk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODMyNDM3ODIzLFwiY3VycmVudEluZGV4XCI6MTAsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc0MDc1ODk4MTY5N1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUl3ci5qc29uIjogIntcImtleURhdGFcIjpcIlNkZ3EwMWVhd3FBWE1ydGVDQ1pTdC9EZmhINy9QMzRmV3I3a0xIQlJOTEk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODMyNDM3ODI0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJd3MuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJlRDlxbUhsa3Y2UC8wWkNRUTkwSXBBM2JMMG9LN1ZYbURuYjk2ZG53enQ0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjgzMjQzNzgyNCxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiwzLDRdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUl3dC5qc29uIjogIntcImtleURhdGFcIjpcIitxaFZpNzYzbGRDa204aHFLeFh6Vi9ENDVZYVRISWZ0dFJNYU5kNEtDTWs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODMyNDM3ODI0LFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwzLDRdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUl3dS5qc29uIjogIntcImtleURhdGFcIjpcIjlYRnVDc0RvbEFSQXgrTnNpS3dWN3N4dXNJcGl5TE1BaVVpZzkyZTZ5Rkk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODMyNDM3ODI0LFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCw0XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJd3YuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJEMnhNWVJGZ205VmZtTjVwRW4wZzVsNXo4SVUrRzBxY25scW1TYmFTZDM4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjgzMjQzNzgyNCxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsNV19LFwidGltZXN0YW1wXCI6XCIxNzQxMjc5MTY5OTM1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || " 🚀 *Quizontal WhatsApp Bot* – Your All-in-One Media & Search Assistant! 🤖  

Looking for a fast and easy way to download videos, search YouTube, find wallpapers, and more? *Quizontal** has you covered! This powerful WhatsApp bot helps you access and download content effortlessly.  

✨ *Features:*  
✅ *Video Downloader* – Download videos from multiple platforms 🎥⬇️  
✅ *YouTube Search* – Find and explore YouTube videos instantly 🔍🎬  
✅ *Wallpaper Download* – Get stunning wallpapers for your device 📱🖼️  
✅ *More Awesome Features* – Stay tuned for exciting updates! 🚀  

Subscribe me - https://www.youtube.com/@quizontal
Just send a message and let *Quizontal* do the magic! ⚡  ", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.4.0",
  caption : global.caption || " 🚀 *Quizontal WhatsApp Bot* – Your All-in-One Media & Search Assistant! 🤖  

Looking for a fast and easy way to download videos, search YouTube, find wallpapers, and more? *Quizontal** has you covered! This powerful WhatsApp bot helps you access and download content effortlessly.  

✨ *Features:*  
✅ *Video Downloader* – Download videos from multiple platforms 🎥⬇️  
✅ *YouTube Search* – Find and explore YouTube videos instantly 🔍🎬  
✅ *Wallpaper Download* – Get stunning wallpapers for your device 📱🖼️  
✅ *More Awesome Features* – Stay tuned for exciting updates! 🚀  

Subscribe me - https://www.youtube.com/@quizontal
Just send a message and let *Quizontal* do the magic! ⚡  " , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Quizontal",
  ownername:process.env.OWNER_NAME|| "Danuka",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "KouYX9yb8f2crZ8Cp2LJg38n",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
