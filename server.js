var express = require('express');


var app = express();


app.set('port', (process.env.PORT || 5000));

app.get('/', (req,res)=>{
    var head = req.headers['user-agent'];
    var software = head.slice(head.indexOf('(') + 1, head.indexOf(')'));
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var lang = req.headers['accept-language'];
    var language = lang.slice(0,lang.indexOf(';'));
    if(language.indexOf(',') > -1) {
        language = language.slice(0,language.indexOf(','));
    }
    var response = JSON.stringify({
        ipaddress: ip,
        language: language,
        software: software
    }, null, " ");
    res.send('<p style="font-family: Arial, Helvetica, sans-serif">' + response + '</p>')
});

app.listen(app.get('port'), () => {
    console.log('App is running on port', app.get('port'));
});
