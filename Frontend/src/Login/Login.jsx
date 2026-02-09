import { useState } from "react";
import { Link } from "react-router-dom";
import WellBotMascot from "../components/WellBotMascot";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [mascotMood, setMascotMood] = useState("idle");

  const handleChange = (e) => {
    setMascotMood("focus");
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (Object.keys(newErrors).length > 0) {
      setMascotMood("sad");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setMascotMood("happy");
    alert("Login Successful 🌿");
  };

  return (
    <>
      <div className="blob one"></div>
      <div className="blob two"></div>

      <div className="auth-layout">
        <div className="auth-left">
          <div className="mascot-stage">
            <WellBotMascot mood={mascotMood} />
          </div>
          <h1 className="brand-title">WellBot</h1>
          <p className="brand-subtitle">Welcome Back 💙</p>
        </div>

        <div className="auth-right">
          <div className="auth-card">
            <h2>Login</h2>

            <form onSubmit={handleSubmit} noValidate>
              <div className="input-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={() => setMascotMood("idle")}
                />
                {errors.email && <small className="error">{errors.email}</small>}
              </div>

              <div className="input-group">
                <label>Password</label>
                <div className="password-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    onFocus={() => setMascotMood("cover")}
                    onBlur={() => setMascotMood("idle")}
                  />
                  <span className="toggle" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? "Hide" : "Show"}
                  </span>
                </div>
                {errors.password && <small className="error">{errors.password}</small>}
              </div>

              <button className="signup-btn">Login</button>
            </form>

            <p className="footer-text">
              Don’t have an account? <Link to="/">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
