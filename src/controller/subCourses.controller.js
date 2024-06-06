const SubCourses = require("../model/subCourses.model");

const listSubCourses = async (req, res) => {
    try {
        const subcoursies = await SubCourses.find();
        

        if (!subcoursies || subcoursies.length === 0) {
            res.status(404).json({
                success: false,
                message: "SubCourses not found"
            });
            
        }

        res.status(200).json({
            success: true,
            message: "SubCourses found",
            data: subcoursies
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error" + error.message
        });
    }
}

const addSubCourses = async (req, res) => {
    try {
        console.log(req.body);
    
        const newSubCourses = await SubCourses.create(req.body);
        
        if (!newSubCourses) {
          res.status(400).json({
            success: false,
            message: "failed to added SubCourses"
          });
        }
        res.status(201).json({
          success: true,
          message: "SubCourses added successfully",
          data: newSubCourses,
        });
        
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Internal server error: " + error.message,
        });
      }
}

const updateSubCourses = async (req, res) => {
    try {
        const updatedSubCourses = await SubCourses.findByIdAndUpdate(req.params.SubCourses_id,req.body,{ new: true, runValidators: true});
    
        if (!updatedSubCourses) {
           res.status(404).json({
            success: false,
            message: "SubCourses not found",
          });
        }
    
        res.status(200).json({
          success: true,
          message: "SubCourses updated successfully",
          data: updatedSubCourses,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Internal server error: " + error.message,
        });
      }
}

const deleteSubCourses = async (req, res) => {
    try {
        console.log(req.params.SubCourses_id);
        const SubCourses = await SubCourses.findByIdAndDelete(req.params.SubCourses_id);
    
        if (!SubCourses) {
           res.status(404).json({
            success: false,
            message: "SubCourses not found",
          });
        }
    
        res.status(200).json({
          success: true,
          message: "SubCourses deleted successfully",
          data: SubCourses,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Internal server error: " + error.message,
        });
      }
}

module.exports = {
    listSubCourses,
    addSubCourses,
    updateSubCourses,
    deleteSubCourses
}