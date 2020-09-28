const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", async function (req, res) {
  try {
    const hbsObject = { burgers: burger.selectAll() };
  console.log(hbsObject);
  res.render("index", hbsObject);
  } catch (error) {
    console.error(err);
    res.status(500).json(err);
  }
  
});

router.post("/api/burgers", async function (req, res) {
  console.log(req.body);
  try {
    const result = await burger.create(
      ["burger_name", "devoured"],
      [req.body.name, req.body.devoured]
    );
    
    res.json({ id: result.insertId });;
  }
  catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.put("/api/burgers/:id", async function (req, res) {
  const condition = "id = " + req.params.id;
  try {
    const result = await burger.update({ devoured: 1 }, condition);
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  }
  catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.delete("/api/burgers/:id", async function (req, res) {
  const condition = "id = " + req.params.id;

  try {
    const result = await burger.delete(condition)
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  }
  catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;