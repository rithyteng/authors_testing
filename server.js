var express =  require('express');
var app = express();
var bodyParser = require ('body-parser');



// --------------------------------------------------------

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));


require('./server/config/mongoose');
require('./server/models/author.js');
require('./server/config/routes.js')(app);


app.listen(8000, function() {
    console.log("listening on port 8000");
})
