const express = require("express")
const { getAllStudent, createNewStudent, updateStudent, deleteStudent, getOneStudent } = require("../controllers/stdController")

const router = express.Router()

router.route("/").get(getAllStudent).post(createNewStudent)
router.route("/:id").patch(updateStudent).delete(deleteStudent).get(getOneStudent)

module.exports = router