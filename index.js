var express = require('express'); // 설치한 express module을 불러와서 변수(express)에 답습니다.
var app = express(); // express를 실행하여 app object를 초기화 합니다.

app.get('/', function(req,res) { // '/'위치에 'get'요청을 받는 경우,
  res.send('Hellow World!'); // "Hellow World!"를 보냅니다.
});

var port = 3000; // 사용할 포트 번호를 port 변수에 넣습니다.
app.listen(port, function() {
  console.log('INFO:: Server started at https://localhost:'+port);
});
