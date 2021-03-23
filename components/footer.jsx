import React, { useEffect } from 'react'
import { css } from '@emotion/react'
import Link from 'next/link'

const footer = () => { 
    return (
      <div css={style}>
        <div className="footer">
            <div className="container">
                <div className="content">
                    <div className="logo"></div>
                    <h2>UnjukSuara</h2>
                    <p>Integrated Aspiration Platform</p>
                </div>
                <div className="alamat">
                    <p>Bulaksumur, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281</p>
                </div>
            </div>
            
        </div>
      </div>
    )
}

const style = css`

    .footer {
        background: #333333;
        width:100%;
        height:330px;
        position: relative;
        bottom:0;
        margin-top: 40px;
    }

    .container {
        display: flex;
        flex-direction: column;
        padding: 50px 80px;
        color:white;
    }

    .content {
        margin-bottom: 20px;
    }

    .content .logo {
        display:inline-block;
        width: 20px;
        height: 20px;
        background:white;
    }

    .content h2 {
        display:inline-block;
        margin:0;
        font-size:34px;
        padding:0;
    }

    .content p {
        margin:0;
        padding:0;
        font-weight: 700;
    }

    .alamat {
        max-width: 300px;
    }


    
`

export default footer