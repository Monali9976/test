const express = require("express");
require("./db/conn");
const MensRanking = require("./models/mens");
const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());

// using async-await 
app.post("/mens", async (req, res) => {

    try {
        const user = new MensRanking(req.body);

        const insertMens = await user.save();
        res.status(201).send(insertMens);
    }
    catch (e) {
        res.status(400).send(e);
    }
})

//read the data of registered Students
app.get("/mens", async (req, res) => {

    try {
        const getMens = await MensRanking.find();      
        res.status(201).send(getMens);
    }
    catch (e) {
        res.status(400).send(e);
    }
})


//get the individual Student data using id
app.get("/mens/:id",async(req,res)=>{
    try{
        const _id= req.params.id;
        const getMensData=await MensRanking.findById({_id});

        if(!getMensData){
            return res.status(404).send();
        }
        else{
            res.send(getMensData);
        }
        res.send(getMensData);
    }
    catch(e){
        res.status(500).send(e);
    }
})

//update the students bu it id
app.patch("/mens/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const updateMens=await MensRanking.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        res.send(updateMens);
    }
    catch(e){
        res.status(400).send(e);
    }
})

app.listen(port, () => {
    console.log(`connection is setup Sucessfully at port ${port}.`)
});