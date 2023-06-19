const express= require('express');
const app=express();
const port=8008;

function exp(){
    app.get('/numbers',(req,res)=>{

        const {url}=req.body;
        const numbers = [...new Set(extractIntegers(url))];
        const sorted=numbers.sort();

        res.send('URL received: ${url}');
    });
    
}

function extractIntegers(urls) {
    const regex = /\d+/g;
    const integers = [];
  
    urls.forEach(url => {
      const matches = url.match(regex);
      if (matches) {
        matches.forEach(match => {
          integers.push(parseInt(match));
        });
      }
    });
  
    return integers;
  }

  
app.listen(port)
