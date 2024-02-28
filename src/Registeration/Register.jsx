import React, { useState } from 'react'
import './registeration.css'
import axios from 'react-axios'
import { useNavigate } from 'react-router-dom'


const Register = () => {
    const[registerData,setRegisterData]=useState()
    const navigate=useNavigate()


    let handleSubmit=async(e)=>{
        e.preventDefault()
        try{
          let response=await axios.Post('http://localhost:5000/api/reg/register',registerData)
          console.log(response.data,'response');
          alert('registered successfully')
          navigate('/login')
        }catch(error){
          console.log(error);
        }
      }
  return (
    <div className='regform'>
      <form action="" onSubmit={handleSubmit}>
        <div className='regh1'>

        <h1>REGISTRATION PAGE</h1>
        </div>
        <div className='regitype'>

        <input  className='reginput'type="text" label="Username" placeholder='username'name='username' />   <br /><br />
        <input className='reginput' type='password'label="Password" placeholder='password'name='password' /><br /><br />
        <input className='reginput' type='text' label="Name"placeholder='name'name='ame'/><br /><br />
        <input className='reginput'type="email" label="Email" placeholder='email'name='email' /><br /><br />
        <input className='reginput'type="date" label="DOB" placeholder='DOB'name='dob'/><br /><br />
        <input className='regbtn' type="submit" />
        </div>
      </form>
    </div>
  )
}

export default Register
