// Write JavaScript code here
rbuf = new Buffer.alloc(26);
var j;

for (var i = 65, j = 0; i < 90, j < 26; i++, j++) {
	rbuf[j] = i ;
}

console.log( rbuf.toString('ascii'));
