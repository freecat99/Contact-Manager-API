const express = require('express')
const router = express.Router();

router.route('/').get((req, res)=>{
    res.status(200).json({"message" : "get all contacts"})
});

router.route('/').post((req, res)=>{
    const contact = req.body;
    res.status(201).json({"message":"created contact"})
})

module.exports = router