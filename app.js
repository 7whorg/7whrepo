require("dotenv");

const express = require("express");
const app = express();

console.log("새기능");

console.log("새 브랜치");

app.listen(3000, () => {
    console.log(`http://localhost:3000`);
});
