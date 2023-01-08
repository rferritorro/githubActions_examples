const core = require('actions/core');
const core = require('actions/github');
const TelegramBot = require('node-telegram-bot-api');


let chatId = core.getInput('chat_id')
let telegram_token = core.getInput('token')
let telegram_user = core.getInput('User')

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(telegram_token, {polling: true});


async function SendMessageTelegram() {
  try {
    let msg = `${telegram_user} Tremendo mensaje`
    await bot.sendMessage(chatId, msg); 
  } catch (error) {
    console.log(error)
  }
}

SendMessageTelegram()