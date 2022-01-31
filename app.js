
var express=require('express');
var http =require('http');
var fs=require('fs');

var app=express();

var server =http.createServer(app);

app.get('/',function(req,res){
    res.send('<h1>Express works</h1>');
});

app.get('/tasks',function(req,res){
    fs.readFile('./db.json',function(err,data){
        var tasks=JSON.parse(data.toString()).tasks;

        res.send(tasks);
    });
    
});

server.listen(3000,function(){
    console.log('server is listening to port 3000');
});


var events=require('events');

var eventEmitter=new events.EventEmitter();


var server=http.createServer(function (req,res){
    eventEmitter.emit('someone requested','test');

    res.end('server works!');
});


eventEmitter.on('someone requested', function(data){
    console.log('a request has been done on the server',data);
});

server.listen(4000,'localhost',function(){
    console.log('Server started on port:4000');

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