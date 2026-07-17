import { useState } from "react";
import API from "../api/axios";

export default function Analyzer() {

  const [newsText, setNewsText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);


  const analyzeNews = async () => {

    if (!newsText.trim()) {
      alert("Please enter news.");
      return;
    }


    try {

      setLoading(true);


      const res = await API.post("/predict", {

        news: newsText

      });



      setResult(res.data);



    } catch (error) {


      console.log(error);


      alert(
        error.response?.data?.message ||
        "Analysis Failed"
      );


    } finally {

      setLoading(false);

    }

  };



  return (

    <div
      style={{
        maxWidth:"900px",
        margin:"50px auto",
        padding:"30px"
      }}
    >


      <h1
        style={{
          textAlign:"center",
          marginBottom:"30px"
        }}
      >
        AI Fake News Analyzer
      </h1>



      <textarea

        value={newsText}

        onChange={(e)=>setNewsText(e.target.value)}

        placeholder="Paste News Here..."

        style={{

          width:"100%",

          height:"220px",

          padding:"15px",

          fontSize:"16px",

          borderRadius:"10px"

        }}

      />



      <button

        onClick={analyzeNews}

        style={{

          marginTop:"20px",

          padding:"15px 35px",

          background:"#2563eb",

          color:"#fff",

          border:"none",

          borderRadius:"10px",

          cursor:"pointer",

          fontSize:"17px"

        }}

      >

        {loading ? "Analyzing..." : "Analyze News"}

      </button>




      {result && (

        <div

          style={{

            marginTop:"40px",

            padding:"20px",

            background:"#f8fafc",

            borderRadius:"10px"

          }}

        >

          <h2>Prediction</h2>


          <h3>
            {result.prediction}
          </h3>


          <h3>
            Confidence : {result.confidence}
          </h3>


        </div>

      )}


    </div>

  );

}