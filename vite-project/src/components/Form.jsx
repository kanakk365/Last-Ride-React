import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name :'',
    email: ''
  });
  function handleChange(event){
    const {name , value} = event.target;
    setFormData({
        ...formData,
        [name] : value
    })
  }

  function handleSubmit(event){
    event.preventDefault()
    console.log({value, name})

  }
  console.log(formData)

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit} >
        <input type="text" name="name" id="name" placeholder="Enter your name" value={formData.name} onChange={handleChange}/>
        <input type="text" name="email" id="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
