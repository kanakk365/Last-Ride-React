import React, { useState } from "react";
import Form from "../Form/Form";
import { registerFormElements } from "../config/Config";

function Register() {
  const initalData = {
    username: "",
    email: "",
    password: "",
  };

  const [registerData, setRegisterData] = useState(initalData);
  return (
    <div>
      <h1>Register</h1>
      {<Form formControls={registerFormElements} formData={registerData} setFormData={setRegisterData} />}
    </div>
  );
}

export default Register;
