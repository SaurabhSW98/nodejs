const { request, response } = require('express')
const express = require('express')
const db = require('../db')
const utils=require('../utils')

const router=express.Router()


//book_id, book_title, publisher_name, author_name

//post

router.post('/',(request,response)=>{
    const{book_title, publisher_name, author_name}=request.body

    const query=`
    INSERT INTO Book 
    (book_title, publisher_name, author_name) 
    VALUES
    ('${book_title}','${publisher_name}','${ author_name}') 
    `
   db.execute(query,(error,result)=>{

   response.send(utils.createResult(error,result))


   })
})


//get

router.get('/',(request,response)=>{
    

    const query=`
    SELECT * FROM Book
    `
   db.execute(query,(error,result)=>{

   response.send(utils.createResult(error,result))


   })
})


//put

router.put('/:id',(request,response)=>{
    const {id} =request.params
    const{book_title, publisher_name, author_name}=request.body

    const query=`
    UPDATE Book
    SET
    book_title = '${book_title}',
    publisher_name = '${book_title}',
    author_name = '${book_title}'
    WHERE
    book_id=${id}
    
    `
   db.execute(query,(error,result)=>{

   response.send(utils.createResult(error,result))


   })
})


//delete

router.delete('/:id',(request,response)=>{
    const {id} =request.params
    
    const query=`
   DELETE FROM Book
   WHERE 
   book_id=${id}
    `
   db.execute(query,(error,result)=>{

   response.send(utils.createResult(error,result))


   })
})


module.exports=router