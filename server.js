const express = require('express');
const Caesar = require('caesar-salad').Caesar;


const app = express();
const port = 8000;

app.get('/:Hello', (req, res) => {
  res.send(`Привет, ${req.params.Hello}`);
});
app.get('/encode/:url', (req, res) => {
   res.send(Caesar.Cipher('c').crypt(req.params.url));
});

app.get('/decode/:url', (req, res) => {
    res.send(Caesar.Decipher('c').crypt(req.params.url));
});

app.listen(port, () => {
    console.log(port)
});


