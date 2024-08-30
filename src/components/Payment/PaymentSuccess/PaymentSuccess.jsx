import React from 'react'
import { useSearchParams } from 'react-router-dom'

const PaymentSuccess = () => {

    const search = useSearchParams()[0]
    const refrenceid = search.get("refrence") 
    return (
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'100%',height:'100vh'}}>
            <h1>Payment Success</h1>
            <p>payment id: {refrenceid}</p>
        </div>
    )
}

export default PaymentSuccess