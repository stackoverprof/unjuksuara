import React, { useEffect } from 'react'
import { css } from '@emotion/react'

const card = ({ title, desc }) => { 

    useEffect(() => {
        console.log('triggered')
        
        return () => {
            console.log('unmounted')
        }
    }, [])  

    return (
        <div css={style} className="card">
            <h1>{title}</h1>
            <p className="desc">{desc}</p>
        </div>
    )
}

const style = css`
    height: 200px;
    width: 200px;
    background: pink;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .desc {
        font-size: 32px;
    }
`

export default card
