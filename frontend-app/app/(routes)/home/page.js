"use client"
import { useUser } from '@clerk/nextjs'
import React from 'react'
import Banner from './_components/Banner'

function Home() {
  const {user} = useUser();
  return (
    <div className='p-5'>
      {!user && <Banner/>}
    </div>
  )
}

export default Home