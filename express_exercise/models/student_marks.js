const mongoose = require("mongoose");

const studentMarks = new mongoose.Schema({
    "name" : {
        type: String,
        required: true
    },
    "roll_number" : {
        type : Number,
        required : true
    },
    "wad_marks" : {
        type : Number,
        required : true
    },
    "cc_marks" : {
        type : Number,
        required : true
    },
    "dsbda_marks" : {
        type : Number,
        required : true
    },
    "cns_marks" : {
        type : Number,
        required : true
    },
    "AI_marks" : {
        type : Number,
        required : true
    }
});

const StudentMarks = module.exports = mongoose.model(
    "StudentMarks", 
    studentMarks
);