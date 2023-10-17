import React from 'react';
import AuthBgImg from '../../assets/auth-bg.jpg';
import Navbar from '../../components/layouts/navbar/Navbar';
import AuthForm from '../../components/form/authForm/AuthForm';

const Login = () =>{
    return(
      <React.Fragment>
        <Navbar  darkText={true}/>
        <section className="Login-container">
            <div className='Login-img-container'>
                <img src={AuthBgImg} alt='authentication-background'/>


              </div>
                <div className="Login-content-container">
                  <div className='container'>
            
                   <div className="content-wrapper">
                  <h2>Login</h2>
                  <p> Sign in  with email and password</p>

                   <AuthForm />
                </div>
                </div>
               
            </div>
        </section>
        </React.Fragment>

    )
}

export default Login;