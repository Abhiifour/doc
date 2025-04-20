"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const dbURI = process.env.DATABASE_URL || "mongodb://localhost:27017/defaultdb";
mongoose_1.default.connect(dbURI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));
// Define schema
const Schema = mongoose_1.default.Schema;
const User = new Schema({
    name: String,
    password: String,
});
// Compile model from schema
const SomeModel = mongoose_1.default.model("User", User);
app.get("/", (req, res) => {
    res.json({
        "message": "Hello World!"
    });
});
app.post("/", (req, res) => {
    res.json({
        "message": "Hello World!"
    });
});
app.listen(3000, () => {
    console.log("server running on port 3000");
});
