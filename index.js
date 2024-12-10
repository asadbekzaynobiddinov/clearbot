import { Bot } from "grammy";

const bot = new Bot("6820532977:AAG5uLyxAy_XiQrgGe7U0uo2xumqtQRrIE8");


bot.command('start', ctx => {
    ctx.reply('ishladi')
})

bot.on("message:new_chat_members", async (ctx) => {
    try {
        console.log("Yangi foydalanuvchi qo'shildi:", ctx.message.new_chat_members);
        await ctx.api.deleteMessage(ctx.chat.id, ctx.message.message_id);
    } catch (error) {
        console.error("Kirish xabarini o‘chirishda xatolik:", error);
    }
});

bot.on("message:left_chat_member", async (ctx) => {
    try {
        await ctx.api.deleteMessage(ctx.chat.id, ctx.message.message_id);
    } catch (error) {
        console.error("Chiqish xabarini o‘chirishda xatolik:", error);
    }
});

bot.start();