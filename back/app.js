const express = require('express');
const productRouter = require('./routes/product');
const app = express();


// API endpoint
app.use(productRouter);

app.listen(3065 , () =>{
	console.log('서버실행')
})