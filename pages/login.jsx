import React, { useState} from 'react'
import { css } from '@emotion/react'

 const Login = () => {

  return (
    <>
      <div css={style}>
        <div className="header">
            <div className="logo"></div>
            <div className="logotype"></div>
        </div>
        
        <div className="login">
            <h2 className="title">Login SSO UGM</h2>
            <form action="" method="" className=""> 
                <div className="form">
                    <input autocomplete="off" autofocus name="username" placeholder="Username" type="text"/>
                    <input autocomplete="off" autofocus name="password" placeholder="Password" type="password"/>
                    <button className="button" type="submit">Log In</button>
                    <div className="signup">Belum Punya akun? <a href="#">Sign Up</a></div>
                </div>
            </form>
            
            
        </div>
      </div>
    </>
  )
}

const style = css`
    background: #F2F2F2;
    height: 100%;
    width: 100%;
    position: absolute;

    .logo{
        position: fixed;
        width: 100%;
        height: 100%;
        background-image: url('/UnjukSuara Logo 2.png');
        background-repeat: no-repeat;
        margin: 30px 20px;
    }
    
    .login{
        padding:20px 40px;
        width: 400px;
        height:400px;
        margin: auto;
        box-shadow: 4px 4px 14px #BFBFBF;
        border-radius: 40px;
        box-sizing: border-box;
        background-image: linear-gradient(to right top, #dadce1, #dfe0e5, #e3e5e8, #e8e9ec, #edeef0);
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
    }

    .form{
        display:flex;
        align-items: center;
        flex-direction: column;
    }

    .title{
        text-align: center;
        margin-bottom: 20px;
    }

    input {
        font-size: 16px;
        background-color: #ECECEC;
        border: 2px solid var(--input-border);
        border-radius: 10px;
        padding: 20px 10px;
        box-shadow: inset 0 1px 2px var(--ytd-searchbox-legacy-border-shadow-color);
        height: 40px;
        width: 270px;
        margin-bottom: 10px;

    }

    input:focus{
        outline: none !important;
        border:1px solid var(--ytd-searchbox-legacy-border-shadow-color);
        box-shadow: 0 0 10px #BDBDBD;
    }

    .button{
        border-radius: 20px;
        border: 2px solid var(--input-border);
        padding: 2px 10px;
        transition: 0.3s;
        background-color: #4d83d1;
        height: 40px;
        width: 270px;
        margin-top: 40px;
        color:white;
        font-size: 16px;
    }

    .button:hover {
        box-shadow: 1px -1px 11px 0px rgba(51,119,214,0.43);
        -webkit-box-shadow: 1px -1px 11px 0px rgba(51,119,214,0.43);
        -moz-box-shadow: 1px -1px 11px 0px rgba(51,119,214,0.43);
        background-color: #3C7DD9;
    }

    .button:active,.button:focus 
    {
        border-style: 3px solid black;
        outline:0;
     }

     .signup{
        margin-top: 5px;
        font-size: 14px;
     }

     .signup a{
         text-decoration: underline;
     }

`

export default Login