const express = require('express');
const app = express();
const port = 3000;
const zipCodeRoute = require('./routes/zipCodes');
const path = require('path');

app.use(express.static('./views'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './views', 'index.html'));
});

app.use('/zipCode', zipCodeRoute);

app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});