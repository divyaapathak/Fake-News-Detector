import { Link, useNavigate } from "react-router-dom";


export default function Navbar(){

const navigate = useNavigate();

const token = localStorage.getItem("token");


const logout = () => {

localStorage.removeItem("token");

navigate("/login");

};


return (

<>

<style>{`

.navbar{

height:75px;

display:flex;

align-items:center;

justify-content:space-between;

padding:0 90px;

background:#ffffff;

box-shadow:0 5px 20px rgba(0,0,0,0.08);

position:sticky;

top:0;

z-index:1000;

}



/* LOGO */

.brand a{

text-decoration:none;

font-size:28px;

font-weight:800;

color:#020617;

}



.brand span{

color:#2563eb;

}




/* MENU */

.menu{

display:flex;

align-items:center;

gap:35px;

}



.menu a{

text-decoration:none;

color:#334155;

font-size:16px;

font-weight:600;

transition:.3s;

}



.menu a:hover{

color:#2563eb;

}




/* LOGIN */

.login-btn{

padding:10px 25px;

border:2px solid #2563eb;

border-radius:25px;

color:#2563eb !important;

}




/* REGISTER */

.register-btn{

padding:11px 28px;

background:#2563eb;

color:white !important;

border-radius:25px;

}



.register-btn:hover{

background:#1d4ed8;

}




/* LOGOUT */

.logout-btn{

padding:11px 28px;

border:none;

border-radius:25px;

background:#ef4444;

color:white;

font-size:15px;

cursor:pointer;

}



@media(max-width:800px){

.navbar{

padding:0 25px;

}


.menu{

gap:15px;

}


}


`}</style>



<nav className="navbar">


<div className="brand">

<Link to="/">

FakeNews <span>AI</span>

</Link>

</div>



<div className="menu">


<Link to="/">
Home
</Link>



{
token &&

<>

<Link to="/analyzer">
Analyzer
</Link>


<Link to="/history">
History
</Link>


<Link to="/dashboard">
Dashboard
</Link>

</>

}



{

!token ?

<>

<Link 
className="login-btn"
to="/login"
>
Login
</Link>


<Link
className="register-btn"
to="/register"
>
Register
</Link>

</>

:

<button 
className="logout-btn"
onClick={logout}
>
Logout
</button>

}



</div>


</nav>


</>

);

}