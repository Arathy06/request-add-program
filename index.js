
var express = require('express')
var bodyParser = require('body-parser')

var app=express();


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get("/",(req,res)=>{

    res.send("Welcome")
})


app.post("/add",(res,req)=>{

    var getnum1=parseInt(req.body.num1)
    var getnum2=parseInt(req.body.num2)
    var result=getnum1+getnum2
    res.status(200).json({"result":result})
})


app.listen(process.env.PORT || 3000,(error)=>{

    if(error)
    {
        console.log("Error occured")
    }
    else
    {
        console.log("Server started")
    }
})