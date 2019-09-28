const express = require('express')
const linebot = require('linebot')

require('dotenv').config()

const app = express()
app.use('/statics', express.static(__dirname + '/statics'))
const bot = new linebot({
  channelId: process.env.channelId,
  channelSecret: process.env.channelSecret,
  channelAccessToken: process.env.channelAccessToken
})
// 程式碼都寫在下面這個區塊內
// 訊息事件
bot.on('message', async event => {
  let msg = {
    "type": "imagemap",
    "baseUrl": "https://c989ee6a.ngrok.io/statics/flight",
    "altText": "航班資訊",
    "baseSize": {
      "width": 1040,
      "height": 800
    },
    "actions": [
      {
        "type": "message",
        "area": {
          "x": 584,
          "y": 613,
          "width": 456,
          "height": 187
        },
        "text": "航班資訊"
      }
    ]
  }
  event.reply(msg)
})
// 程式碼都寫在這個區塊內 ＾＾＾
app.post('/webhook', bot.parser())
app.listen(3000, res => {
  console.log('伺服器服務運行在 http://localhost:3000')
})
