const express = require("express");
const app = express();
const cors = require("cors");
require("./models/config");
const topicSchema = require("./models/topic");
const userSchema = require("./models/user");
const { body, validationResult } = require("express-validator");
const answerSchema = require("./models/ans")
app.use(express.json());
app.use(cors());
app.post("/success", async (req, res) => {
  try {
    let sub = new topicSchema(req.body);
    console.log(req.body);
    let result = await sub.save();

    if (result) {
      res.status(201).send({ message: "success" });
    } else {
      res.status(500).send({ message: "Internal Server Error" });
    }
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

app.get("/success/:category", async (req, res) => {
  let list = await topicSchema.find({ category: req.params.category });
  if (list) {
    res.send(list);
  }
});

app.get("/details/:email", async (req, res) => {
  let list = await topicSchema.find({ email: req.params.email });
  if (list) {
    res.send(list);
  }
});

app.post(
  "/signup",
  [body("email").isEmail(), body("password").isLength({ min: 7 })],
  async (req, res) => {
    try {
      let user = new userSchema(req.body);
      let userCheck =await  userSchema.findOne({email : req.body.email})
      const errors = validationResult(req);
      if(userCheck){
        res.status(500).send({message : "Email already exist"})
      }
      else{
      if (!errors.isEmpty()) {
        return res.status(400).send({message: "Enter email and password correctly" });
      } else {
        let result = await user.save();
        if (result) {
          res.status(201).send({ message: "success" });
        } else {
          res.status(500)
        }
      }
    }
    } catch (error) {
      console.error("Error saving data:", error);
      res.status(500).send({ message: "Internal Server Error" });
    }
  }
);



app.post('/login', async (req, res) => {
  try {
    const user = await userSchema.findOne({ email: req.body.email });

    if (user) {
      if (user.password === req.body.password) {
        res.status(200).send({ message: "success" });
      } else {
        res.status(500).send({ message: "Incorrect password" });
      }
    } else {
      res.status(500).send({ message: "Email not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
});

app.delete("/del/:id",async (req,res)=>{
  let result = await topicSchema.deleteOne({_id:req.params.id});
  res.send(result)
})

app.get('/profile/:email',async (req,res)=>{
  let result = await userSchema.findOne({email : req.params.email})
  res.send(result)
})

app.get("/blog", async (req, res) => {
  
    const list = await topicSchema.find({});

    if (list.length > 0) {
      res.send(list);
    } else {
      res.status(404).send("No topics found"); 
    }
  })

app.get("/solution/:id", async (req, res) => {
  let list = await topicSchema.find({ _id: req.params.id });
  if (list) {
    res.send(list);
  }
});

app.post('/ans',async (req,res)=>{
  let answers = new answerSchema(req.body)
  try{
    let result = await answers.save()
    if(result){
      res.send({messgae : "success"})
    }
  }
  catch(error){
    res.send(error)
  }
})

app.get('/ans/:id' , async (req,res) =>{
  let result = await answerSchema.find({id : req.params.id})
  res.send(result)
})

app.delete("/ans/:id",async (req,res)=>{
  let result = await answerSchema.deleteOne({_id:req.params.id});
  res.send(result)
})

app.get("/sol/:email", async (req, res) => {
    let list = await answerSchema.find({ email: req.params.email });
    if (list) {
      res.send(list);
    }
  });

app.listen(5000, () => {
  console.log("Running at port 5000");
});
