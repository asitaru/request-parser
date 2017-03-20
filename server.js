var express = require('express');
var parser = require('ua-parser-js');


var app = express();

//var useragent = require('express-useragent');

app.set('port', (process.env.PORT || 5000));

//app.use(useragent.express())

app.get('/', (req,res)=>{
    var ua = parser(req.headers['user-agent']);
    res.end(JSON.stringify(req.headers['user-agent'].split(' ').slice(1,4).join(' ').slice(1,-1),null,' '))
    //res.end(req.headers['user-agent'])
    //res.send(req.headers['x-forwarded-for'] || req.connection.remoteAddress);

    //res.send(JSON.stringify(req.headers['user-agent']));
});

app.listen(app.get('port'), () => {
    console.log('App is running on port', app.get('port'));
});
