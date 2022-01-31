
var http =require('http');
var events=require('events');


var eventEmitter=new events.eventEmitter();


var server=http.createServer(function (req,res){
    eventEmitter.emit('someone requested');

    res.end('server works!');
});


eventEmitter.on('someone requested', function(){
    console.log('s request has been done on the server');
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