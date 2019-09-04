const router = require("express").Router()
const User = require('../src/models/User')
const Device = require('../src/models/Device')
//******* USER ROUTES **********//

router.get("/", (req, res) => {
  res.send("welcome to my app")
});

//route to create a user
router.post("/user/create", (req, res) => {
  new User({
    firstName: req.body.data.firstName,
    lastName: req.body.data.lastName,
    type: (req.body.data.type).toLowerCase(),
    location: req.body.data.location,
    id: req.body.data.id,
    floor: req.body.data.floor
  }).save()
    .then(doc => {
      if (res.status(200)) {
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
