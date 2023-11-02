import 'dotenv/config.js';
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import './database/connect.js';

const app = express();
const port = process.env.PORT ?? 8080;

app.use(express.json());
app.use(express.static('public'));

const httpServer = http.createServer(app);

httpServer.listen(port, () => {
  console.log(`Server running on 'http://localhost:${port}'`);
});

const io = new Server(httpServer);

export default io;
