const express = require('express')
const path = require('path')
var exphbs  = require('express-handlebars');
var favicon = require('serve-favicon')



const app = express()
const port = 3000

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname,"static")));




app.get('/blog_home/:slug',require(path.join(__dirname, "./blog/routes/blog-logic.js")))
app.get('/blog_home',require(path.join(__dirname, "./blog/routes/blog-logic.js")))
app.get('/weather',require(path.join(__dirname, "./blog/routes/blog-logic.js")))

app.get('/',require(path.join(__dirname, "./home/home-logic.js")))



app.listen(port, () => {
    console.log(`Cropify is listening on http://localhost:${port}`)
})








