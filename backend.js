/*
Alright. Tribbles.
We're going to make a tribble database.
It's going to contain a username, password, and 
*/
let http = require("http"),
fs = require("fs"),
keepRequests = {}

http.createServer((req, res) => {
    console.log(req.url)
    if(req.url == "/") {
        // Home page
        fs.readFile("Frontend/home.html", (err, ans) => {
            if(err) {
                throw err
            }
            res.write(ans)
            res.end()
        })
    } else {
        let finalURL = req.url,
        potentialArguments = req.url.split("?")
        if(potentialArguments.length > 1) {
            // There are arguments we need to send to the frontend separately.
            finalURL = potentialArguments[0]
            for(let i = 1; i < potentialArguments.length; i++) {
                // Keep these until the next time
                keepRequests[potentialArguments[i].split("=")[0]] = potentialArguments[i].split("=")[1]
            }
            console.log(keepRequests)
        }
        fs.readFile("Frontend" + finalURL, (err, ans) => {
            if(err) {
                // Couldn't find it
                res.write("Couldn't find what you were looking for, sorry.")
                res.end()
            } else {
                res.write(ans)
                res.end()
            }
        })
    }
}).listen(3030)