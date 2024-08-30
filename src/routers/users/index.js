const express = require("express");
const { LoginController, getTTSV } = require("../../controller/users");
const { addNewStudent } = require("../../controller/sinhvien");
const router = express.Router();

router.post("/login", LoginController);
router.get("/ttsv", getTTSV);
router.post("/addNewSinhvien", addNewStudent);
module.exports = router;