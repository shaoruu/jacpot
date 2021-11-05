import server from './core';

server.listen(2567).then(() => {
  console.log(
    'Server running on ws://localhost:2567 and http://localhost:2567',
  );
});
