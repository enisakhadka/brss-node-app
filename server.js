// console.log("hello world")
// var http = require("http");


// http.createServer((request, response) => {
//     console.log("listening on port 4000")
//     response.write("welcome")
//     response.end()
// }).listen(4000)


// 

var http = require("http")
var fs = require("fs")

var server = http.createServer((req, res) => {
    console.log('request made...')
    console.log(req.method, req.url)

    res.setHeader('Content-Type', 'text/html')
    var path = "./views/"

    switch (req.url) {
        case "/about":
            path = path + "about.htm"
            res.statusCode = 200
            break;
        case "/index":
            path = path + "index.htm"
            res.statusCode = 200
            break;
        default:
            path = path + "404.htm"
            res.statusCode = 404
            break;
    }



    fs.readFile(path, (error, data) => {
        if (error) {
            console.log(error.message)
            res.end(error.message)
        }
        res.end(data)
    })

})


server.listen(4000, 'localhost', () => {
    console.log('listening on port 4000...')
})