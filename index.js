import { Bot, InlineKeyboard } from "grammy";

const bot = new Bot("7856183475:AAF6lW9IG9zPTiM-7z3cuDMS8kufZmE4pok");

bot.command('start', ctx => {
    ctx.reply(`Assalomu alaykum ${ctx.from.first_name}\nMeni o'z guruhingizga qo'shing va men \nkirdi va chiqdini tozalab turaman 👍🏻.`, {
        reply_markup: new InlineKeyboard().url(
            "Guruhga qo'shish",
            `https://t.me/${ctx.me.username}?startgroup=true`
        )
    })
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