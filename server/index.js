const express = require('express');
const hbs = require('hbs');
const loginRoutes = require('./routes/login');
const registerRoutes = require('./routes/register');
const connectDatabase= require('./database/connection');
const productsRoutes = require('./routes/products');
const Product = require('./models/Products');
const cors = require('cors');

const app = express();

const staticPath = __dirname + "/public"

connectDatabase()
app.use(cors())

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/login', loginRoutes)
app.use('/api/products',productsRoutes)
app.use('/register',registerRoutes)
app.use('/public',express.static(staticPath))
app.set('view engine','hbs')
app.set('views','./views')
hbs.registerPartials('./views/partials')

const logger = (req,res,next)=>{
    // console.log(req.url)
    console.log("logged")
    next();
}


app.get('/',logger, async (req,res)=>{
    const products  = await Product.find()
    res.render('index',{products})

})

app.get("*", (req, res) => {
    res.sendStatus(404)

})

app.listen(8000,()=>{
    console.log("Server started at port 8000")
})