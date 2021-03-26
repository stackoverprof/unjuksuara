import React, { useEffect } from 'react'
import { css } from '@emotion/react'
import Link from 'next/link'

const card = ({ title, desc }) => { 
    return (
      <div css={style} className="card">
        <div className="container">
            <div className="content">
              <div>
                <h1 className="title">{title}</h1>
                <p className="desc">{desc}<a href="../petisi">.  Selengkapnya</a></p>
                
              </div>
              <div className="picture"></div>
            </div>
                
            <div className="bio">
              <div className="pic-profile"></div>
              <div className="name">Akbar Sigit Putra</div>
            </div>
        </div>
      </div>
    )
}

const style = css`

    box-shadow: 7px 7px 14px #BFBFBF;
    max-width: 700px;
    background: white;
    border-radius: 20px;
    margin: 20px auto;
    padding:20px;
    position:relative;

    .container {
        margin: 10px 30px;
        padding: 0;
    }

    .content{
        display: flex; 
        flex-direction: row;
    }

    content a{
        margin:0;
        padding:0;
        font-size:30px;
    }

    .title{
        font-size: 24px;
        padding: 0;
        margin:0;
    }

    .desc {
        font-size: 14px;
        padding: 0;
        margin: 20px 0 20px 0;
    }

    .picture{
        width: 100%;
        border-radius: 25px;
        background-image: url('/tupperware.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        margin-left: 20px;
    }

    .bio{
        display:flex;
        justify-content: flex-start;
        align-items: center;
        gap:10px;
        flex-direction: row;
    }

    .pic-profile{
        background: black;
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }

    .name{
        font-size: 17px;
    }
`

export default card
