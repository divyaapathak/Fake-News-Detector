import { useState } from "react";
import API from "../api/axios";


export default function Analyzer(){


const [news,setNews]=useState("");

const [result,setResult]=useState(null);

const [loading,setLoading]=useState(false);



const analyzeNews = async()=>{


try{


setLoading(true);


const res = await API.post(

"/analyzer/analyze",

{
newsText: news
}

);



setResult(res.data.result);



}

catch(error){

console.log(error);

alert(
"Analysis failed"
);

}


finally{

setLoading(false);

}


};



return(

<>

<style>{`

.analyzer-page{

min-height:calc(100vh - 80px);

padding:60px 100px;

background:
linear-gradient(
135deg,
#020617,
#1e3a8a
);

}



.analyzer-box{

max-width:900px;

margin:auto;

background:white;

padding:40px;

border-radius:30px;

}



.analyzer-box textarea{

width:100%;

height:220px;

padding:20px;

border-radius:20px;

font-size:16px;

}



.analyze-btn{

margin-top:25px;

width:100%;

padding:15px;

border:none;

border-radius:30px;

background:#38bdf8;

font-size:18px;

font-weight:bold;

cursor:pointer;

}



.result-card{

margin-top:30px;

padding:30px;

background:#020617;

color:white;

border-radius:20px;

text-align:center;

}



.confidence{

font-size:45px;

color:#22c55e;

font-weight:800;

}


`}</style>



<div className="analyzer-page">


<h1 style={{
color:"white",
textAlign:"center",
marginBottom:"30px"
}}>
AI News Analyzer
</h1>



<div className="analyzer-box">


<textarea

placeholder="Paste news here..."

value={news}

onChange={(e)=>setNews(e.target.value)}

/>



<button

className="analyze-btn"

onClick={analyzeNews}

disabled={loading}

>

{
loading
?
"Analyzing..."
:
"Analyze News"
}

</button>



{
result &&

<div className="result-card">


<h2>
🤖 AI Analysis
</h2>


<div className="confidence">

{result.confidence}%

</div>


<h3>

Prediction :
{result.prediction}

</h3>


</div>

}



</div>


</div>


</>

);

}