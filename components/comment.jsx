import React, { useEffect } from 'react'
import { css } from '@emotion/react'
import Link from 'next/link'

const comment = () => { 
    return (
      <div css={style} className="card"></div>
        
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
        background: black;
        border-radius: 25px;
        // background-image: url("../public/tupperware.jpg");
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

export default comment;
