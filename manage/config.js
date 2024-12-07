console.log(window.location.hostname);
window.AppConfig = {
    apiUrl: 'http://'+window.location.hostname+':9889/',  //后端接口服务
    blive: 'http://'+window.location.hostname+':12450/',  //b站弹幕
    ws: 'ws://'+window.location.hostname+':18765',  //ws公共服务
};