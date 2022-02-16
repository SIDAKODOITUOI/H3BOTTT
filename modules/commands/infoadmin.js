/*
@credit ⚡️D-Jukie
@vui lòng không chỉnh sửa credit
*/
const fs = require("fs");
module.exports.config = {
    name: "infoadmin",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "L-HOANGANH MOD", //Sang Nguyễn edit mod, Code working của diện,suhao chỉnh chữ thoai ko có rì đâu
    description: "💴in tư admin💎",
    commandCategory: "tài chính",
    cooldowns: 5,
    envConfig: {
        cooldownTime: 0 
    },
    denpendencies: {
        "fs": "",
        "request": ""
}
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/cache/`;
    if (!fs.existsSync(dirMaterial + "cache")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "listadmin.png")) request("https://i.imgur.com/jsteLod.png").pipe(fs.createWriteStream(dirMaterial + "listadmin.png"));
}
module.exports.handleReply = async ({ 
    event:e, 
    api, 
    handleReply, 
    Currencies }) => {
    const { threadID, messageID, senderID } = e;
    let data = (await Currencies.getData(senderID)).data || {};
if (handleReply.author != e.senderID) 
return api.sendMessage("ADMIN ", e.threadID, e.messageID)

var a = Math.floor(Math.random() * 1000) + 80; 
var b = Math.floor(Math.random() * 100) + 80; 
var c = Math.floor(Math.random() * 100) + 80; 
var x = Math.floor(Math.random() * 100) + 80; 
var y = Math.floor(Math.random() * 100) + 80; 
var f = Math.floor(Math.random() * 100) + 50;
  var msg = "";
    switch(handleReply.type) {
        case "choosee": {
            var t = Date.parse("February 1, 2022 00:00:00") - Date.parse(new Date()),
            m = Math.floor( (t/1000/60) % 60 ),
            h = Math.floor( (t/(1000*60*60)) % 24 ),
            d = Math.floor( t/(1000*60*60*24) ); 
           
            switch(e.body) {
                case "1": msg = `꧁ 𝐂𝐇À𝐎 𝐍𝐇Ữ𝐍𝐆 𝐍𝐆ƯỜ𝐈 𝐒Ử 𝐃Ụ𝐍𝐆 𝐁𝐎𝐓 ꧂\nミ★Thông Tin Về Admin Bot ★彡\n😎𝗔𝗗𝗠𝗜𝗡 𝗡𝗔𝗠𝗘 : Lý Hoàng Anh\n🔊𝑮𝒊𝒐̛́𝒊 𝒕𝒉𝒊𝒆̣̂𝒖 : Mình là LHA, rất thích game, đi phượt và luôn khát khao đạt được mục đích của mình\n⚡Thông Tin Cá Nhân⚡\n👤Sinh ngày: 22-08-2007\n👀𝗧𝗶́𝗻𝗵 𝗰𝗮́𝗰𝗵 : Cục súc với thiên hạ nhưng dịu dàng với em\n🤧𝗖𝗵𝗶𝗲̂̀𝘂 𝗰𝗮𝗼: 1m69\n📱𝑳𝒊𝒆̂𝒏 𝑯𝒆̣̂ : 0343617724\n✈Quê Quán: Nghệ An\n🗺Nơi Sống : TPBMT\n💑Mối quan hệ : đang trong giai đoạn hẹn hò  \n📌𝐋𝐢𝐧𝐤 𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐚𝐝𝐦𝐢𝐧 : https://fb.me/lyhoanganh.htbot\n📢𝑽𝒂̀𝒊 𝒍𝒐̛̀𝒊 𝒕𝒐̛́𝒊 𝒃𝒂̣𝒏 𝒅𝒖̀𝒏𝒈 : Vui lòng không spam khi sử dụng và trân thành cảm ơn bạn đã sử dụng sản phẩm\n☠𝙇𝙪̛𝙪 𝙮́ : Đừng có dại dột mà add 2 bot kẻo bị phát hiện là bạn toang đó <3\n🦯𝑪𝒂̉𝒏𝒉 𝒃𝒂́𝒐 : Vui lòng không dùng bot với mục đích xấu hay cố ý report acc facebook\n🌸Chúc bạn sử dụng vui vẻ <3\n________(❤´艸｀❤)________` ;
                await Currencies.increaseMoney(e.senderID, parseInt(a)); 
                break; 
                case "2": msg = `梁𝔸𝔻𝕄𝕀ℕ 𝔹𝕆𝕋梁\n😎𝗔𝗗𝗠𝗜𝗡 𝗡𝗔𝗠𝗘 : Nguyễn Thị Trúc Ngân\n🔊𝑮𝒊𝒐̛́𝒊 𝒕𝒉𝒊𝒆̣̂𝒖 : Mình là Trúc Ngân, rất thích game và uống tà tữa:>\n⚡Thông Tin Cá Nhân⚡\n👤Sinh ngày: 20/11/2005\n👀𝗧𝗶́𝗻𝗵 𝗰𝗮́𝗰𝗵 : Hiền. dễ gần, thân thiện\n🤧𝗖𝗵𝗶𝗲̂̀𝘂 𝗰𝗮𝗼: 1m70\n📱𝑳𝒊𝒆̂𝒏 𝑯𝒆̣̂ : 0908******\n✈Quê Quán: Hậu Giang\n🗺Nơi Sống : TPHCM\n💑Mối quan hệ : đang trong giai đoạn Ế bền vững\n📌𝐋𝐢𝐧𝐤 𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐚𝐝𝐦𝐢𝐧 : https://www.facebook.com/profile.php?id=100053026837244\n📢𝑽𝒂̀𝒊 𝒍𝒐̛̀𝒊 𝒕𝒐̛́𝒊 𝒃𝒂̣𝒏 𝒅𝒖̀𝒏𝒈 : Vui lòng không spam khi sử dụng và trân thành cảm ơn bạn đã sử dụng sản phẩm\n☠𝙇𝙪̛𝙪 𝙮́ : Đừng có dại dột mà add 2 bot kẻo bị phát hiện là bạn toang đó ❤\n🦯𝑪𝒂̉𝒏𝒉 𝒃𝒂́𝒐 : Vui lòng không dùng bot với mục đích xấu hay cố ý report acc facebook\n🌸Chúc bạn sử dụng vui vẻ\n_______(❤´艸｀❤)_________`; 
                await Currencies.increaseMoney(e.senderID, parseInt(x));  
                await Currencies.increaseMoney(e.senderID, parseInt(b)); 
                break;
                case "3": msg = `꧁ 𝐂𝐇À𝐎 𝐍𝐇Ữ𝐍𝐆 𝐍𝐆ƯỜ𝐈 𝐒Ử 𝐃Ụ𝐍𝐆 𝐁𝐎𝐓 ꧂\nミ★Thông Tin Về Admin Bot ★彡\n😎𝗔𝗗𝗠𝗜𝗡 𝗡𝗔𝗠𝗘 : Nguyen Thuy Tien\n🔊𝑮𝒊𝒐̛́𝒊 𝒕𝒉𝒊𝒆̣̂𝒖 : hi tớ là ntt🥳 rất vui dc làm quen vs các cậu😘 cho tớ chơi cùng nka🤝\n⚡Thông Tin Cá Nhân⚡\n👤Sinh ngày: 09/06/2007\n👀𝗧𝗶́𝗻𝗵 𝗰𝗮́𝗰𝗵 : thân thiện tốt bụng thùy mị nết na kiki\n🤧𝗖𝗵𝗶𝗲̂̀𝘂 𝗰𝗮𝗼: 1m52\n📱𝑳𝒊𝒆̂𝒏 𝑯𝒆̣̂ : 0982897240\n✈Quê Quán : Nam Định\n🗺Nơi Sống : Tp Hà Nội\💑Mối quan hệ : độc thân cư tề\n📌𝐋𝐢𝐧𝐤 𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐚𝐝𝐦𝐢𝐧 : https://fb.me/100042819350817/\n📢𝑽𝒂̀𝒊 𝒍𝒐̛̀𝒊𝒕𝒐̛́𝒊 𝒃𝒂̣𝒏 𝒅𝒖̀𝒏𝒈 : Vui lòng không spam khi sử dụng và trân thành cảm ơn bạn đã sử dụng sản phẩm\n☠𝙇𝙪̛𝙪 𝙮́ : Đừng có dại dột mà add 2 bot kẻo bị phát hiện là bạn toang đó ❤\n🦯𝑪𝒂̉𝒏𝒉 𝒃𝒂́𝒐 : Vui lòng không dùng bot với mục đích xấu hay cố ý report acc facebook\n🌸Chúc bạn sử dụng vui vẻ ❤\n_______(❤´艸｀❤)_______\n`; 
                await Currencies.increaseMoney(e.senderID, parseInt(c)); 
                break;
            };
            const choose = parseInt(e.body);
            if (isNaN(e.body)) 
            return api.sendMessage("💶Vui lòng chọn để xem in tư admin🎀", e.threadID, e.messageID);
            if (choose > 3 || choose < 1) 
            return api.sendMessage("💶Lựa chọn không có trong danh sách🎀.", e.threadID, e.messageID); 
            api.unsendMessage(handleReply.messageID);
            if (msg == "🎋Chưa update...") {
                msg = "🎋Update soon...";
            };
            return api.sendMessage(`${msg}`, threadID, async () => {
            data.work2Time = Date.now();
            await Currencies.setData(senderID, { data });
            
        });

    };
}
}


module.exports.run = async ({  
    event:e, 
    api, 
    handleReply, 
    Currencies }) => {
    const { threadID, messageID, senderID } = e;
    const cooldown = global.configModule[this.config.name].cooldownTime;
    let data = (await Currencies.getData(senderID)).data || {};
    var   t = Date.parse("February 1, 2022") - Date.parse(new Date()),
    d = Math.floor( t/(1000*60*60*24) ),
    h = Math.floor( (t/(1000*60*60)) % 24 ),
    m = Math.floor( (t/1000/60) % 60 );

    if (typeof data !== "undefined" && cooldown - (Date.now() - data.work2Time) > 0) {

        var time = cooldown - (Date.now() - data.work2Time),
            hours = Math.floor((time / (60000 * 60000 ))/24),
            minutes = Math.floor(time / 60000),
            seconds = ((time % 60000) / 1000).toFixed(0); 
        return api.sendMessage(`💎Xem rồi thì chờ đi xem lồn gì xem lắm !!`, e.threadID, e.messageID); // Đoạn này ae có thể để quay lại sau ${housr}giờ ${minutes}phút ${seconds}giây
    }
    else {    
        var msg = {
            body: "🎋In Tư Admin🎋" +
                `\n` +
                "\n𝟏.   ADMIN HOÀNG ANH " +
                "\n𝟐.   ADMIN NGÂN" +
                "\n𝟑.   ADMIN TIÊN" +
                `\n\n🧨Reply tin nhắn để xem in tư admin theo stt`,
                attachment: fs.createReadStream(__dirname + `/cache/listadmin.png`)}
                return api.sendMessage(msg,e.threadID,  (error, info) => {
                data.work2Time = Date.now();
        global.client.handleReply.push({
            type: "choosee",
            name: this.config.name,
            author: e.senderID,
            messageID: info.messageID
          })  
        })
    }
}