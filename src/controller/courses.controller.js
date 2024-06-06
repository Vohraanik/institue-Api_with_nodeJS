const Courses = require("../model/courses.model")
const {param} =  require("../routes/api/v1/courses.routes")


const listCourses = async (req, res) => {
    try {
        const coursies = await Courses.find();
        

        if (!coursies || coursies.length === 0) {
            res.status(404).json({
                success: false,
                message: "Courses not found"
            });
            
        }

        res.status(200).json({
            success: true,
            message: "Courses found",
            data: coursies
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error" + error.message
        });
    }
}

const addCourses = async (req, res) => {
    try {
        console.log(req.body);
    
        const newCourses = await Courses.create(req.body);
        console.log(newCourses);
        
        if (!newCourses) {
          res.status(400).json({
            success: false,
            message: "failed to added Courses"
          });
        }
        res.status(201).json({
          success: true,
          message: "Courses added successfully",
          data: newCourses,
        });
        
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Internal server error: " + error.message,
        });
      }
}

const updateCourses = async (req, res) => {
    try {
      
        const updatedCourses = await Courses.findByIdAndUpdate(req.params.Course_id,req.body,{ new: true, runValidators: true});
    
        if (!updatedCourses) {
           res.status(404).json({
            success: false,
            message: "Courses not found",
          });
        }
    
        res.status(200).json({
          success: true,
          message: "Courses updated successfully",
          data: updatedCourses,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Internal server error: " + error.message,
        });
      }
}

const deleteCourses = async (req, res) => {
    try {
        console.log("sadsad",req.params);
        const courses = await Courses.findByIdAndDelete(req.params.Course_id);
        console.log(courses);
    
        if (!courses) {
           res.status(404).json({
            success: false,
            message: "Courses not found",
          });
        }
    
        res.status(200).json({
          success: true,
          message: "Courses deleted successfully",
          data: courses,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Internal server error: " + error.message,
        });
      }
}

module.exports = {
    listCourses,
    addCourses,
    updateCourses,
    deleteCourses
}