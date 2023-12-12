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

// .envの読み込み
const dotenv = require('dotenv');
dotenv.config();
const host = process.env.HOST
const port = process.env.PORT

// サーバの設定
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

//Socket.ioの接続
io.on('connection', (socket) => {
    console.log('connected!!!')
})


//サーバ起動
http.listen(port, host, () => {
    console.log(`listening on http://${host}:${port}`);
})



