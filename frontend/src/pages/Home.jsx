export default function Home() {

return (

<>

<style>{`

.hero{

min-height:calc(100vh - 80px);

display:flex;

align-items:center;

justify-content:space-between;

padding:70px 100px;

background:

linear-gradient(
135deg,
#020617,
#1e3a8a
);

color:white;

gap:60px;

}


/* LEFT */

.left{

max-width:600px;

}


.badge{

display:inline-block;

background:rgba(56,189,248,.15);

color:#38bdf8;

padding:8px 20px;

border-radius:30px;

font-size:15px;

margin-bottom:25px;

}



.left h1{

font-size:64px;

line-height:1.15;

font-weight:800;

margin-bottom:25px;

}



.left h1 span{

color:#38bdf8;

}



.left p{

font-size:19px;

line-height:1.7;

color:#dbeafe;

margin-bottom:40px;

}



.buttons{

display:flex;

gap:20px;

}



.primary{

padding:15px 40px;

border:none;

border-radius:30px;

background:#38bdf8;

color:#020617;

font-size:17px;

font-weight:700;

cursor:pointer;

}



.secondary{

padding:15px 40px;

border-radius:30px;

border:1px solid white;

background:transparent;

color:white;

font-size:17px;

cursor:pointer;

}



/* RIGHT AI CARD */


.right{

display:flex;

justify-content:center;

}



.card{

width:380px;

background:white;

color:#020617;

padding:35px;

border-radius:30px;

box-shadow:

0 20px 50px rgba(0,0,0,.35);

}



.card h2{

margin-bottom:30px;

}



.progress{

height:15px;

background:#e2e8f0;

border-radius:20px;

overflow:hidden;

margin-bottom:20px;

}



.fill{

height:100%;

width:96%;

background:#22c55e;

}



.card h3{

font-size:32px;

color:#16a34a;

margin-bottom:15px;

}



.card p{

font-size:18px;

font-weight:600;

}



@media(max-width:900px){

.hero{

flex-direction:column;

padding:50px 25px;

text-align:center;

}


.left h1{

font-size:42px;

}


.buttons{

justify-content:center;

}


.card{

width:100%;

}

}

`}</style>



<section className="hero">


<div className="left">


<span className="badge">

AI Powered News Verification

</span>



<h1>

Detect Fake News

<br/>

<span>

with AI Precision

</span>

</h1>



<p>

Analyze news instantly using Artificial Intelligence.
Get confidence scores and reliable predictions in seconds.

</p>



<div className="buttons">


<button className="primary">

Analyze News

</button>



<button className="secondary">

Learn More

</button>


</div>



</div>




<div className="right">


<div className="card">


<h2>
🤖 AI Analysis
</h2>



<div className="progress">

<div className="fill">

</div>

</div>



<h3>

Confidence 96%

</h3>



<p>

Prediction : REAL NEWS

</p>



</div>


</div>



</section>


</>

);

}