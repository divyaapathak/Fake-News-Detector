export default function History(){


const historyData=[

{
title:"NASA discovers water on Mars",
result:"REAL",
confidence:"96%",
date:"14 Jul 2026"
},

{
title:"Aliens landed in India",
result:"FAKE",
confidence:"91%",
date:"13 Jul 2026"
},

{
title:"India launches new satellite",
result:"REAL",
confidence:"94%",
date:"12 Jul 2026"
}

];



return(

<>


<style>{`

.history-page{

min-height:calc(100vh - 80px);

padding:60px 100px;

background:

linear-gradient(
135deg,
#020617,
#1e3a8a
);

}



.history-title{

text-align:center;

color:white;

font-size:45px;

font-weight:800;

margin-bottom:15px;

}



.history-subtitle{

text-align:center;

color:#cbd5e1;

margin-bottom:50px;

}



.history-container{

max-width:900px;

margin:auto;

display:flex;

flex-direction:column;

gap:25px;

}



.history-card{

background:white;

padding:30px;

border-radius:25px;

display:flex;

justify-content:space-between;

align-items:center;

box-shadow:

0 15px 40px rgba(0,0,0,.2);

}



.news-title{

font-size:20px;

font-weight:700;

color:#020617;

margin-bottom:10px;

}



.date{

color:#64748b;

font-size:14px;

}



.status{

font-size:22px;

font-weight:800;

}



.real{

color:#16a34a;

}



.fake{

color:#ef4444;

}



.confidence{

background:#e0f2fe;

padding:8px 18px;

border-radius:20px;

font-weight:700;

color:#0369a1;

}



@media(max-width:768px){

.history-page{

padding:40px 20px;

}


.history-card{

flex-direction:column;

align-items:flex-start;

gap:15px;

}

}


`}</style>



<div className="history-page">


<h1 className="history-title">

Analysis History

</h1>


<p className="history-subtitle">

Your previous AI news verification results

</p>



<div className="history-container">


{
historyData.map((item,index)=>(


<div className="history-card" key={index}>


<div>


<h3 className="news-title">

{item.title}

</h3>


<p className="date">

{item.date}

</p>

</div>



<div>


<p className={`status ${
item.result==="REAL"
?
"real"
:
"fake"
}`}>

{item.result}

</p>


<p className="confidence">

Confidence {item.confidence}

</p>


</div>


</div>


))

}



</div>


</div>


</>

);

}