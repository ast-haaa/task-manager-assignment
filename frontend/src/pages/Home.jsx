import { Link } from "react-router-dom";

function Home() {

  return (
    <div className="page">

      <div className="hero-card">

        <div className="badge">
          Backend Developer Assignment
        </div>

        <h1 className="hero-title">
          TaskFlow
        </h1>

        <p className="hero-description">
          A modern task management platform built with
          Spring Boot, JWT Authentication, React and MySQL.
          Create tasks, manage workflow and access secure APIs
          through a scalable backend architecture.
        </p>

        <div className="hero-features">

          <div className="feature-box">
            JWT Authentication
          </div>

          <div className="feature-box">
            Role Based Access
          </div>

          <div className="feature-box">
            REST APIs
          </div>

          <div className="feature-box">
            MySQL Database
          </div>

        </div>

        <div className="hero-buttons">

          <Link to="/login">
            <button className="hero-btn">
              Sign In
            </button>
          </Link>

          <Link to="/register">
            <button className="hero-btn-outline">
              Create Account
            </button>
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Home;