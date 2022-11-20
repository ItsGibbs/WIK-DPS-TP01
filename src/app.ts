import express from 'express';
const app = express();
const PORT_LISTEN_PING = 6969;

app.get('/ping', (req, res) => {
  res.json(req.headers);
});

app.get('*', (req, res) => {
    res.status(404).end();
  });

app.listen(PORT_LISTEN_PING, () => {
  return console.log(`Express is listening at http://localhost:${PORT_LISTEN_PING}`);
});