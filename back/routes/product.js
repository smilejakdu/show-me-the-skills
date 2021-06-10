const express = require('express');

const router = express.Router();

router.get('/product',(req , res)=>{
	res.json({id:1 , content:"music1"});
})


module.exports = router;