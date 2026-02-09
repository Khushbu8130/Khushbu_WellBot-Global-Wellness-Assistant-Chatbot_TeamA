import { useState } from "react";
import { Link } from "react-router-dom";
import WellBotMascot from "../components/WellBotMascot";
import "./Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    language: "",
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

    // Full name
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = "Name can contain only letters";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    // Password
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(
        formData.password
      )
    ) {
      newErrors.password =
        "Password must include uppercase, lowercase, number & symbol";
    }

    // Language
    if (!formData.language) {
      newErrors.language = "Please select a language";
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
    alert("Signup Successful 🌿");
  };

  return (
    <>
      <div className="theme-toggle" onClick={() => document.body.classList.toggle("dark")}>
        
      </div>

      <div className="blob one"></div>
      <div className="blob two"></div>

      <div className="auth-layout">
        <div className="auth-left">
          <div className="mascot-stage">
            <WellBotMascot mood={mascotMood} />
          </div>
          <h1 className="brand-title">WellBot</h1>
          <p className="brand-subtitle">Your Global Wellness Assistant 💙</p>
        </div>

        <div className="auth-right">
          <div className="signup-card">
            <h2>Create Account</h2>

            <form onSubmit={handleSubmit} noValidate>
              <div className="input-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={() => setMascotMood("idle")}
                />
                {errors.name && <small className="error">{errors.name}</small>}
              </div>

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

              <div className="input-group">
                <label>Preferred Language</label>
                <select
                  name="language"
                  value={formData.language}
                  onChange={handleChange}
                  onBlur={() => setMascotMood("idle")}
                >
                  <option value="">Select Language</option>
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Bengali">Bengali</option>
                  <option value="Spanish">Spanish</option>
                </select>
                {errors.language && <small className="error">{errors.language}</small>}
              </div>

              <button className="signup-btn">Create Account</button>
            </form>

            <p className="footer-text">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
