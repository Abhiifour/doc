import express from "express"
// import mongoose from "mongoose"
import { PrismaClient } from "@prisma/client"

const app = express()

    
// const dbURI: string = process.env.DATABASE_URL || "mongodb://mongodb:27017/defaultdb";

// mongoose.connect(dbURI)
// .then(() => console.log('Connected to MongoDB'))
// .catch(err => console.error('MongoDB connection error:', err));


// const Schema = mongoose.Schema;

// const User = new Schema({
//   name: String,
//   password: String,
// });

// // Compile model from schema
// const UserModel = mongoose.model("User", User);

const prisma = new PrismaClient()






app.get("/",async (req,res) => {
    try {
        // const data = await UserModel.find()
        // res.json({
        //     data
        // })
        const data = await prisma.user.findMany()
        res.json({
            data
        })
    } catch (error) {
        console.log(error)
    }
    res.json({
        "message":"user not found"
    })
}) 

app.post("/", async (req,res) => {
    try {
        // const user = new UserModel({
        //     name: Math.random(),
        //     password: Math.random()
        // })
        // user.save()

        const user = await prisma.user.create({
            data:{
                username:Math.random().toString(),
                password:Math.random().toString()
            }
        })
    } catch (error) {
        console.log(error)
    }
    res.json({
        "message":"user added"
    })
})

app.listen(3000,() => {
    console.log("server running on port 3000")
})


