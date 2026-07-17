require("dotenv").config();
const historyRoutes = require("./routes/historyRoutes");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");
const authRoutes = require("./routes/authRoutes");
const app = express();

const analyzerRoutes = require("./routes/analyzerRoutes");

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/history", historyRoutes);
app.use(
    "/api/analyzer",
    analyzerRoutes
);

// MongoDB Connection
mongoose
  .connect(
    "mongodb://divyapathakji06_db_user:divya1234@ac-3kiuxot-shard-00-00.xbdmkzz.mongodb.net:27017,ac-3kiuxot-shard-00-01.xbdmkzz.mongodb.net:27017,ac-3kiuxot-shard-00-02.xbdmkzz.mongodb.net:27017/?ssl=true&replicaSet=atlas-qliqed-shard-0&authSource=admin&appName=Cluster0"
  )
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log("MongoDB Error:", err);
  });

// Test Route
app.get("/", (req, res) => {
  res.send("Fake News Detector Backend Running");
});

// AI Route (Calls Flask)
app.post("/api/analyze", async (req, res) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:5001/predict",
      {
        news: req.body.news,
      }
    );

    res.json(response.data);

  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: "Prediction failed",
    });
  }
});

const PORT = 5001;
app.get("/api/test", (req, res) => {
  res.send("Backend Working");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


