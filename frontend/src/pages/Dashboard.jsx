import { useEffect, useState } from "react";
import API from "../api/axios";

export default function Dashboard() {


  const [stats, setStats] = useState({

    totalNews: 0,
    realNews: 0,
    fakeNews: 0,
    avgConfidence: 0,

  });



  const [history, setHistory] = useState([]);



  useEffect(() => {

    loadDashboard();

  }, []);





  const loadDashboard = async () => {


    try {


      const dashboardRes = await API.get("/dashboard");

      setStats(dashboardRes.data);



      const historyRes = await API.get("/history");

      setHistory(historyRes.data.slice(0,5));



    } catch(error) {


      console.log(error);

      alert("Failed to load dashboard");


    }


  };






  return (

    <>


    <style>{`

.dashboard-page{

min-height:calc(100vh - 80px);

padding:60px 100px;

background:linear-gradient(135deg,#020617,#1e3a8a);

}


.dashboard-title{

text-align:center;

color:white;

font-size:45px;

font-weight:800;

margin-bottom:15px;

}



.dashboard-subtitle{

text-align:center;

color:#cbd5e1;

margin-bottom:50px;

}



.dashboard-cards{

max-width:1000px;

margin:auto;

display:grid;

grid-template-columns:repeat(4,1fr);

gap:25px;

}



.stat-card{

background:white;

padding:35px 20px;

border-radius:25px;

text-align:center;

box-shadow:0 15px 40px rgba(0,0,0,.25);

}



.stat-card h2{

font-size:45px;

color:#2563eb;

margin-bottom:10px;

}



.stat-card p{

color:#64748b;

font-size:17px;

}



.recent-box{

max-width:1000px;

margin:50px auto 0;

background:white;

padding:35px;

border-radius:25px;

}



.recent-box h2{

margin-bottom:25px;

}



.activity{

display:flex;

justify-content:space-between;

gap:20px;

padding:15px 0;

border-bottom:1px solid #e2e8f0;

}



.real{

color:#16a34a;

font-weight:bold;

}



.fake{

color:#ef4444;

font-weight:bold;

}



@media(max-width:900px){

.dashboard-page{

padding:40px 20px;

}


.dashboard-cards{

grid-template-columns:1fr 1fr;

}

}



@media(max-width:500px){

.dashboard-cards{

grid-template-columns:1fr;

}

}


    `}</style>





    <div className="dashboard-page">



      <h1 className="dashboard-title">

        AI Dashboard

      </h1>




      <p className="dashboard-subtitle">

        Track your fake news detection activity

      </p>





      <div className="dashboard-cards">



        <div className="stat-card">

          <h2>{stats.totalNews}</h2>

          <p>Total Analysis</p>

        </div>





        <div className="stat-card">

          <h2>{stats.realNews}</h2>

          <p>Real News</p>

        </div>





        <div className="stat-card">

          <h2>{stats.fakeNews}</h2>

          <p>Fake News</p>

        </div>





        <div className="stat-card">

          <h2>{stats.avgConfidence}%</h2>

          <p>Average Confidence</p>

        </div>



      </div>






      <div className="recent-box">


        <h2>

          Recent Activity

        </h2>





        {

        history.length === 0 ? (


          <p>No Activity Found</p>


        ) : (



          history.map((item,index)=>(



            <div

            className="activity"

            key={index}

            >



              <span>


                {

                item.news.length > 50

                ?

                item.news.substring(0,50)+"..."

                :

                item.news

                }


              </span>




              <span

              className={

                item.prediction === "Real News"

                ?

                "real"

                :

                "fake"

              }

              >

                {item.prediction}


              </span>



            </div>



          ))



        )

        }





      </div>






    </div>



    </>

  );

}