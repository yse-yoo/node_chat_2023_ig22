    console.log('hello');

    // WebsocketのURL
    const url = '';
    // Websocketの接続
    var socket = io.connect(url);

    function sendMessage() {
        var message = document.getElementById('message').value;
        console.log(message);
    }