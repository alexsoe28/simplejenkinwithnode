let app = require("express")()

app("/",(req,res)=> {
	res.send("Successfull done the message with Jenkin")
})

app.listen(9999,()=>console.log("running server"))