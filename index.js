const express = require('express'); // เป็น Framework จัดการหลังบ้านหมดเลย ex ส่งข้อมูลไปหน้าต่างๆรับข้อมูลมา
//const db = require("./config/db.js");
const user = require("./routes/router.js")
const app = express();

app.use(express.json());
app.use("/" , user);
app.listen(3000,()=> console.log("server run on port 3000"));