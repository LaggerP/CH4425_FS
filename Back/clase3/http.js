const fs = require('fs')
const http = require('http')
const server = http.createServer((req, res)=>{
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<!DOCTYPE html>")
    res.write("<html>")
    res.write("<head>")
    res.write("<title>Hello World Page</title>")
    res.write("</head>")
    res.write("<body>")
    res.write("Hello World")
    res.write("</body>")
    res.write("</html>")
    res.end()
});

server.listen(80)

//agregar datos de un archivo en un html
const server2 = http.createServer((req, res)=>{
    fs.readFile("archivo.txt", (err,data)=>{
        if (err) throw err
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data.toString())
        res.end()
    });
});

server2.listen(8000)