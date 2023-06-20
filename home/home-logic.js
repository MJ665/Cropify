
const express = require('express')
const path = require('path')
const blog_data = require('../blog/data/blog-data.js')
const routers = express.Router();


routers.get("/",(req,res)=>{
    res.render('home.handlebars',{
        blog_data:blog_data,



    })
})
routers.get("/weather",(req,res)=>{
    res.render('home.handlebars',{
        blog_data:blog_data,



    })
})

module.exports=routers;
