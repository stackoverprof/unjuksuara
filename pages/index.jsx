import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Card from '../components/card'
import React, { useState} from 'react'
import { css } from '@emotion/react'
import Footer from '../components/footer'


 const Home = () => {

  return (
    <>
      <div css={style}>
        <div className="container">
          <div className="sec-nav">
            <a href = "#">Rekomendasi</a>
            <a href = "#">Populer</a>
            <a href = "#">Terbaru</a>
            <form>
              <p>Filter: </p>
              <input type="text" name="" placeholder="Pilih Kategori"></input>
            </form>
          </div>

          <div className="container-content">
            <Card className="space" title="Wajibkan penggunaaan botol pakai ulang di Kampus!" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consec..." />

            <Card className="space" title="Wajibkan penggunaaan botol pakai ulang di Kampus!" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consec..."/>
          </div>
        </div>

        <Footer className="footer"/>

      </div>
    </>
  )
}

const style = css`
    background: #F2F2F2;
    height: 100%;
    width: 100%;
    position: absolute;

    .sec-nav {
      margin: 25px auto;
      display: flex;
      justify-content: space-evenly;
    }
    
    .sec-nav p{
      display:inline-block;
      margin:0;
      padding:0;
    }
    
    .sec-nav input{
    }

    .footer{
      position:absolute;
    }

`

export default Home