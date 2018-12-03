const express = require("express");
const app = express();
const server = require("http").Server(app);
const hbs = require("express-handlebars");
const chat = require("./chat");

const io = require("socket.io")(server);

const PORT = 8080;

app.engine("handlebars", hbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/", function(req, res) {
    res.render("home", {
        title: "Czat grupowy",
        styles: [
            "bootstrap.css",
            "style.css"
        ],
        scripts: [
            "jquery.js",
            "handlebars.js",
            "socket.io.js",
            "chat.js"
        ]
    });
});

server.listen(PORT, function() {
    console.log("Server has been started on  http://localhost:" + PORT);
});