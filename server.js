// express module 読み込み
const express = require('express')
// http の createServer module 読み込み
const { createServer } = require('node:http');
// Socket.io の Sever module 読み込み
const { Server } = require('socket.io');

// Expressサーバー作成
const app = express();
const server = createServer(app);

// Socket.io を作成
const io = new Server(server);


