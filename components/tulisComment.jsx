import React, { useEffect } from 'react'
import { css } from '@emotion/react'

const tulisComment = () => { 
    return (
      <>
        <div css={style}>
            <div className="container">
                <div className="picture"></div>
                <form action="" method="" className="form"> 
                    <div className="">
                        <input autocomplete="off" autofocus name="komentar" placeholder="Tulis Komentar" type="text"/>
                    </div>
                        <button className="button" type="submit">Kirim</button>
                </form>

            </div>
        </div>
      </>
    )
}

const style = css`

    .container{
        padding:20px 40px;
        max-width:40%;
        background: white;
        margin: 30px 10%;
        box-shadow: 4px 4px 14px #BFBFBF;
        border-radius: 20px;
        box-sizing: border-box;
        display:flex;
        align-items: center;
        overflow:hidden;
    }

    .form{
        display:flex;
        gap: 10px;
    }

    .picture{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background:black;
        margin-right: 20px;
    }

    input[type="text"]{
        font-size: 16px;
        background-color: #ECECEC;
        border: 2px solid var(--input-border);
        border-radius: 10px;
        padding: 2px 10px;
        box-shadow: inset 0 1px 2px var(--ytd-searchbox-legacy-border-shadow-color);
        height:30px;
        width: 270px;
    }

    input[type="text"]:focus{
        outline: none !important;
        border:1px solid var(--ytd-searchbox-legacy-border-shadow-color);
        box-shadow: 0 0 10px #BDBDBD;
    }

    .button{
        border-radius: 10px;
        border: 2px solid var(--input-border);
        padding: 2px 10px;
        width: 100px;
    }

    
`

export default tulisComment
