const express = require('express');
const mongoose = require ('mongoose');
const authRoute = require ('./routes/auth');
const usersRoute = require ('./routes/users');
const leaveRemsRoute = require ('./routes/leaveRems');
const leaveinfoRoute = require ('./routes/leaveInfo');



const app = express();
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
  });


  

  mongoose.connect("mongodb://localhost:27017/leaveDB", {

  useUnifiedTopology: true,

  useNewUrlParser: true,

  useCreateIndex: true
 
})
.then(console.log("Assalamualaikum Boss, your app is connected to MongoDB"))
.catch(err => console.log(err)); 



app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/leaveRems", leaveRemsRoute);
app.use("/api/leaveInfo", leaveinfoRoute);



app.listen(process.env.PORT || 5000, function(){
    console.log("This sever is running on port 5000");
}); 