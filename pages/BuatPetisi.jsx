import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Card from '../components/card'
import React, { useState} from 'react'
import { css } from '@emotion/react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

 const BuatPetisi = () => {

  return (
    <>
      <div css={style}>
        <Navbar/>

        <div className="container">
            <h1 className="title">Mulai Petisi Kamu</h1>

            <form action="" method="" className="">

                {/* Judul Petisi */}
                <h4 className="sub-judul">Judul petisi</h4>
                <input autocomplete="off" autofocus name="judul" placeholder="ex: Pandemi Semakin Parah, Turunkan Harga UKT!" type="text"/>

                {/* Tambah Gambar */}
                {/*Source*/}
                {/* https://medium.com/@purnamaanaking/cara-simple-membuat-drag-and-drop-image-upload-b745343b0171 */}
                <h4 className="sub-judul">Tambahkan gambar</h4>
                <div className="dropzone-wrapper">
                    <div className="dropzone-desc">
                        <p>Choose an image file or drag it here.</p>
                    </div>
                    <input type="file" name="gambar" className="dropzone"/>
                </div>
                <button type="submit">Upload</button>
                <button type="button">
                    <i className="fa fa-times"></i> Reset This Form
                </button>

                {/* Tanda Tangan */}
                <div className="target-wrapper">
                    <h4 className="sub-judul">Target tanda tangan</h4>
                    <input autocomplete="off" autofocus name="target" placeholder="min: 5000" type="text"/>
                </div>
                

                {/* Deskripsi*/}
                <div className="desc-wrapper">
                    <h4 className="sub-judul">Deskripsi</h4>
                    <textarea name="desc" rows="10" cols="83">
                    Jelaskan latar belakang dan tujuan petisi, serta identitas Anda
                    </textarea>
                </div>
                

                {/* Submit */}
                <button type="submit" className="button">Buat Petisi</button>

            </form>
        </div>
          
        <Footer/>
      </div>
    </>
  )
}

const style = css`
    background: #F2F2F2;
    height: 100%;
    width: 100%;
    position: absolute;

    .container {
        padding: 50px 200px;
        position: relative;
    }

    input {
        font-size: 16px;
        background-color: white;
        border: 2px solid var(--input-border);
        border-radius: 10px;
        padding: 20px 10px;
        box-shadow: inset 0 1px 2px var(--ytd-searchbox-legacy-border-shadow-color);
        height: 40px;
        width: 600px;
        margin-bottom: 10px;
        box-shadow: 0px 2px 7px #BFBFBF;
    }

     input:placeholder-shown {
        font-style: italic;
        font-size: 12px;
        color: #999999;
     }

    input:focus{
        outline: none !important;
        border:1px solid var(--ytd-searchbox-legacy-border-shadow-color);
        box-shadow: 0 0 10px #BDBDBD;
    }

    .dropzone-wrapper {
        border: 2px dashed #91b0b3;
        color: #92b0b3;
        position: relative;
        height: 150px;
        width: 600px;
    }

    .dropzone-desc {
        position: absolute;
        margin: 0 auto;
        left: 0;
        right: 0;
        text-align: center;
        width: 600px;
        top: 50px;
        font-size: 16px;
    }

    .dropzone,
    .dropzone:focus {
        position: absolute;
        outline: none !important;
        width: 600px;
        height: 150px;
        cursor: pointer;
        opacity: 0;
    }

    .dropzone-wrapper:hover,
    .dropzone-wrapper.dragover {
        background: #ecf0f5;
    }

    .desc input{
        height: 100px;
        position: relative;
    }

    .desc input:placeholder-shown {
        font-style: italic;
        font-size: 12px;
        color: #999999;
    }

    form .sub-judul{
        margin-bottom:7px;
        padding-bottom:0;
    }

    .target-wrapper{
        position: relative;
    }

    .desc-wrapper{
        position:relative;
    }

    .desc-wrapper textarea{
        border: none;
        box-shadow: 0px 2px 7px #BFBFBF;
        resize: none;
        position:relative;
    }

    .desc-wrapper textarea:active ,.desc-wrapper textarea:focus 
    {
        border-style: 3px solid black;
        outline:0;
        
    }

    .button{
        border-radius: 20px;
        border: 2px solid var(--input-border);
        padding: 2px 10px;
        transition: 0.3s;
        background-color: #4d83d1;
        height: 40px;
        width: 270px;
        margin-top: 25px;
        margin-bottom: 20px;
        color:white;
        font-size: 16px;
        position: absolute;
        display: block;
    }

    .button:hover {
        box-shadow: 1px -1px 11px 0px rgba(51,119,214,0.43);
        -webkit-box-shadow: 1px -1px 11px 0px rgba(51,119,214,0.43);
        -moz-box-shadow: 1px -1px 11px 0px rgba(51,119,214,0.43);
        background-color: #3C7DD9;
    }

    .button:active,.button:focus 
    {
        border-style: 3px solid black;
        outline:0;
    }

`

export default BuatPetisi