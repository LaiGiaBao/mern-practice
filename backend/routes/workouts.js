const express = require("express");

const router = express.Router();

//GET all workout
router.get("/", (req, res) => {
  res.json({ mssg: "GET all workout" });
});

//GET a workout
router.get("/:id", (req, res) => {
  res.json({ mssg: "GET a single workout" });
});

//POST a new workout
router.post("/", (req, res) => {
  res.json({ mssg: "POST a new workout" });
});

//DELETE a workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: "POST a new workout" });
});

//UPDATE a workout
router.patch("/", (req, res) => {
  res.json({ mssg: "UPDATE a new workout" });
});
module.exports = router;
