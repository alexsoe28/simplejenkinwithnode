let app = require("express")()

app.get("/",(req,res)=> {
	res.send("Successfull done the message with Jenkin")
})

app.listen(9999,()=>console.log("Running on port number 9999"))