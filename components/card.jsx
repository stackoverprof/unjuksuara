import React, { useEffect } from 'react'

const card = ({ title, desc }) => { 

    useEffect(() => {
        console.log('triggered')
        
        return () => {
            console.log('unmounted')
        }
    }, [])  

    return (
        <>
            <div className="card">
                <h1>{title}</h1>
                <p>{desc}</p>
            </div>
            <style jsx>{`
                .card {
                    height: 200px;
                    width: 200px;
                    background: pink;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                }
            `}</style>
        </>
    )
}

export default card
