"use client"
import React, { useState } from "react"
import { PaystackButton } from "react-paystack"
import Image from "next/image"

const App = () => {
  const publicKey = "pk_test_579b64f84c9afa70dce2fb638479077310a4d8cd"
  const amount = 1000000
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: (data: any) =>{
      alert("Thanks for doing business with us! Come back soon!!"),
      console.log(data)
    },

    
    onClose: () => alert("Wait! Don't leave :("),
  }

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="">
        <div className="item">
          <div className="">
            <p>Test</p>
            <p>{amount}</p>
          </div>
        </div>
        <div className="checkout-form">
          <form>
            <label>Name</label>
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
            <label>Email</label>
            <input
              type="text"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Phone</label>
            <input
              type="text"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </form>
          <PaystackButton {...componentProps} />
        </div>
      </div>
    </div>
  )
}

export default App