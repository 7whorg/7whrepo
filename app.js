require("dotenv");

const express = require("express");
const app = express();

console.log("새기능");

app.listen(3000, () => {
    console.log(`http://localhost:3000`);
});
