const mongoose = require('mongoose');

const subCourseSchema = new mongoose.Schema(
    {
        name: {
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
        durestion: {
            type: String,
            trim: true,
            lowercase: true,
            require: true,
            unique: true
        },
        fees: {
            type: Number,
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

const subCourses = mongoose.model('subCourses' , subCourseSchema);
module.exports = subCourses;