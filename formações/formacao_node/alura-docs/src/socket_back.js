import registerDocumentEvents from './events/document.js';
import registerHomeEvents from './events/home.js';
import registerSingInEvents from './events/sign_in.js';
import io from './server.js';

io.on('connection', (socket) => {
  registerHomeEvents(socket, io);
  registerDocumentEvents(socket, io);
  registerSingInEvents(socket, io);
});
