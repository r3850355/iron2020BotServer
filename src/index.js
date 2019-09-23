const express = require('express')
const linebot = require('linebot')

require('dotenv').config()

const app = express()
const bot = new linebot({
  channelId: process.env.channelId,
  channelSecret: process.env.channelSecret,
  channelAccessToken: process.env.channelAccessToken
})
// 程式碼都寫在下面這個區塊內
bot.on('message', async event => {
  if (event.message.type === 'text') {
    event.reply(event.message.text)
  }
})
// 程式碼都寫在這個區塊內 ＾＾＾
app.post('/webhook', bot.parser())
app.listen(3000, res => {
  console.log('伺服器服務運行在 http://localhost:3000')
})
