import React from 'react'
import Header from '../Header'

export default function ErrorPage() {
  return (
    <div className='  bg-black ' >
      <div>
        <Header/>
      </div>
      <p className='text-[300px] text-center pt-[50px]  bg-black text-red-500 h-screen '>Error 404!</p>
    </div>
  )
}
