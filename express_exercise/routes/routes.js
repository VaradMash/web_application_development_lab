const express = require("express");
const router = express.Router();

// Internal imports
const StudentMarks = require("../models/student_marks");

router.get("/hi/:username/:email", (req, res, next) => {
    // Dummy route
    console.log("Hit Get for URL : " + req.url);
    console.log(req.params.username);
    console.log(req.params.email);
    res.send("Hello " + req.params.username + " email " + req.params.email);
});

router.post("/add_student", (req, res, next) => {
    console.log(req.body);
    let new_student = new StudentMarks({
        name : req.body.name,
        roll_number : req.body.roll_number,
        wad_marks : req.body.wad_marks,
        cc_marks : req.body.cc_marks,
        cns_marks : req.body.cns_marks,
        dsbda_marks : req.body.dsbda_marks,
        AI_marks : req.body.AI_marks,
    })

    new_student.save((err, response) => {
        if(err) throw err;
        res.send("<h1>New Entry added !</h1>");
    })
});

router.get("/filter_marks/:marks_filter", (req, res, next) => {
    let marks_filter = req.params.marks_filter;
    StudentMarks.find({
        wad_marks : { $gt : marks_filter },
        cc_marks : { $gt : marks_filter },
        cns_marks : { $gt : marks_filter },
        dsbda_marks : { $gt : marks_filter },
        AI_marks : { $gt : marks_filter }
    }, (err, response) => {
        if (err)
        {
            res.json({
                "message" : "Could not get documents",
                "status" : 400,
                "data" : []
            });
        }
        else
        {
            let arr = [];
            response.forEach(element => {
                arr.push({
                    name : element.name,
                    roll_number : element.roll_number,
                    cc_marks : element.cc_marks,
                    wad_marks : element.wad_marks,
                    AI_marks : element.AI_marks,
                    cns_marks : element.cns_marks,
                    dsbda_marks : element.dsbda_marks,
                })
            })
            let title = "List of all students having marks > " + marks_filter + " in all subjects";
            res.render("student_table", {
                data:arr,
                title: title
            })
        }
    })
});

router.get("/get_all_students", (req, res, next) => {
    StudentMarks.find((err, response) => {
        if (err)
        {
            res.json({
                "message" : "Could not get documents",
                "status" : 400,
                "data" : []
            });
        }
        else
        {
            let arr = [];
            response.forEach(element => {
                arr.push({
                    name : element.name,
                    roll_number : element.roll_number,
                    cc_marks : element.cc_marks,
                    wad_marks : element.wad_marks,
                    AI_marks : element.AI_marks,
                    cns_marks : element.cns_marks,
                    dsbda_marks : element.dsbda_marks,
                })
            })
            res.render("student_table", {
                data:arr,
                title: "List of all students"
            })
        }
    })
});



module.exports = router;