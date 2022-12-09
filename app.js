require("dotenv");

const express = require("express");
const app = express();

console.log("새기능");

console.log("리셋 하고 새로 만드는 기능");

app.listen(3000, () => {
    console.log(`http://localhost:3000`);
});
