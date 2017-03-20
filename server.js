var express = require('express');
var parser = require('ua-parser-js');


var app = express();

//var useragent = require('express-useragent');

app.set('port', (process.env.PORT || 5000));

//app.use(useragent.express())

app.get('/', (req,res)=>{
    var head = req.headers['user-agent'];
    var software = head.slice(head.indexOf('(') + 1, head.indexOf(')'));
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var language;
    res.send(JSON.stringify({
        software: software,
        ip: ip,
        language: language
    })); 
});

app.listen(app.get('port'), () => {
    console.log('App is running on port', app.get('port'));
});
