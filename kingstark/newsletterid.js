module.exports = {
    name: "newsletterid",
    category: "settings",
    description: "📩 Donne l'ID du dernier message détecté sur la chaîne officielle",
    commands: ["newsletterid", "getnewsletterid"],

    handler: async ({ reply, isOwner }) => {
        if (!isOwner) {
            return reply('❌ *Réservé au propriétaire du bot.*');
        }

        if (!global.lastNewsletterMessageId) {
            return reply(
                `ℹ️ *Aucun message détecté pour l'instant.*\n\n` +
                `Poste un message sur ta chaîne officielle, attends quelques secondes, puis retape *.newsletterid*.`
            );
        }

        await reply(
            `📩 *Dernier ID de message de la chaîne :*\n\n` +
            `\`${global.lastNewsletterMessageId}\`\n\n` +
            `👉 Mets-le dans la variable d'env *NEWSLETTER_MESSAGE_ID* pour l'utiliser dans le "forward" décoratif.\n\n` +
            `> *BY KING STARK*`
        );
    }
};
