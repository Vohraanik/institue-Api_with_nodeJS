const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema(
    {
       course_name: {
            type: String,
            trim: true,
            lowercase: true,
            require: true,
            unique: true
        },
        description: {
            type: String,
            trim: true,
            lowercase: true,
            require: true
        }, 
        is_active: {
            type: Boolean,
            default: true
        }
    }, {
        timestamps: true,
        versionKey: false
    }
)

const Courses = mongoose.model('Courses' , courseSchema);
module.exports = Courses;