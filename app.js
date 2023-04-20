
// const http = require('http');

// const server = http.createServer(function(req, res) {
  
//   if(req.url === '/') res.end("welcome to home  page");
//   if(res.url === './about') res.end("welcome to about page");

//   res.end(
//     `<h1>OOPs</h2>
//     <p>the page you lookin for is not existed.
//     <a href='/'>Home</a>
//     `
//   )
// })


// server.listen(5173);


const _ = require('lodash');

const items = [2, [4, 5, [8, 9, [9, 22, 34]]]];
console.log(_.flattenDeep(items));
