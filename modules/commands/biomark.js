module.exports.config = {

	name: "biomark",

	version: "1.0.0",
	hasPermssion: 0,
	credits: "NQH VIP",
	description: "Comment trên bio của Mark",
	commandCategory: "edit-img",
	usages: "[text]",
	cooldowns: 10,
	dependencies: {
		"canvas":"",
		 "axios":"",
		 "fs-extra":""
	}
};

module.exports.wrapText = (ctx, text, maxWidth) => {
	return new Promise(resolve => {
		if (ctx.measureText(text).width < maxWidth) return resolve([text]);
		if (ctx.measureText('W').width > maxWidth) return resolve(null);
		const words = text.split(' ');
		const lines = [];
		let line = '';
		while (words.length > 0) {
			let split = false;
			while (ctx.measureText(words[0]).width >= maxWidth) {
				const temp = words[0];
				words[0] = temp.slice(0, -1);
				if (split) words[1] = `${temp.slice(-1)}${words[1]}`;
				else {
					split = true;
					words.splice(1, 0, temp.slice(-1));
				}
			}
			if (ctx.measureText(`${line}${words[0]}`).width < maxWidth) line += `${words.shift()} `;
			else {
				lines.push(line.trim());
				line = '';
			}
			if (words.length === 0) lines.push(line.trim());
		}
		return resolve(lines);
	});
} 

module.exports.run = async function({ api, event, args }) {
	let { senderID, threadID, messageID } = event;
	const { loadImage, createCanvas } = require("canvas");
	const fs = global.nodemodule["fs-extra"];
	const axios = global.nodemodule["axios"];
	let pathImg = __dirname + '/cache/biomark.png';
	var text = args.join(" ");
	if (!text) return api.sendMessage("Nhập nội dung comment trên bio", threadID, messageID);
	let getPorn = (await axios.get(`https://scontent.xx.fbcdn.net/v/t1.15752-9/p480x480/242145083_573715160405026_2549133592409146679_n.png?_nc_cat=106&ccb=1-5&_nc_sid=ae9488&_nc_ohc=iGQS_0vTjagAX92I2Em&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=fb86440f8df10a554ab5c9d09b99e9d5&oe=619FE3E3`, { responseType: 'arraybuffer' })).data;
	fs.writeFileSync(pathImg, Buffer.from(getPorn, 'utf-8'));
	let baseImage = await loadImage(pathImg);
	let canvas = createCanvas(baseImage.width, baseImage.height);
	let ctx = canvas.getContext("2d");
	ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
	ctx.font = "1000 18px Arial";
	ctx.fillStyle = "#ffffff";
	ctx.textAlign = "start";
	let fontSize = 50;
	while (ctx.measureText(text).width > 1200) {
		fontSize--;
		ctx.font = `1000 ${fontSize}px Arial`;
	}
	const lines = await this.wrapText(ctx, text, 470);
	ctx.fillText(lines.join('\n'), 295,300);//comment
	ctx.beginPath();
	const imageBuffer = canvas.toBuffer();
	fs.writeFileSync(pathImg, imageBuffer);
return api.sendMessage({ attachment: fs.createReadStream(pathImg) }, threadID, () => fs.unlinkSync(pathImg), messageID);        
}