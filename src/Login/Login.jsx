import { useState } from 'react'
import React from 'react'
import axios from 'react-axios'
import { useNavigate } from 'react-router-dom'
// import './registeration.css'



const Login = () => {
    
        const navigate=useNavigate()
        const [loginData,setLoginData]=useState('')
      
      
        let handleSubmit=async (e)=>{
          e.preventDefault()
          try{
            let response= await axios.post('http://localhost:5000/api/reg/login',loginData)
            console.log(response.data,'response');
            const token = response.data.token; 
            localStorage.setItem('token', token);
            navigate('/Home')
          }catch(error){
            console.log(error);
          }
        }
  return (
    <div className='logform'>
      <form action="" onSubmit={handleSubmit}>
        <div className='regh1'>

        <h1>LOGIN PAGE</h1>
        </div>
        <div className='regitype'>

        <input  className='reginput'type="text" label="Username" placeholder='username' name='username' />   <br /><br />
        <input className='reginput' type='password'label="Password" placeholder='password'name='password' /><br /><br />
        
        <input className='regbtn' type="submit" value="Login" />
        </div>
      </form>
    </div>
  )
}

export default Login
