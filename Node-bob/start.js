// This is the file you actually need to start the app
// Run nodemon on this file

const app = require('./app');

const port = 9000;
app.listen(port, () => {
    console.log('listening');
});
