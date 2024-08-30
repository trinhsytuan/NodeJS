const { default: mongoose } = require("mongoose");
const sinhvienSchema = new mongoose.Schema(
    {
        masv: { type: String, require: true },
        tensv: { type: String, require: true, },
        namsinh: { type: Number, require: true },
        quequan: { type: String, require: true },
    },
    { timestamps: true }
);
const sinhvienDB = mongoose.model("sinhvien", sinhvienSchema);
module.exports = { sinhvienDB };