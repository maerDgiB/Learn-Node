const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  // const baiji = {name:"baiji",age:21,"cool":true}
  // res.send('Hey! It works!');
  // res.json(baiji)
  res.render("hello")
});

// 
router.get("/resverse/:name",(req,res)=>{
    const resverse = [... req.params.name].reverse().join("")
    res.send(resverse)
})

module.exports = router;
