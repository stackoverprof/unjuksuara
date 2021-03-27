import React, { useEffect } from 'react'
import { css } from '@emotion/react'
import Link from 'next/link'

const navbar = () => { 
    return (
      <div css={style}>
        <div className="nav">
            <input type="checkbox" id="nav-check"/>
            <div className="nav-header">
                <div className="nav-title"></div>
            </div>
            <div className="nav-btn">
                <label for="nav-check">
                <span></span>
                <span></span>
                <span></span>
                </label>
            </div>

            <div className="nav-links right">
                <a href="#" >Bantuan</a>
                <a href = "#" id="login">login</a>
            </div>
        
            <div className="nav-links left">
                <a href="#" >Mulai Petisi</a>
                <a href="#" >Koordinasi Aksi</a>
            </div>
            
        </div>
      </div>
    )
}

const style = css`

* {
    box-sizing: border-box;
  }
  
  .nav {
    height: 65px;
    width: 100%;
    background-color: white;
    position: relative;
    box-shadow: 0px 2px 3px 2px rgba(148,148,148,0.34);
  }

  .nav > .nav-header {
    display: inline;
  }
  
  .nav > .nav-header > .nav-title {
    display: inline-block;
    padding: 10px 10px 10px 10px;
    position: absolute;
    width: 300px;
    height: 100%;
    background-image: url('/UnjukSuara Logo 2.png');
    background-repeat: no-repeat;
    background-position: center;
  }
  
  .nav > .nav-btn {
    display: none;
  }
  
  .nav > .nav-links.right {
    display: inline;
    float: right;
    font-size: 18px;
    margin-right: 20px;
  }

  .nav > .nav-links.left {
    display: inline-block;
    position: relative;
    left:300px;
    font-size: 18px;
  }

  .nav-links.right #login{
      background:#3C7DD9;
      padding:20px 30px;
      border-radius: 20px;
  }
  
  .nav > .nav-links > a {
    display: inline-block;
    padding: 18px 10px 4px 10px;
    text-decoration: none;
    color: #333;
    height: 65px;
  }

  
  
  .nav > .nav-links > a:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
  
  .nav > #nav-check {
    display: none;
  }
  
  @media (max-width:600px) {
    .nav > .nav-btn {
      display: inline-block;
      position: absolute;
      right: 0px;
      top: 0px;
      
    }
    .nav > .nav-btn > label {
      display: inline-block;
      width: 50px;
      height: 50px;
      padding: 13px;
      
    }
    .nav > .nav-btn > label:hover,.nav  #nav-check:checked ~ .nav-btn > label {
      background-color: rgba(0, 0, 0, 0.3);
      
    }
    .nav > .nav-btn > label > span {
      display: block;
      width: 25px;
      height: 10px;
      border-top: 2px solid #eee;
      
    }
    .nav > .nav-links {
      position: absolute;
      display: block;
      width: 100%;
      background-color: #333;
      height: 0px;
      transition: all 0.3s ease-in;
      overflow-y: hidden;
      top: 50px;
      left: 0px;
      z-index: 3;
    }
    .nav > .nav-links > a {
      display: block;
      width: 100%;
      color:white;
    }
    .nav > #nav-check:not(:checked) ~ .nav-links {
      height: 0px;
    }
    .nav > #nav-check:checked ~ .nav-links {
      height: calc(100vh - 50px);
      overflow-y: auto;
    }
  }



    
`

export default navbar