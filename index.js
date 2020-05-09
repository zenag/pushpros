const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const port = 3000;

// install axios to use http request
const axios = require("axios");

// include file system module
const fs = require('fs');

//Loads the handlebars module
const handlebars = require('express-handlebars');
//Sets our app to use the handlebars engine
app.set('view engine', 'handlebars');
//Sets handlebars configurations (we will go through them later on)
app.engine('handlebars', handlebars({
layoutsDir: __dirname + '/views/layouts',
}));


app.use(cors());

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.set('title','Sample Data');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res) => {
	
    res.render('main', {layout : 'index'});

});
app.get('/getData',(req,res,next) => {
	const url = "http://aimtell.com/files/sites.json";  
    axios.get(url)
    .then(data => res.json(data.data))
    .catch(err => next(err));	
});



app.listen(port,()=>{console.log('server running successfully!')});