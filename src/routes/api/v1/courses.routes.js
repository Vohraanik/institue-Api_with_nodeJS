const express = require("express")
const route = express.Router()
const {coursescontroller} = require("../../../controller")

route.get(
    '/listCourse',
    coursescontroller.listCourses
  )
  
  route.post(
    '/addCourse',
    coursescontroller.addCourses
  )
    
  route.put(
    '/updateCourse/:Course_id',
    coursescontroller.updateCourses 
    )
    
  route.delete(
    '/deleteCourse/:Course_id',
    coursescontroller.deleteCourses 
    )
  
  module.exports = route