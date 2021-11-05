import { Server } from 'colyseus';
import { monitor } from '@colyseus/monitor';
import { WebSocketTransport } from '@colyseus/ws-transport';

import express from 'express';
import { createServer } from 'http';

import { MyRoom } from './rooms/my-room';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send("It's time to kick ass and chew bubblegum!");
});

/**
 * Bind @colyseus/monitor
 * It is recommended to protect this route with a password.
 * Read more: https://docs.colyseus.io/tools/monitor/
 */
app.use('/colyseus', monitor());

const gameServer = new Server({
  transport: new WebSocketTransport({ server: createServer(app) }),
});

gameServer.define('my_room', MyRoom);

export default gameServer;
