import React from "react";
import { useFormik } from "formik";
import { API } from "./global";
import "./Signin.css";
import { useNavigate } from "react-router-dom";

export function Signin() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      const data = await fetch(`${API}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (data.status === 401) {
        console.log("error");
        alert("Invalid Cretentials ❌❌")
      } else {
        console.log("success");
        const result = await data.json();
        console.log(result);
        localStorage.setItem("token", result.token);
        alert("Login Successfull ✅✅")
        navigate("/projects")
      }
    },
  });

  function signup_page() {
    navigate('/projects/signup')
  }

  function rest_page(){
    navigate('/projects/forgot-password')
  }
  return (
    <div className="login_container">
      <h1>Need Login to open Projects Preview & Github Link</h1>
      <form className="form" onSubmit={formik.handleSubmit}>
        <input
          placeholder="Email"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
        />
        <input
          placeholder="Password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <button type="submit">Sign In</button>
        <label>
          Not a member? <a onClick={()=> signup_page()}>Sign Up</a>
        </label>
        <a onClick={() => rest_page()}>Forgot Password</a>
      </form>
    </div>
  );
}
