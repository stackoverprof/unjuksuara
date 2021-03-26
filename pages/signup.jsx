import React, { useState} from 'react'
import { css } from '@emotion/react'

 const Signup = () => {

  return (
    <>
      <div css={style}>
        <div className="header">
            <div className="logo"></div>
            <div className="logotype"></div>
        </div>
        
        <div className="signup">
            <h2 className="title">Buat Akun</h2>
            <form action="" method="" className=""> 
                <div className="form">
                    <input autocomplete="off" autofocus name="username" placeholder="Nama lengkap" type="text"/>
                    <input autocomplete="off" autofocus name="password" placeholder="Password" type="password"/>
                    <button className="button" type="submit">Sign Up</button>
                    <div className="login">Sudah punya akun? <a href="#">Login</a></div>
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
    
    .signup{
        padding:20px 40px;
        width: 400px;
        height:350px;
        margin: auto;
        box-shadow: 4px 4px 14px #BFBFBF;
        border-radius: 50px;
        box-sizing: border-box;
        background-image: linear-gradient(to right top, #979eb0, #a8afbe, #bac0cd, #ccd1db, #dfe3ea);
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
        margin-bottom: 15px;

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
        margin-top: 30px;
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

     .login{
        margin-top: 5px;
        font-size: 14px;
     }

     .login a{
         text-decoration: underline;
     }

`

export default Signup