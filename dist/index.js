"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import mongoose from "mongoose"
const client_1 = require("@prisma/client");
const app = (0, express_1.default)();
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
const prisma = new client_1.PrismaClient();
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const data = await UserModel.find()
        // res.json({
        //     data
        // })
        const data = yield prisma.user.findMany();
        res.json({
            data
        });
    }
    catch (error) {
        console.log(error);
    }
    res.json({
        "message": "user not found"
    });
}));
app.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const user = new UserModel({
        //     name: Math.random(),
        //     password: Math.random()
        // })
        // user.save()
        const user = yield prisma.user.create({
            data: {
                username: Math.random().toString(),
                password: Math.random().toString()
            }
        });
    }
    catch (error) {
        console.log(error);
    }
    res.json({
        "message": "user added"
    });
}));
app.listen(3000, () => {
    console.log("server running on port 3000");
});
