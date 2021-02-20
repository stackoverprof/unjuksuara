import React, { useState} from 'react'
import Card from '../../components/card'

const Contact = () => {
    const [showCard, setShowCard] = useState(true)

    return (
        <>
            <div className="card">
                <h1>KOntak</h1>
                <button onClick={() => setShowCard(!showCard)}>Button</button>
                {showCard && <Card title="Alamat" desc="DIY, Kota Yogyakarta"/>}
            </div>

            
        </>
    )
}

export default Contact