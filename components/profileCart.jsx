import React, { useState} from 'react'
import { css } from '@emotion/react'

 const profileCard = () => {

  return (
    <>
      <div css={style}>
        
        <div className="content">
          <div className="wrap">
            <div className="prof-pic"></div>
            <div className="name"><h1>Josephine F. Hutapea</h1></div>
            <div className="position"><h4>Staf Multimedia di BEM KM UGM</h4></div>
            <div className="email"><h5>josephine.f.h.02@mail.ugm.ac.id</h5></div>
            
            <div className="trail">
                <div className="mulai"><a href="#">Telah Memulai</a></div>
                <div className="tandaTangan"><a href="#">Telah menandatangani</a></div>
            </div>
          </div>
          
          
            
            
        </div>
      </div>
    </>
  )
}

const style = css`
    
    .content{
        padding:20px 40px;
        width: 700px;
        height:500px;
        margin: auto;
        margin-top: 60px;
        box-shadow: 4px 4px 14px #BFBFBF;
        border-radius: 50px;
        box-sizing: border-box;
        background-image: linear-gradient(to right top, #979eb0, #a8afbe, #bac0cd, #ccd1db, #dfe3ea);
        
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
        
    }

    .wrap{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position:relative;
    }

    .prof-pic{
        width:200px;
        height:200px;
        background-image: url('/prof-pic.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .name h1{
        margin-bottom:5px;
    }

    .position h4{
        margin: 0;
        font-weight: 400;
        font-size:18px;
    }

    .email h5{
        color: #5A5D64;
        font-size:15px;
        margin-top: 40px;
    }

    .trail{
        position:relative;
        width: 400px;
        display:flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin: 30px 0;
    }

    .trail .mulai{
        width: 170px;
        border-right: 2px solid grey;
    }

    .trail .tandaTangan {
        margin-left: 50px;
        margin-right: -50px;
    }
    



    

`

export default profileCard