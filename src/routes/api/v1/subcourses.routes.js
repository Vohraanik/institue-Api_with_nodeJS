const express = require("express")
const route = express.Router()
const {subCoursescontroller} = require("../../../controller")

route.get(
    '/listsubCourse',
    subCoursescontroller.listSubCourses
  )
  
  route.post(
    '/addsubCourse',
    subCoursescontroller.addSubCourses
  )
    
  route.put(
    '/updatesubCourse/:Course_id',
    subCoursescontroller.updateSubCourses
    )
    
  route.delete(
    '/deletesubCourse/:Course_id',
    subCoursescontroller.deleteSubCourses 
    )
  
  module.exports = route