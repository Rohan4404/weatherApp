const express = require('express');
const app = express();
const hbs = require('hbs')
const port = process.env.PORT || 3000 ;
const path = require('path');

// Public Static Path
const staticPath = path.join(__dirname, '../public/');
const temp_Path = path.join(__dirname, '../tempPath/views');
const partials_path = path.join(__dirname,'../tempPath/partials')


app.use(express.static(staticPath));
app.set('view engine','hbs');
app.set('views',temp_Path);
hbs.registerPartials(partials_path)
// Routing
app.get('/',(req,res)=>{
    res.render('C:/Users/91817/OneDrive/Desktop/node js by thapa/Express js By thapa/Express Dynamic Website/tempPath/views/index.hbs');
})
app.get('/about',(req,res)=>{
    res.render('C:/Users/91817/OneDrive/Desktop/node js by thapa/Express js By thapa/Express Dynamic Website/tempPath/views/about');
})
app.get('/weather',(req,res)=>{
    res.render('weather');
})
app.get('*',(req,res)=>{
    res.render('404Error', {
        Errormsg:'OOPS page not found'
    });
})
app.listen(port,()=>{
    console.log(` this is running at port number ${port} `);
})