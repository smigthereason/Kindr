import Hero from '@/components/Hero'
import Charities from '@/components/Home/Charities'
import Stories from '@/components/Home/Stories'
import React from 'react'

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
      <Hero />
      <Charities />
      <Stories />      
    </div>
    </section>
  )
}

export default Home