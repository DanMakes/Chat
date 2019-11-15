import { ChatServer } from './chat-server';

let app = new ChatServer().getApp();

app.get('/', (request, response) => {
  response.send('Hello Good friend');
});

export { app };
