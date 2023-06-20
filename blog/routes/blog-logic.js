
const express = require('express')
const path = require('path')
const blog_data = require('../data/blog-data.js')
const routers = express.Router();

routers.get("/blog_home",(req,res)=>{
    res.render('blogHome.handlebars',{
        blog_data:blog_data


    })
})
routers.get("/weather",(req,res)=>{
    res.render('weather.handlebars',{
        blog_data:blog_data


    })
})

routers.get("/weather",(req,res)=>{
  
})




routers.get(`/blog_home/:slug`, (req, res) => {
    console.log(req.params.slug)
    let myblog=(blogs.filter((element)=>{
        return element.slug == req.params.slug;
    })); 
    console.log(myblog)

    res.render('blogPage',{
        blog_data:blog_data,
        title:myblog[0].title,
        content:myblog[0].content,
        date:myblog[0].date,
        discription:myblog[0].discription,
        blog_page_image:myblog[0].blog_page_image
    })
    
    
    
  
    
})


module.exports=routers;
