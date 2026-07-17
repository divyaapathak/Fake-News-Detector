import { useEffect, useState } from "react";
import API from "../api/axios";

export default function History() {

  const [history, setHistory] = useState([]);


  useEffect(() => {

    fetchHistory();

  }, []);



  const fetchHistory = async () => {

    try {

      const res = await API.get("/history");

      setHistory(res.data);


    } catch(error) {

      console.log(error);

      alert("Failed to load history");

    }

  };



  return (

    <>

    <style>{`

    .history{

      max-width:1000px;

      margin:40px auto;

      padding:20px;

    }


    h1{

      text-align:center;

      margin-bottom:30px;

      color:#1e3a8a;

    }


    .card{

      background:white;

      padding:20px;

      margin-bottom:20px;

      border-radius:15px;

      box-shadow:0 5px 15px rgba(0,0,0,.08);

    }


    .news{

      font-size:18px;

      margin-bottom:15px;

    }


    .real{

      color:green;

      font-weight:bold;

    }


    .fake{

      color:red;

      font-weight:bold;

    }


    .confidence{

      color:#2563eb;

      font-weight:bold;

      margin-top:10px;

    }


    `}</style>



    <div className="history">


      <h1>
        Analysis History
      </h1>



      {
        history.length === 0 ? (

          <h3 style={{textAlign:"center"}}>
            No History Found
          </h3>

        ) : (


          history.map((item,index)=>(

            <div className="card" key={index}>


              <div className="news">

                {item.news}

              </div>



              <div
              className={
                item.prediction === "Real News"
                ? "real"
                : "fake"
              }
              >

                {item.prediction}

              </div>



              <div className="confidence">

                Confidence : {item.confidence}

              </div>


            </div>


          ))


        )
      }



    </div>


    </>

  );

}