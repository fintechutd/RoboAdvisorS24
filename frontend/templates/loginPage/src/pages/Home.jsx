import Logo from '../components/Logo'
import React from 'react'

function Home() {
  return (
    <>
    <Logo></Logo>
    <div className='h-screen flex justify-center text-white text-5xl p-5'>
      <div className=''>
        <h1 className=''>Welcome to the Homepage</h1>
        <h1 className='flex justify-center'>Nothing to do here</h1>
      </div>
    </div>
    </>
  )
}

export default Home