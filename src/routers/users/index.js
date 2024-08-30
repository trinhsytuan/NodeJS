const express = require("express");
const { LoginController, getTTSV } = require("../../controller/users");
const { addNewStudent, getAllStudent } = require("../../controller/sinhvien");
const router = express.Router();

router.post("/login", LoginController);
router.get("/ttsv", getTTSV);
router.post("/addNewSinhvien", addNewStudent);
router.get("/getAllSinhvien", getAllStudent);
module.exports = router;