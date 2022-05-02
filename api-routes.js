const express = require('express')

const router = express.Router()


router.route('/').get((req, res) => {
    res.json({
        success: true,
        message: "This is api routing"
    })
})


router.route('/profile').get( async (req, res) => {
    res.json({
        success: true,
        message: "This is for profile node"
    }, 200)
})



module.exports = router