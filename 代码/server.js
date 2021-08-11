// nodemon server.js启动服务
// setHeader具体设置方法：https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS#access-control-allow-origin
// http消息头参考表：https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers

// 1.引入express
const express = require("express")

// 2.创建应用对象
const app = express()

// 3.创建路由规则
app.get('/server', (request, response) => {
  // 设置响应头，设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*')
  // 设置响应体
  response.send('HELLO EXPRESS')
})

app.get('/delay', (request, response) => {
  // 设置响应头，设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*')
  setTimeout(() => {
    // 设置响应体
    response.send('延时响应')
  }, 3000)
})

app.post('/server', (request, response) => {
  // 设置响应头，设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*')
  // 设置响应体
  response.send('HELLO AJAX POST')
})

app.all('/json-server', (request, response) => {
  // 设置响应头，设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*')

  // 响应一个数据
  const data = {
    name: 'coder-quan'
  }
  // 对对象进行字符串转换
  let str = JSON.stringify(data)
  // 设置响应体
  // send只能接受字符串和buffer
  response.send(str)
})

// 这里必须是all，否则跨域设置无效
app.all('/axios-server', (request, response) => {
  // 设置响应头，设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*')
  // 允许设置请求头
  response.setHeader('Access-Control-Allow-Headers', '*')
  // 响应一个数据
  const data = {
    name: 'coder-quan'
  }
  // 对对象进行字符串转换
  let str = JSON.stringify(data)
  // 设置响应体
  // send只能接受字符串和buffer
  response.send(str)
})

app.all('/fetch-server', (request, response) => {
  // 设置响应头，设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*')
  // 允许设置请求头
  response.setHeader('Access-Control-Allow-Headers', '*')
  // 响应一个数据
  const data = {
    name: 'coder-quan'
  }
  // 对对象进行字符串转换
  let str = JSON.stringify(data)
  // 设置响应体
  // send只能接受字符串和buffer
  response.send(str)
})

app.all('/check-username', (request, response) => {
  // 响应一个数据
  const data = {
    exist: 1,
    msg: '用户名已存在'
  }
  // 对对象进行字符串转换
  let str = JSON.stringify(data)
  // 设置响应体
  // send只能接受字符串和buffer
  response.send(`handle(${str})`)
})

app.all('/cors-server',(request,response) => {
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.send('hello cors')
})
// 4.监听端口启动业务'
app.listen(8000, () => {
  console.log('服务已启动，8000端口监听中...')
})

