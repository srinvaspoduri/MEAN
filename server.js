//Install express server
const express = require('express');
const path = require('path');

const app = express();

const csp = require('express-csp-header');
app.use(csp({
    policies: {
        'default-src': [csp.NONE],
        'img-src': [csp.SELF],
    }
}));

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/<name-of-app>'));

app.get('/*', function(req,res) {
    console.log(__dirname)
res.sendFile(path.join(__dirname+'/dist/<name-of-app>/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 1234);