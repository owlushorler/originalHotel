const addAdmin = require("../controllers/addAdmin")
const addCustomers = require("../controllers/addCustomers")
const addEmployee = require("../controllers/addEmployee")
const addRoom = require("../controllers/addRooms")
const loginAdmin = require("../controllers/adminLoginController")
const getAdmin = require("../controllers/viewAdmins")
const getRooms = require("../controllers/viewRooms")
const verifyToken = require("../middlewares/jwtAuth")
const upload = require("../middlewares/multer")

const express = require("express")
const route = express.Router()

route.post("/superAdmin/addAdmin", addAdmin)

route.post("/employee/addEmployee", verifyToken, upload.single("image") , addEmployee)

route.get("/rooms", verifyToken, getRooms)

route.delete("/rooms/:id", verifyToken)

route.get("/superAdmin/viewAdmins", verifyToken,  getAdmin)

route.delete("/superAdmin/viewAdmins/:id", verifyToken, )

route.post("/login", loginAdmin)

route.post("/admin/customers/addCustomer", verifyToken, addCustomers)

route.post("rooms/addRooms", verifyToken, upload.array("images", 8), addRoom)




module.exports = route