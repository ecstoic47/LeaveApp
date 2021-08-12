const router = require("express").Router();
const LeaveRem = require("../models/leaveRem");

//Instertion to DB



router.post("/insert", async (req, res) => {
  try {
    const name = req.body.username;
    const newItem = new LeaveRem({
      username: name.toLowerCase(),
      annualLeaveTaken: req.body.annualLeaveTaken,
      casualLeaveTaken: req.body.casualLeaveTaken,
      sickLeaveTaken: req.body.sickLeaveTaken,
      annualLeaveRem: req.body.annualLeaveRem,
      casualLeaveRem: req.body.casualLeaveRem,
    });
    const item = await newItem.save();
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json(err);
  }
});



router.get("/retrieve/:name", async (req, res) => {
  const name = req.params.name;
  try {
    const info = await LeaveRem.find({ username: name });
    console.log(info);
    res.status(200).json(info);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
