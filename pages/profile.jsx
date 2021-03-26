import React, { useState} from 'react'
import { css } from '@emotion/react'
import ProfileCart from '../components/profileCart'
import Footer from '../components/footer'

 const Profile = () => {

  return (
    <>
      <div css={style}>
        <ProfileCart/>

        <Footer className="extra"/>
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

export default Profile