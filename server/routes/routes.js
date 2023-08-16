const addAdmin = require("../controllers/addAdmin")
const addCustomers = require("../controllers/addCustomers")
const addEmployee = require("../controllers/addEmployee")
const addRoom = require("../controllers/addRooms")
const loginAdmin = require("../controllers/adminLoginController")
const deleteAdmin = require("../controllers/deleteAdmin")
const deleteEmployee = require("../controllers/deleteEmployeeByIdController")
const deleteRoom = require("../controllers/deleteRooms")
const getAdmin = require("../controllers/viewAdmins")
const getEmployees = require("../controllers/viewEmployees")
const getRooms = require("../controllers/viewRooms")
const verifyToken = require("../middlewares/jwtAuth")
const upload = require("../middlewares/multer")
const mailer = require("../middlewares/nodemailer")
const pasDel = require('../controllers/chanPass')
const {checkin} = require('../controllers/checkin')
const {admincheck} = require('../controllers/checkin')

const express = require("express")
const route = express.Router()

route.post("/superAdmin/addAdmin", addAdmin, mailer)

route.post("/employee/addEmployee", upload.single("file") , addEmployee)

route.get("/rooms", verifyToken, getRooms)

route.delete("/rooms/:id", deleteRoom)

route.get("/superAdmin/viewAdmins", getAdmin)

route.delete("/superAdmin/viewAdmins/:_id", deleteAdmin)

route.post("/login", loginAdmin)

route.post("/admin/customers/addCustomer", verifyToken, addCustomers)

route.post("rooms/addRooms", verifyToken, upload.array("images", 8), addRoom)

route.get("/admin/viewEmployees", getEmployees)

route.delete("/admin/viewEmployees/:_id", deleteEmployee)

route.put('/passChange', pasDel)

route.post('/checked', checkin)

route.get('/checked', admincheck)




module.exports = route