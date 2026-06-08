import { useState } from "react";
import api from "../services/api";
import { Link, useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await api.post("/auth/register", form);

      alert("Account Created Successfully");

      navigate("/login");

    } catch (err) {

      alert("Registration Failed");

    }
  };


  return (
    <div className="page">

      <div className="container auth-card">

        <h1>Create Account</h1>

        <p className="subtitle">
          Start managing your tasks today
        </p>

        <form onSubmit={handleSubmit}>

          <input
            placeholder="Full Name"
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
          />

          <input
            placeholder="Email Address"
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setForm({
                ...form,
                password: e.target.value,
              })
            }
          />

          <button type="submit">
            Create Account
          </button>

        </form>

        <p className="auth-link">
          Already have an account?
          <Link to="/login">
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Register;