import React, { useState} from 'react'
import { css } from '@emotion/react'
import Footer from '../components/footer'
import PetisiCard from '../components/petisiCard'
import Comment from '../components/comment'


 const Petisi = () => {

  return (
    <>
      <div css={style}>
        
        <PetisiCard/>

        <Footer/>

        <Comment/>

      </div>
    </>
  )
}

const style = css`
    background: #F2F2F2;
    height: 100%;
    width: 100%;
    position: absolute;
    

`

export default Petisi