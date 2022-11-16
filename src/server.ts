import path from 'path';
import express from 'express';

const server = express();

server.use(express.json());
server.use(express.static(path.join(__dirname, 'public')));

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  // res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next();
});

// For the client side BrowserRouter - because there is no '#' to distinguish
// between client and server side routes, this sends back the index.html
// (which contains the bundle.js) if none there is no server side route match.
server.get('*', (req, res) => {
  try {
    res.sendFile(path.join(__dirname, './public/index.html'));
  } catch (err) {
    if (err) res.status(500).send(err);
  }
});

export default server;
