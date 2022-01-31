
var http =require('http');

var server=http.createServer(function (req,res){
    res.end('server works!');
});

server.listen(3000,'localhost',function(){
    console.log('Server started on port:3000');

});


var fs=require('fs');

fs.writeFile('./hello.txt','How are you?',function(err){
    if(!err){
        fs.readFile('./hello.txt',function(err,data){
            if(!err){
                console.log(data.toString());
            }
        });
    }
});