'use client'
import React from 'react'

export default function Coinify() {
  return (
    <div className='flex flex-col'>
      <h2 className='text-2xl text-white'>Coinify in iframe</h2>
      <iframe
        src="https://checkout.sandbox.coinify.com/demo/payment"
        className='h-screen w-1/4'/>
    </div>
  )
}
