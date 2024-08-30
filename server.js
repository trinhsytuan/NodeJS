//Khai báo thư viện ExpressJS
const express = require('express')
const app = express()
const usersRouter = require("./src/routers/users/index");
var cors = require("cors"); // Khai báo thư viện cors


app.use(express.json()); // Để xử lý dữ liệu JSON
app.use(express.urlencoded({ extended: true })); // Để xử lý dữ liệu URL-encoded
app.use(cors({ credentials: true, origin: "*" })); //Chấp thuận cors từ mọi URL

const connection = require('./src/config/database');
async function main() {
    try {
        await connection();
        app.use('/api', usersRouter);
        app.listen(3000, () => {
            console.log("CHương trinh đang khởi chạy");
            
        });
    } catch (error) {
        console.log(">>>> Error Connect to DB:", error);
        console.log("Server Error, please contact TServices");
        process.exit();
    }
}
main();


