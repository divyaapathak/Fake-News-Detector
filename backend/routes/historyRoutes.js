const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const History = require("../models/History");

// Test Route
router.get("/test", (req, res) => {
  res.send("History Route Working");
});

// Save History
router.post("/save", async (req, res) => {
  try {
    console.log("Request Body:", req.body);

    const { userId, news, prediction, confidence } = req.body;

    if (!userId || !news || !prediction || !confidence) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({
        message: "Invalid User ID",
      });
    }

    const history = new History({
      userId,
      news,
      prediction,
      confidence,
    });

    await history.save();

    res.status(201).json({
      success: true,
      message: "History Saved Successfully",
      history,
    });

  } catch (error) {
    console.log("History Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Get User History
router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({
        message: "Invalid User ID",
      });
    }

    const history = await History.find({ userId }).sort({
      createdAt: -1,
    });

    res.json(history);

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;