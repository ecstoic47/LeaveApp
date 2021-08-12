const router = require("express").Router();

const LeaveInfo = require("../models/leaveInfo");

router.post("/", async (req, res) => {
  try {
    const newLeave = new LeaveInfo({
      applicant: req.body.applicant,
      fullname: req.body.fullname,
      designation: req.body.designation,
      department: req.body.department,
      leaveType: req.body.type,
      startDate: req.body.start,
      endDate: req.body.end,
      duration: req.body.duration,
      reason: req.body.reason,
      location: req.body.location,
      contact: req.body.contact,
      approver: req.body.approver,
    });
    const leave = await newLeave.save();
    res.status(200).json(leave);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/user/:name", async (req, res) => {
  const name = req.params.name;
  console.log(name);
  try {
    const info = await LeaveInfo.find({ applicant: name });
    res.status(200).json(info);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/approver/:name", async (req, res) => {
  const name = req.params.name;
  console.log(name);
  try {
    const info = await LeaveInfo.find({ approver: name, status:"In approval" });
    res.status(200).json(info);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/accept/:id", async(req, res)=>{
  const iremarks = req.body.remarks
  const id = req.params.id;
  try{
    const info = await LeaveInfo.updateOne({_id:id},{$set: {status:"Approved", remarks: iremarks}});
    res.status(200).json(info);
  }

  catch(err){
    res.status(500).json(err);
  }
});

router.put("/reject/:id", async(req, res)=>{
  const id = req.params.id;
  const iremarks = req.body.remarks;
  try{
    const info = await LeaveInfo.updateOne({_id:id},{$set: {status:"Rejected", remarks:iremarks}});
    res.status(200).json(info);
  }
  catch(err){
    res.status(500).json(err);
  }
});

module.exports = router;
