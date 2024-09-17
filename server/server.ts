import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.disable("x-powered-by");

// ROUTES

app.get("/", (req, res) => {
  return res.status(200).json("Hello.");
});

export default app;
