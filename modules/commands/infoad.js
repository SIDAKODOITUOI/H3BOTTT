module.exports.config = {
	name: "infoad",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "HelyT",
	description: "Thông tin nhà tài trợ và nhà phát triển",
	commandCategory: "Info", 
	usages: "gioithieu [thông tin cho bạn]", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async ({ api, event, args, client, utils }) => {
	if (args.join() == "") {api.sendMessage("bé đã pho lâu anh chưa mà đòi xin info của anh!!",event.threadID, event.messageID);
	}
}