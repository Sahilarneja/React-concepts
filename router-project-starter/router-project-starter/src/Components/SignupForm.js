import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {
  const navigate=useNavigate();
  function submitHandler(event){
    event.preventDefault();
    if(formData.password != formData.confirmPassword){
      toast.error("password do not match");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account created...");
    console.log(formData);
    navigate("/dashboard");
  }
  const [formData, setFormData]=useState({
    firstName:"", lastName:"", email:"", password:"", confirmPassword:""
  })
  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <form onSubmit={submitHandler}>
        <div>
        <label>
          <p>First Name<sup>*</sup></p>
          <input 
          required
          type='text'
          name='firstName'
          placeholder='Enter first name'
          onChange={changeHandler}
          value={formData.firstName}
          ></input>
        </label>

        <label>
          <p>Last Name<sup>*</sup></p>
          <input 
          required
          type='text'
          name='lastName'
          placeholder='Enter Last name'
          onChange={changeHandler}
          value={formData.lastName}
          ></input>
        </label>

        </div>

        <div>
        <label>
          <p>Email Address<sup>*</sup></p>
          <input 
          required
          type='email'
          name='email'
          placeholder='Enter Email Address'
          onChange={changeHandler}
          value={formData.email}
          ></input>
        </label>
        </div>

        <div>
        <label>
        <p>
          Create Password<sup>*</sup>
        </p>
        <input
          required
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter Password"
          name="password"
        ></input>
        <span
          onClick={() => {
            setShowPassword((prev) => !prev);
          }}
        >
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </span>
      </label>

      <label>
        <p>
          Confirm Password<sup>*</sup>
        </p>
        <input
          required
          type={showPassword ? "text" : "password"}
          value={formData.confirmPassword}
          onChange={changeHandler}
          placeholder="Enter confirm Password"
          name="confirmPassword"
        ></input>
        <span
          onClick={() => {
            setShowPassword((prev) => !prev);
          }}
        >
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </span>
      </label>
      </div>

      <button>
        Create Account
      </button>
      </form>
    </div>
  )
}

export default SignupForm
