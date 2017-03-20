var express = require('express');

var app = express();

var useragent = require('express-useragent');

app.set('port', (process.env.PORT || 5000));

app.use(useragent.express())

app.get('/', (req,res)=>{
    res.send(req.ip);
    //res.send(req.useragent.source);
});

app.listen(app.get('port'), () => {
    console.log('App is running on port', app.get('port'));
});
