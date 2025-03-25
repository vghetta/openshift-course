const express = require('express');
const app = express();
app.get('/', function (req, res) {
	res.send('Buondi, Corso DO101 con il mio omonimo!!\n');
});
app.listen(8080, function () {
	console.log('Example app listening on port 8080!');
});
module.exports = app;
