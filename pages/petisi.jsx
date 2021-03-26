import React, { useState} from 'react'
import { css } from '@emotion/react'
import Footer from '../components/footer'
import PetisiCard from '../components/petisiCard'
import Comment from '../components/comment'
import TulisComment from '../components/tulisComment'

 const Petisi = () => {

  return (
    <>
      <div css={style}>
        
        <PetisiCard/>
        <TulisComment/>
        <Comment/>
        <Comment/>
        
        <Footer/>

        

      </div>
    </>
  )
}

const style = css`
    background: #F2F2F2;
    height: 100%;
    width: 100%;
    
`

export default Petisi