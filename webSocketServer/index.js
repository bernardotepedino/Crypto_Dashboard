const api = require('binance');

const binanceWS = new api.BinanceWS(true); // Argument specifies whether the responses should be beautified, defaults to true

binanceWS.onKline('BNBBTC', '1m', data => {
    //console.log(data);
    document.getElementById("test1").value += JSON.stringify(data);
});