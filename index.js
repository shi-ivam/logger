const express = require('express');
const app = express();

app.set('view engine','ejs')

app.get('/',(req,res) => {
	res.render('index',{status:"200",lastUpdated:'12th Jan 2021, 12:00 AM',lastToken:123134139,counter:213,message:"Followed User : 2133847197214"})
})

app.listen(5000)