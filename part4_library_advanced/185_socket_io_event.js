/**
 * socket.io 모듈 이벤트
 * connection() : 웹 소켓 클라이언트가 연결될 때 발생
 * disconnection() : 웹 클라이언트가 연결을 해제할 때 발생
 *
 * socket.io 모듈 메소드
 * on() : 소켓 이벤트 연결
 * emit() : 소켓 이벤트 발생
 */
const app = require('express')();
const server = require('http').createServer(app);

app.get('/', (reuquest, response) => {
  response.sendFile(`${__dirname}/185_socket_event.html`);
});

const io = require('socket.io')(server);

io.on('connection', (client) => {
  console.log('Client connection');

  // 이벤트 연결 및 전달
  client.on('clientmsg', (data) => {
    console.log('This is client Data:', data);
    client.emit('msg', data);
  });

  // 이벤트 연결 및 전달
  client.on('status', () => {
    console.log('Status event(Server)');
    setInterval(() => {
      client.emit('msg2', 'Hello socket.io');
    }, 3000);
  });
});

server.listen(3000, () => {
  console.log('Server is running port 3000!');
});

