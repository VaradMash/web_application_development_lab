const express = require("express");
const router = express.Router();
const User = require("../models/user");

// Retrieve data
router.post("/user", (req, res, next) => {
    // Code to authenticate user 
    console.log("Username : " + req.body.username);
    User.findOne({"username": req.body.username}, function(err, result) {
        if(err) 
        {
            res.json({"message" : "not ok"});
        }
        else{
            res.json(result)
        }
    })    
});

router.get("/users", (req, res, next) => {
    User.find(function(err, result) {
        if (err) throw err;
        res.json(result);
    })
})

// Add user data to database
router.post("/register", (req, res, next) => {
    // Code to register user to application
    let new_user = new User({
        username: req.body.username,
        age: req.body.age,
        city: req.body.city,
        state: req.body.state,
        password: req.body.password  
    });

    new_user.save((err, response) => {
        if(err)
        {
            res.json({msg: "Failed to add contact"});
        }
        else
        {
            res.json({msg: "Contact added successfuly"});
        }
    })
});

router.post("/delete", (req, res, next) => {

    // Code to delete user from application
    User.deleteOne({username: req.body.username}, (err, result) => {
        if(err)
        {
            res.json({
                msg: "Failed to delete contact with username " + req.params.username,
                code: 404 
            });
        }
        else
        {
            res.json({
                msg: "Contact deleted successfuly",
                code: 200
            });
        }
    });
});

module.exports = router;