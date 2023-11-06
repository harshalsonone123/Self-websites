const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('./index2.html');
const aboutus = fs.readFileSync('./aboutus.html');
const fitnesscalculator = fs.readFileSync('./fitnesscalculator.html');
const contactus = fs.readFileSync('./contactus.html');

const server = http.createServer((req, res)=>{
    console.log(req.url);
    url = req.url;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if(url =='/'){
        res.end(home);
    }
    else if(url =='/aboutus'){
        res.end(aboutus);
    }
    else if(url =='/fitnesscalculator'){
        res.end(fitnesscalculator);
    }
    else if(url =='/contactus'){
        res.end(contactus);
    }
    else{
            res.statusCode = 404;
            res.end("<h1>404 not found</h1>");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
  