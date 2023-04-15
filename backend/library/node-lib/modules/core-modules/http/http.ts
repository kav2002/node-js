let http=require('http')
http.createServer((req:any,res:any)=>{
if(req.url=='/path'){

    res.write("hello im working")
    res.end()
}

}).listen (8005,()=>{
console.log("server strted in 8005")

})