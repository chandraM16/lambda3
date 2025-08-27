const dotevn = require("dotevn");
const { Telegraf } = require("telegraf");

dotevn.config(); // Load environment variables

const bot = new Telegraf(process.env.BOT_API_TOKEN); // create bot

try {
  bot.start((ctx) => ctx.reply("Welcome to my shope!, Hi i am CoolDude69")); // start message

  bot.command("help", (ctx) => ctx.reply("Send me a sticker"));

  bot.on("sticker", (ctx) => ctx.reply("👍"));
  bot.launch(); //  start bot
} catch (error) {
  console.log({ error });
}
