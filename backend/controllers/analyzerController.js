const History = require("../models/History");


// Analyze News
exports.analyzeNews = async (req, res) => {

    try {

        const { newsText } = req.body;


        if (!newsText) {

            return res.status(400).json({
                message: "News text required"
            });

        }


        // Temporary Prediction
        const prediction =
            Math.random() > 0.5
            ? "REAL"
            : "FAKE";


        const confidence =
            Math.floor(Math.random() * 20 + 80);



        const history = await History.create({

            user: req.user.id,

            newsText,

            prediction,

            confidence

        });



        res.json({

            message:"Analysis completed",

            result:{
                prediction,
                confidence
            },

            history

        });


    } catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};




// Get History

exports.getHistory = async(req,res)=>{

    try{

        const history =
        await History.find({
            user:req.user.id
        })
        .sort({
            createdAt:-1
        });


        res.json(history);


    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};




// Dashboard Data

exports.getDashboard = async(req,res)=>{

    try{


        const history =
        await History.find({
            user:req.user.id
        });



        const totalNews =
        history.length;



        const realNews =
        history.filter(
            item=>item.prediction==="REAL"
        ).length;



        const fakeNews =
        history.filter(
            item=>item.prediction==="FAKE"
        ).length;



        let avgConfidence = 0;



        if(totalNews > 0){

            avgConfidence =
            history.reduce(
                (sum,item)=>
                sum + item.confidence,
                0
            ) / totalNews;

        }



        res.json({

            totalNews,

            realNews,

            fakeNews,

            avgConfidence:
            Math.round(avgConfidence)

        });



    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};