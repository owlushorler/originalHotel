const admin = require("../models/adminSchema")

const updateAdmin = async (req, res) => {
    // const {error, value} = req.body
    const check = req.body
    console.log(check)
    try {
        const getAdmin = await admin.findOne(check.oldUsername)
        console.log(getAdmin)
        if(!getAdmin) return res.status(400).json("invalid username")
        const upAdmin = await admin.updateOne(check.oldUsername, {$set: {username: check.newUsername, password: check.newPassword}})
        console.log(upAdmin)
        return res.status(200).json("Credentials successfully updated")

    } catch (error) {
        res.status(400).json("error updating credentials")
    }
}

module.exports = updateAdmin