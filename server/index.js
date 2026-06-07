let http = require("http");

let server = http.createServer( (req, res) => {

    if (req.url == "/about") { //http://localhost:7000/about

    let obj = {
        status: 1,
        data: [
            {
                name: "John",
                age: 30,
                city: "New York"
            },
            {
                name: "Liya",
                age: 24,
                city: "America"
            }

        ]
    }
    res.end (JSON.stringify(obj))

} 

if (req.url == "/contact") { //http://localhost:7000/contact
   
}

})

server.listen("7000") //http://localhost:7000