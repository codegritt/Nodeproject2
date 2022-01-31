
var http =require('http');
var events=require('events');
var express=require('express');
var server =http.createServer(app);
var fs=require('fs');


var app=express();

app.get('/',function(req,res){
    res.send('<h1>Express works</h1>');
});

app.get('/tasks',function(req,res){
    fs.readFile('./db.json',function(err,data){
        res.send(data.toString());
    });
    
});

server.listen(3000,function(){
    console.log('server is listening to port 3000');
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