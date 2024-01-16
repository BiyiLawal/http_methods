//importing http module
const http = require('http');

//creating object for responses
const endpoints = (req, res) => {
    console.log(req.method);
    console.log(req.url);

    if(req.method == "GET" && req.url == "/books"){
        res.write("Hello, here are the books");
    } else if(req.method == "PUT" && req.url == "/books"){
        res.write("You just added a book!");
    } else if(req.method == "DELETE" && req.url == "/books"){
        res.write("Heyy, you just deleted a book");
    } else if(req.method == "GET" && req.url == "/books/author"){
        res.write("Here are the authors!");
    } else if(req.method == "POST" && req.url == "/books/author"){
        res.write("POST sent!");
    } else if(req.method == "PUT" && req.url == "/books/author"){
        res.write("Author added!");
    }
    res.end()
}

//creating a server
const server = http.createServer(endpoints);

//listening to server
server.listen(8000, () => {
    console.log("Server is running on port 8000");
})