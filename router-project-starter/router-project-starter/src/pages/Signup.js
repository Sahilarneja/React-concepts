import React from 'react'
import Template from '../Components/Template'
import signupImg from '../assets/signup.png'

const Signin = (setIsLoggedIn) => {
  return (
    <Template 
    title="Welcome Back"
    desc1="Build Skills for today, tomorrow and beyond"
    desc2="Education to future-groof your carrer."
    image={signupImg}
    formType="signup"
    setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signin
