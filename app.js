const express=require('express')
const cors=require('cors')
const app=express()
const mailRouter=require('./router/main_router')
const port=4512;
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(mailRouter)
app.listen(port, () => {
    console.log(`端口号为 http://localhost:${port}`)
})
