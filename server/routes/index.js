const router = require("express").Router()
const User = require('../src/models/User')
const Device = require('../src/models/Device')
//******* USER ROUTES **********//

router.get("/", (req, res) => {
  res.send("welcome to my app")
});

//route to create a user
router.post("/user/create", (req, res) => {
  let newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    type: req.body.type
  });

  newUser
    .save()
    .then(doc => {
      if (res.status(200)) {
        console.log("successfully added user")
        res.json(doc);
      }
    })
    .catch(err => console.log(err.stack))
});


//****** DEVICE ROUTES *********//

router.post("device/create",function(req, res){
  let device = new Device({
    name: req.body.name,
    serialNum: req.body.serialNum,
    id: req.body.id,
  })

  device
 .save()
 .then((data)=>{
  if (res.status(200)) {
    console.log("successfully added device")
    res.json(data);
  }
 }).catch((err)=>{
   console.log(err)
 })
  
})

module.exports = router
