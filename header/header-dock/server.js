const express = require('express');
const app = express();

app.use(express.static(__dirname));

const port = process.env.PORT || 8079;
app.listen(port, () => {
  console.log('header working on ', port);
});
