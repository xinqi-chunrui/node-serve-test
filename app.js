const express = require('express')
const router = require('./router')

const app = express()

app.use('/', router)

const server = app.listen(5000, function(){
	const { address, port } = server.address()
	console.log('HTTP服务启动成功：http://', address, port)
})















