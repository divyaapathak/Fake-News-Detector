import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/axios";


export default function Register(){

const navigate = useNavigate();


const [form,setForm] = useState({

name:"",
email:"",
password:""

});



const handleChange=(e)=>{

setForm({

...form,

[e.target.name]:e.target.value

});

};





const handleRegister = async (e)=>{

e.preventDefault();


try{


const res = await API.post("/auth/register",{

name: form.name,

email: form.email,

password: form.password

});



alert(res.data.message);



navigate("/login");



}

catch(error){


console.log(error);



alert(

error.response?.data?.message ||

"Register Failed"

);


}


};




return(

<>


<style>{`

.register-page{

min-height:calc(100vh - 80px);

display:flex;

justify-content:center;

align-items:center;

background:

linear-gradient(
135deg,
#020617,
#1e40af
);

}



.register-card{

width:430px;

background:white;

padding:45px;

border-radius:30px;

box-shadow:

0 20px 50px rgba(0,0,0,.3);

}



.register-logo{

text-align:center;

font-size:24px;

font-weight:800;

color:#2563eb;

margin-bottom:15px;

}



.register-card h1{

text-align:center;

font-size:35px;

color:#020617;

margin-bottom:10px;

}



.register-subtitle{

text-align:center;

color:#64748b;

margin-bottom:35px;

}



.register-card input{

width:100%;

padding:15px;

margin-bottom:18px;

border-radius:15px;

border:1px solid #cbd5e1;

font-size:16px;

outline:none;

}



.register-card input:focus{

border-color:#38bdf8;

}



.register-button{

width:100%;

padding:15px;

border:none;

border-radius:30px;

background:#38bdf8;

color:#020617;

font-size:18px;

font-weight:700;

cursor:pointer;

}



.register-button:hover{

background:#0ea5e9;

}



.login-text{

text-align:center;

margin-top:25px;

color:#64748b;

}



.login-text a{

color:#2563eb;

font-weight:600;

text-decoration:none;

}


`}</style>





<div className="register-page">


<div className="register-card">



<div className="register-logo">

FakeNews AI

</div>



<h1>
Create Account
</h1>



<p className="register-subtitle">

Join AI Powered News Verification Platform

</p>




<form onSubmit={handleRegister}>


<input

type="text"

name="name"

placeholder="Full Name"

value={form.name}

onChange={handleChange}

required

/>





<input

type="email"

name="email"

placeholder="Email Address"

value={form.email}

onChange={handleChange}

required

/>





<input

type="password"

name="password"

placeholder="Create Password"

value={form.password}

onChange={handleChange}

required

/>





<button 
className="register-button"
type="submit"
>

Register

</button>



</form>





<p className="login-text">

Already have an account?


<Link to="/login">

 Login

</Link>


</p>




</div>


</div>


</>

);

}