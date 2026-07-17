import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/axios";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await API.post("/auth/login", {
        email: form.email,
        password: form.password,
      });

      console.log("Backend Response:", res.data);

      if (!res.data.token) {
        alert("Token not received from backend");
        return;
      }

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      console.log("Saved Token:", localStorage.getItem("token"));

      alert("Login Successful");

      navigate("/");

    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
        error.message ||
        "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
      *{
        margin:0;
        padding:0;
        box-sizing:border-box;
      }

      .login-page{
        min-height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        background:linear-gradient(135deg,#020617,#1d4ed8);
        padding:20px;
      }

      .login-card{
        width:420px;
        background:white;
        border-radius:20px;
        padding:40px;
        box-shadow:0 20px 50px rgba(0,0,0,.3);
      }

      .logo{
        text-align:center;
        font-size:30px;
        font-weight:800;
        color:#2563eb;
        margin-bottom:10px;
      }

      h2{
        text-align:center;
        margin-bottom:10px;
      }

      p{
        text-align:center;
        color:#64748b;
        margin-bottom:25px;
      }

      input{
        width:100%;
        padding:15px;
        margin-bottom:15px;
        border-radius:10px;
        border:1px solid #cbd5e1;
        font-size:16px;
      }

      button{
        width:100%;
        padding:15px;
        background:#2563eb;
        color:white;
        border:none;
        border-radius:10px;
        font-size:16px;
        cursor:pointer;
      }

      button:hover{
        background:#1d4ed8;
      }

      .bottom{
        margin-top:20px;
        text-align:center;
      }

      .bottom a{
        color:#2563eb;
        text-decoration:none;
        font-weight:bold;
      }
      `}</style>

      <div className="login-page">
        <div className="login-card">

          <div className="logo">
            FakeNews AI
          </div>

          <h2>Welcome Back</h2>

          <p>Login to continue</p>

          <form onSubmit={handleLogin}>

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={form.password}
              onChange={handleChange}
              required
            />

            <button disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>

          </form>

          <div className="bottom">
            Don't have an account?{" "}
            <Link to="/register">Register</Link>
          </div>

        </div>
      </div>
    </>
  );
}