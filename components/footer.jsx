import React, { useEffect } from 'react'
import { css } from '@emotion/react'
import Link from 'next/link'

const footer = () => { 
    return (
      <div css={style}>
        <div className="footer">
            <div className="container-footer">
                <div className="content">
                    <h2>UnjukSuara</h2>
                    <p>Integrated Aspiration Platform</p>
                </div>

                <div className="contact">
                    <h4>Contact Us:</h4>
                    <button type="submit" className="button-contact">E-Mail</button>
                    <button type="submit" className="button-contact">GitHub</button>
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
        background: #3C7DD9;
        width:100%;
        position:relative;
        bottom:0;
        margin-top: 50px;
    }

    .container-footer {
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

    .contact{
        display:block;
        position:relative;
        left: 550px;
    }

    .contact h4{
        margin:0;
        padding:0;
    }

    .contact .button-contact{
        border-radius: 20px;
        border: 2px solid white;
        padding: 2px 10px;
        transition: 0.3s;
        background-color: #3C7DD9;
        height: 40px;
        width: 120px;
        margin-top: 7px;
        color:white;
        font-size: 16px;
        display:block;
    }

    .button-contact:hover {
        box-shadow: 1px -1px 11px 0px rgba(51,119,214,0.43);
        -webkit-box-shadow: 1px -1px 11px 0px rgba(51,119,214,0.43);
        -moz-box-shadow: 1px -1px 11px 0px rgba(51,119,214,0.43);
        font-size: 17px;
        background-color: #3471c7;
    }

    .button-contact:active,.button-contact:focus 
    {
        border-style: 3px solid black;
        outline:0;
    }

    .alamat {
        position:relative;
        top:-90px;
        margin-top: 50px;
        max-width: 300px;
    }
    
`

export default footer