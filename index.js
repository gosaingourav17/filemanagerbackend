const http = require('http');
const app = require('./app');
app.use('/', require('./api/routes/crud'))
var port = process.env.PORT||3000
const srever = http.createServer(app);
srever.listen(port);
