const https = require('https');

https.createServer(function(request,response){

	//发送HTTP头部
	//HTTP状态值：200：OK
	// 内容类型：text/plain
	response.writeHead(200,{'Content-Type':'text/plain'});

	//发送响应数据
	response.end('Hello World\n');
}).listen(9412);

https.get('https://datachart.500.com/dlt/history/history.shtml',(req,res)=>{
	let content = '';
	res.on('data',(chunk)=>{
		content += chunk;
	});

	res.on('end',()=>{
		console.log(content);
	});
});

//终端打印信息
console.log('Server running at http://127.0.0.1:9412/');