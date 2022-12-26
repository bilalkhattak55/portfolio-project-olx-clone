import axios from 'axios';
import React, { useState } from 'react';
import "../auth/auth.css";
import olxpng from "../images/olx.png";
import { Link } from 'react-router-dom';


const Signin = ({token, setToken}) => {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  //login
  const loginHandler =()=> {
    setUserName('');
    setPassword('');
    setError('')
    axios({
      url:"https://fakestoreapi.com/auth/login",
      method:"POST",
      data : {
        username : userName,
        password: password,
      }
    }).then((res)=>{
     console.log(res.data.token)
    setToken(res.data.token)
    localStorage.setItem('userToken', res.data.token)
    })
    .catch((err) => {
    console.log(err.response)
    setError(err.response.data)
  })
  
  }



  //changing in singup and singin
  const [isSignup, setIsSignup] = useState(true)
  const submit = (e) => {
    e.preventDefault();
  }
  return (
    <div>
      <div className="signin-fromm mt-5">
        <main className="form-signin w-100 m-auto">
          <form onSubmit={submit}>
            <div className='text-center'>
              <img className="mb-1" src={olxpng} width={72} height={72} />
            </div>
            <h1 className="h3 mb-3 fw-normal text-center">{isSignup ? "Please sign up" : "please sign in"}</h1>
            {isSignup &&
              <div className="form-floating mb-2">
                <input type="name" className="form-control" id="name" placeholder="name" />
                <label htmlFor="name">Name</label>
              </div>
            }
            <div className="form-floating">
              <input onChange={(e)=> setUserName(e.target.value)} type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mt-2">
              <input onChange={(e)=> setPassword(e.target.value)} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" defaultValue="remember-me" /> Remember me
              </label>
            </div>
            {
              error && <small>{error}</small>
            }
            <Link to='/'><button onClick={loginHandler} className="w-100 btn btn-lg btn-primary mb-2" type="submit">{isSignup ? "Sign up" : "login"}</button></Link>
            <button className="w-100 btn btn-lg btn-dark" onClick={() => setIsSignup(!isSignup)}>{isSignup ? "login" : "Create account"}</button>

          </form>
        </main>
      </div>
    </div>
  )
}

export default Signin
