const express = require("express");

const router = express.Router();


const {

    analyzeNews,

    getHistory,

    getDashboard

} = require("../controllers/analyzerController");



const authMiddleware =
require("../middleware/authMiddleware");




// Analyze

router.post(
"/analyze",
authMiddleware,
analyzeNews
);



// History

router.get(
"/history",
authMiddleware,
getHistory
);



// Dashboard

router.get(
"/dashboard",
authMiddleware,
getDashboard
);



module.exports = router;