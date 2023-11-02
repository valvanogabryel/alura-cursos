import 'dotenv/config.js';
import {
  registerDocumentEvents,
  registerHomeEvents,
  registerSingInEvents,
  registerLoginEvents,
} from './events/index.js';
import io from './server.js';
import authorizeUserMiddleWare from './middlewares/authorizeUser.js';

const usersNsp = io.of('/users');

usersNsp.use(authorizeUserMiddleWare);
usersNsp.on('connection', (socket) => {
  registerHomeEvents(socket, usersNsp);
  registerDocumentEvents(socket, usersNsp);
});

io.of('/').on('connection', (socket) => {
  registerSingInEvents(socket, io);
  registerLoginEvents(socket, io);
});
