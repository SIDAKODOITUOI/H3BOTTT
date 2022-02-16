 module.exports.config = {
  name: "ad",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Huycutephomaique1",
  description: "Thông tin admin bot ^^",
  commandCategory: "ad",
  usages: "adm",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.postimg.cc/y8XphLFR/z2930463615287-e70f637ab848a28524f3287389bc61bf.jpg",
     ];
     var callback = () => api.sendMessage({body:`梁𝔸𝔻𝕄𝕀ℕ 𝔹𝕆𝕋梁
\n😎𝗔𝗗𝗠𝗜𝗡 𝗡𝗔𝗠𝗘 : Lý Hoàng Anh\n🔊𝑮𝒊𝒐̛́𝒊 𝒕𝒉𝒊𝒆̣̂𝒖 : Mình là LHA, rất thích game, đi phượt và luôn khát khao đạt được mục đích của mình\n⚡Thông Tin Cá Nhân⚡\n👤Sinh ngày: 22-08-2007\n👀𝗧𝗶́𝗻𝗵 𝗰𝗮́𝗰𝗵 : Cục súc với thiên hạ nhưng dịu dàng với em\n🤧𝗖𝗵𝗶𝗲̂̀𝘂 𝗰𝗮𝗼: 1m69\n📱𝑳𝒊𝒆̂𝒏 𝑯𝒆̣̂ : 0343617724\n✈Quê Quán: Nghệ An\n🗺Nơi Sống : TPBMT\n💑Mối quan hệ : đang trong giai đoạn hẹn hò  \n📌𝐋𝐢𝐧𝐤 𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐚𝐝𝐦𝐢𝐧 : https://fb.me/lyhoanganh.htbot\n📢𝑽𝒂̀𝒊 𝒍𝒐̛̀𝒊 𝒕𝒐̛́𝒊 𝒃𝒂̣𝒏 𝒅𝒖̀𝒏𝒈 : Vui lòng không spam khi sử dụng và trân thành cảm ơn bạn đã sử dụng sản phẩm\n☠𝙇𝙪̛𝙪 𝙮́ : Đừng có dại dột mà add 2 bot kẻo bị phát hiện là bạn toang đó <3\n🦯𝑪𝒂̉𝒏𝒉 𝒃𝒂́𝒐 : Vui lòng không dùng bot với mục đích xấu hay cố ý report acc facebook\n🌸Chúc bạn sử dụng vui vẻ <3\n________(❤´艸｀❤)________\n
------------
✔ᴅᴏɴᴀᴛᴇ:
💳ᴍʙ: QUEN STK
📲Momo: 094.7654.575
----H3BOT----`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
