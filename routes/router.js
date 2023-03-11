const express = require('express');
const db = require("../config/db.js");
const router = express.Router(); // ฟังก์ชั่นเราเตอร์เป็นฟังชั่นไว้เรียกเส้นทาง
const app = express(); //
app.use(express.json); // ตั้งไว้ว่าการส่งข้อมูลเป็น JSON คือการแปลง OBJECT เป็น JSON

// Get หน้าที่ ดูหนังสือทั้งหมด 
router.get("/user",(req,res) => { 
    db.all("SELECT * FROM user" , (error,row)=>{
        if (error) {
            res.status(500).send(error);
        } else {
            res.status(200).send(row);
        }
    })
});

// POST หน้าที่ ไว้เพิ่มหนังสือ 
router.post("/user",(req,res) => {
    const value = req.query;
    db.run("INSERT INTO user (name,email,password,status) VALUES (?,?,?,?)" , 
    value.name , value.email , value.password, value.status,
    function(err) {
        if(err){
            res.status(500).send(err)
        }else {
            value.id = this.lastID;
            res.status(200).send(value);
        }
    })
});

//PUT หน้าที่ UPDATE ข้อมูล (แก้เฉพาะหน้าที่เราต้องการเลือก) 
router.put("/user/:id" , (req, res) => {
    const value = req.query;
    db.run("UPDATE user SET name = ?, email = ?, password = ? , status = ? , WHERE id = ?" ,
    value.name, value.email,value.password,value.status,req.params.id, function(err){
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(value);
        }
    })
});

//router.post("/user",(req,res) => {
  //  console.log(req.query.id);
    //console.log(req.query.name);
    //console.log(req.query.password);
    //console.log(req.query.email); 
    //console.log(req.query.ststus);
    //res.end(); //ต้องมี
//});

    
    

module.exports = router;