import React, { useEffect } from 'react'
import { css } from '@emotion/react'
import Link from 'next/link'

const comment = () => { 
    return (
      <>
        <div css={style}>
            <div className="container">
                <div className="profile">
                    <div className="pic"></div>
                    <div className="name">Sri Utami Galapagos</div>
                </div>
                <div className="desc">
                    <p>Wih mantap inih, ga ada ceritanya dari jaman dulu soal larangan-larangan protes di gedung pemerintahan! Ya kali gedung DPRD, kepatihan, dll itu gaboleh didatengin buat demo?! Kan semuanya di area Malioboro tuh!! Kaco kaco makin elitis dah penguasa jaman sekarang. Untung ada UnjukSuara, suaraku sebagai mahasiswa UGM sekaligus warga asli Jogja yang concerned sm isu ini jadi bisa nyuarin pendapat deh!</p>
                </div>
                
                <div className="time">
                    <p>3 minggu yang lalu</p>
                </div>
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
    }

    .profile{
        align-items: center;
        display: flex;
        gap: 10px;
    }

    .pic{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background:black;
    }

    .name{
        font-weight: 600;
        font-size: 18px;
    }

    .time{
        color:#CCCCCC;
        font-size: 14px;
    }
    
   
`

export default comment
