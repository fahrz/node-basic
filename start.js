mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/nodebasic');
mongoose.Promise = global.Promise;
const User = require('./models/user');
mongoose.connection.on('error', (err) => {
  console.log("error", err);
});

const app = require('./app');
app.set('port', process.env.PORT || 3333);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});