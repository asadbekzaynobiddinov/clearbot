import { Bot } from "grammy";

const bot = new Bot("7856183475:AAF6lW9IG9zPTiM-7z3cuDMS8kufZmE4pok");


bot.command('start', ctx => {
    ctx.reply('Salom.\nMeni guruhga admin qiling\nva men kirdi chiqdini tozalab turaman')
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