const fs = require("fs");

const basePath = "./stickers";
const stickers = fs.readdirSync(basePath);

const stickersMap = stickers.map(sticker => {
    return {
        packName: sticker,
        stickers: fs.readdirSync(basePath + "/" + sticker),
    }
});

fs.writeFileSync("./stickers-map.json", JSON.stringify(stickersMap));