const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Pseudo selectors & more designing</title>
      <style>
        .container {
          background-color: rgb(226, 198, 156);
          border: 2px solid red;
          padding: 34px;
          margin: 34px;
          width: 666px;
        }
        a {
          text-decoration: none;
        }
        a:hover {
          color: rgb(179, 40, 40);
          background-color: rgb(24, 21, 19);
        }
        a:visited {
          color: yellow;
        }
        a:active {
          background-color: blue;
        }
        .btn {
          background-color: chartreuse;
          padding: 6px;
          border: none;
          cursor: pointer;
          font-size: 13px;
          border-radius: 4px;
        }
        .btn:hover {
          background-color: blueviolet;
        }
      </style>
    </head>
  
    <body>
      <div class="container" id="cont1">
        <h3>This is my heading</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
          ullam, exercitationem eius eligendi laudantium aliquam id consequuntur
          ipsum mollitia, illum blanditiis suscipit velit, maxime vitae doloribus
          provident neque natus nesciunt?
        </p>
        <a href="https://www.yahoo.com/" class="btn">Read more</a>
        <button class="btn">Contact us</button>
      </div>
    </body>
  </html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});