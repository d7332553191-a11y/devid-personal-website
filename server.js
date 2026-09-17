const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Devid AI Helper is running!");
});

app.post("/ask", (req, res) => {
    const question = req.body.question || "";

    res.json({
        answer: "You asked: " + question
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
