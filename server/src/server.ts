import express from "express";

const app = express();

app.route("/api").get((_req, res) => {
  res.send("Hello");
});

app.listen(3333, () => {
  console.log(`Server is running on http://localhost:${3333}`);
});
