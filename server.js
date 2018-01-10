var express =require('express');
var app = express();
// app.get('/',function(req,res){
// 	res.send('Hello Express');
// });
var port = 3000;
var middleWare={
	requireAuthentication: function(req,res,next){
		console.log('private route hit!');
		next();
	},
	logger: function(req,res,next){
		console.log('Request: '+ new Date().toString() + ' ' + req.method+' '+req.originalUrl);
		next();
	} 
};
app.use(middleWare.logger);
app.get('/about',middleWare.requireAuthentication,function(req,res){
	res.send('About Us!');
});
app.use(express.static(__dirname+'/public'));
//console.log(__dirname);
app.listen(port,function(){
	console.log('Server Started '+port);
});