const path = require('path')
const express = require('express')

const proxyMiddleWare = require("http-proxy-middleware")
let proxyOption = {
    target:'/',
    pathRewrite: {
      '^/api': '/static/mock'
    },
    router: function(req) {
      return req.headers.referer
    }
  }

const app = express();

// 监听端口，启动程序
const port = process.env.PORT
const server = app.listen(port, function () {
    console.log(`Node app listening on port ${port}`)
})

app.use(express.static(path.join(__dirname, '../dist')))

app.use('/api', proxyMiddleWare(proxyOption))

//For get source page;
app.use(function (req, res, next) {
    if (!res.headersSent) {
        var clientui = require('fs').readFileSync(path.join(__dirname, '../dist/index.html'));

        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8;'}); //注意, 如果这里不添加charset=utf-8响应, 页面会显示中文乱码;
        res.write(clientui);
        res.end();
        return next();
    }
})



