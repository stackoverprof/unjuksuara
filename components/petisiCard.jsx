import React, { useEffect } from 'react'
import { css } from '@emotion/react'
import Link from 'next/link'

const petisiCard = () => { 
    return (
      <>
        <div css={style} >
          <div className="container">
            <div className="judul">
                <h1>Cabut Pergub DIY yang Membatasi Hak Berdemonstrasi!</h1>
            </div>
            <div className="col-1">
              <div className="col-kiri">
                <div className="page-pic"></div>
                <button class="button">Hover</button>
                <div className="desc">
                    <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                    Curabitur id massa sed ex rhoncus laoreet nec a dui. Phasellus condimentum, felis sed interdum tincidunt, ex est feugiat tellus, a sagittis est dolor eget ante. Sed ex orci, blandit nec mattis a, luctus non magna. Donec ultricies interdum mauris. Curabitur elementum tellus eu sapien tincidunt, vitae congue mauris laoreet. Nullam scelerisque dolor eu quam mattis, sit amet feugiat dui ornare.

                    Maecenas euismod quam vel finibus semper. In tempus viverra eros. Cras nisl lorem, ullamcorper nec faucibus ultricies, accumsan et ligula. Vivamus ultrices, lectus elementum laoreet sollicitudin, sapien erat elementum massa, ac imperdiet augue neque et velit.

                    <p>Salam,</p>

                    Ismail bin Mail

                    <p>BEM KM UGM</p>
                    
                    </p>
                </div>
              </div>
              
              <div className="data">
                <p className="penandatangan border">
                    5.237 orang sudah menandatangani. Bantu petisi ini mencapai 7.000 suara!
                </p>

                <div className="kategori border">
                  <h3>Kategori</h3>
                  <h2>Kebijakan Pemerintah</h2>
                </div>

                <div className="dimulai border">
                  <h3>Dimulai Oleh</h3>
                  <div className="profile">
                    <div className="prof-pic"></div>
                    <div>
                      <h2 className="name">Halim Assegaf</h2>
                      <h4 className="jabatan">Aliansi Mahasiswa UGM</h4>
                    </div>
                  </div>
                </div>

                <div className="mempetisi border">
                  <h3>Mempetisi</h3>
                  <h2>Gubernur DIY</h2>
                </div>
              </div>
            </div>

            

          </div>
        </div>
      </>
    )
}

const style = css`

  .container{
    padding:20px 40px;
    max-width:80%;
    background: white;
    margin: 30px auto;
    box-shadow: 4px 4px 14px #BFBFBF;
    border-radius: 20px;
    box-sizing: border-box;
  }

  .judul{
    width: 50%;
    margin-top:0px;
    padding:0;
  }

  .judul h1{
    font-size:36px;
  }

  .col-1 {
    display:flex;
    flex-direction: row;
  }

  .col-kiri{
    margin-right: 100px;
  }

  .page-pic{
    width:500px;
    height:400px;
    border-radius: 20px;
    background:black;
  }

  .col-kiri .desc{
    width:500px;
  }

  .data{
    // border: solid black 3px;
    max-width: 340px;
  }

  .border{
    border-bottom:solid black 1px;
    padding-bottom:20px;
  }

  .profile{
    display:flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
  }

  .prof-pic{
    display:inline-block;
    width: 50px;
    height:50px;
    background:black;
    border-radius:50%;
  }

  .data h3{
    margin:0;
    padding:0;
  }

  .data h2{
    margin:0;
    padding:0;
    display:inline-block;
  }

  .dimulai .jabatan{
    padding:0px;
    margin:0px;
  }

  .button {
    position:relative;
    left:20%;
    background-color: #333333;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    // text-decoration: none;
    display: inline-block;
    font-size: 16px;
    
    margin: 40px 0;
    width: 300px;
    transition: 0.3s;
  }
  
  .button:hover {
    // box-shadow: 5px 5px 5px black;
    background-color: #757575;
    font-size: 150%;
  }

`

export default petisiCard
