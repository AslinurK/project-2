const isAuthenticated = require("../config/passport/isAuthenticated.js");
const htmlQueries = require("../controllers/htmlController");
const db = require("../models");

module.exports = function(app) {

    // blueit home page (logged in)
    app.get("/blueit", isAuthenticated, (req, res) => {
        htmlQueries.findAllPosts()
        .then(function(dbPosts) {
            res.render("blueit", {
                posts: dbPosts,
                findPosts: true,
                loggedIn: true,
                userName: req.user.UserName
            });
        });
    });


};