const { sinhvienDB } = require("../../models/sinhvien")


const addNewStudent = async (req, res) => {
    const { masv, tensv, namsinh, quequan } = req.body;
    const sinhVienResponse = await sinhvienDB.create(
        { masv, tensv, namsinh, quequan }
    );
    return res.status(200).json(sinhVienResponse);
}

const getAllStudent = async(req, res) => {
    const allStudent = await sinhvienDB.find({});
    return res.status(200).json(allStudent);
}
module.exports = {
    addNewStudent,
    getAllStudent
}