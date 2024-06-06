const express = require("express")
const route = express.Router()

const courseRouter = require("./courses.routes")
const subCourseRouter = require("./subcourses.routes")



route.use("/courses", courseRouter)
route.use("/subCourse", subCourseRouter)

module.exports = route