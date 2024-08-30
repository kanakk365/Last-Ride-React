import React, { useState } from "react";
import Form from "../Form/Form";
import { loginFormElements } from "../config/Config";

function Login() {
  const initialData= {
    email: "",
    password: "",
  }
  const [loginFormData, setLoginFormData] = useState(initialData);
  function onHandleSubmit(event){
    event.preventDefault()
  }
  return (
    <div>
      <h1>Login</h1>
      <Form
        formData={loginFormData}
        setFormData={setLoginFormData}
        formControls={loginFormElements}
        onHandleSubmit={onHandleSubmit}
      />
    </div>
  );
}

export default Login;
