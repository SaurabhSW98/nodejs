const express=require('express')
const cors=require('cors')


const app=express()
app.use(cors('*'))
app.use(express.json())

const routerBook=require('./routes/book')
app.use('/book',routerBook)

app.listen(4000,'0.0.0.0',()=>{
    console.log('book-server started on port 4000')
})