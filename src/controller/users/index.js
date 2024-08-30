
function LoginController(req, res) {
    const { username, password } = req.body;
    if (username == "Admin" && password == "123") {
        return res.status(200).json({
            success: true,
            message: "Login OK"
        })
    }
    return res.status(200).json({
        success: false,
        message: "Login Failer!"
    })
}

function getTTSV(req, res) {
    return res.status(200).json({
        name: "Trịnh Sỹ Tuấn",
        age: 20,
        job: "Lecture"
    })
}
module.exports = {
    LoginController,
    getTTSV
};