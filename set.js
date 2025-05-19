/* if you're using pannel carefully edit this part

There's no need to configure this if you're deploying via Heroku — just set them in the environment variables.*/

const sessionName = 'session';
const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUZKVG9KSnNkTVlGOTJSd0R3Qm1NbEd0OHdSYWFCdloySlB0YWVXdzgwWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUhNenF2VVBYOTNKUG9OUHA3YVlFWGlaODJ4UGNuNjkxUFlGb00zcURUbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrQnN4QkRXUFVNeGRselRMZGZkckYzSFIrV1grV3ZtRGprQ0QrWVlOVEhZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCMWJNZXdMbEN2cXBtcnhkeHhpRzRYTWxKVjJSZnVlaUhyYVNsbmNCNHlrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktEZzc3OXoxc1U2QU9aalpLbDE5a2N4SmhCTU8yenk0ZHQ4RzRaelY1M2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlLVnE3aW1PRVNmeS9WMEQvZHI2MlcrT3J2MW90NS9uelpEWjQ5SFl5bDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSVBFWXNPd0lpMWhYTk95aUNJNGFUSnZUSlRhUzRlOXc4TTFzZDBhOEZWOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOENnaGRYdGRIUzYwdGZOK09mQ3J0ZHV1VkZNeWxKTWFFUXM3UVdnakp4ND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRXMUxkYUxOREpvUkNSaEJrNzF3YnJkUmJKY0FvQVdFV0ZmUWt1blhFRGwwNllxNmlkcnRUb2VqTkVHZVhrODJpZ2pldXdEdXNSaWh1OG5KTDhSN2pBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk0LCJhZHZTZWNyZXRLZXkiOiIyRHJPQmRmS2pyb3lGaWV4L0w4bE9TK01KYmdZZWtham80TFBCMmh2bWQ4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI2MzcxOTQ5NTA2N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIxRTgxRTA1RjExRDAxQkEyRTA5MkFFNDQ2MkFCODNCQiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ3NjgxNDU2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNjM3MTk0OTUwNjdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNDgyMzNDNjBENTU5Q0U1NkEwMkRFNjQ4MjU1MUQ5NzkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NzY4MTQ2NX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiSjdRNFM2SkYiLCJtZSI6eyJpZCI6IjI2MzcxOTQ5NTA2NzoxOUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjgwMjU2MzEyNTg2Mjg0OjE5QGxpZCIsIm5hbWUiOiLgvIbLouG1mOG1lsqz4bWJ4bWQ4bWJIOG2nMqw4bWDy6LgvIYifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pQMjB2b0hFSnFCcnNFR0dDc2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InhjWlkrQ1Axb3NzWXF1QWZnTDQ3UnpGNFhycGh1Sm1RNWltOWdtbE4rSEU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlBXSTAwSTNkdmswbmFGb3pZSGRGamdGQTV4b25kMlp6amd2WWpCNllBZjZHWXRDejVWTDhBUHRGdXNHZ3ZEK0lObjNGUEp1TnJzUGtTSWFBSjVtS0JBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJCdWZzVzZNdGtpMjdFTFBmZUd5VFVLNDI3MUxpQ2VUTjdFR0k2T3dHVnZzOHJhaUxqV0JiMFlMMVU4VzM4bkwvekpUYnNNU0dTTVdQcjlpSlZ3dDZodz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2MzcxOTQ5NTA2NzoxOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjWEdXUGdqOWFMTEdLcmdINEMrTzBjeGVGNjZZYmlaa09ZcHZZSnBUZmh4In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDc2ODE0NDgsImxhc3RQcm9wSGFzaCI6IjJQMVloZiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSzcrIn0=';
const autobio = process.env.AUTOBIO || 'FALSE';
const autolike = process.env.AUTOLIKE_STATUS || 'TRUE';
const autoviewstatus = process.env.AUTOVIEW_STATUS || 'TRUE';
const welcomegoodbye = process.env.WELCOMEGOODBYE || 'FALSE';
const prefix = process.env.PREFIX || '';
const appname = process.env.APP_NAME || '';
const herokuapi = process.env.HEROKU_API;
const gptdm = process.env.GPT_INBOX || 'FALSE';
const mode = process.env.MODE || 'PUBLIC';
const anticall = process.env.AUTOREJECT_CALL || 'TRUE';
const botname = process.env.BOTNAME || '𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧';
const antibot = process.env.ANTIBOT || 'FALSE';
const author = process.env.STICKER_AUTHOR ||'𝗕𝗢𝗧';
const packname = process.env.STICKER_PACKNAME || '𝗥𝗔𝗩𝗘𝗡';
const antitag = process.env.ANTITAG || 'TRUE';
const dev = process.env.DEV || '254114660061';
const owner = dev.split(",");
const menulink = process.env.MENU_LINK || 'https://files.catbox.moe/duv8ac.jpg';
const menu = process.env.MENU_TYPE || 'VIDEO';
const badwordkick = process.env.BAD_WORD_KICK || 'FALSE';
const bad = process.env.BAD_WORD || 'fuck';
const autoread = process.env.AUTOREAD || 'FALSE';
const antidel = process.env.ANTIDELETE || 'TRUE';
const admin = process.env.ADMIN_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗿𝗲𝘀𝗲𝗿𝘃𝗲𝗱 𝗳𝗼𝗿 𝗔𝗱𝗺𝗶𝗻𝘀!';
const group = process.env.GROUP_ONLY_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝗚𝗿𝗼𝘂𝗽𝘀!';
const botAdmin = process.env.BOT_ADMIN_MSG || '𝗜 𝗻𝗲𝗲𝗱 𝗔𝗱𝗺𝗶𝗻 𝗽𝗿𝗲𝘃𝗶𝗹𝗲𝗱𝗴𝗲𝘀!';
const NotOwner = process.env.NOT_OWNER_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝘁𝗵𝗲 𝗼𝘄𝗻𝗲𝗿!';
const wapresence = process.env.WA_PRESENCE || 'recording';
const antilink = process.env.ANTILINK || 'TRUE';
const mycode = process.env.CODE || '254';
const antiforeign = process.env.ANTIFOREIGN || 'TRUE';
const port = process.env.PORT || 8080;
const antilinkall = process.env.ANTILINK_ALL || 'TRUE';

module.exports = { session, sessionName, autobio, author, packname, dev, owner, badwordkick, bad, mode, group, NotOwner, botname, botAdmin, antiforeign, menu, menulink, autoread, antilink, admin, mycode, antilinkall, anticall, antitag, antidel, wapresence, welcomegoodbye, antibot, herokuapi, prefix, port, gptdm, appname, autolike, autoviewstatus };  
