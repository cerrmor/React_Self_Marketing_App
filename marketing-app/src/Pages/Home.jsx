import React from 'react'
import { Header, Footer, IntroPost, Post } from '../Components/Layout'
import { Search } from '../Components/Shared'

function Home() {
  return (
    <div>
      <Header/>
      <Search/>
      <IntroPost/>
      <Post/>
      <Footer/>
    </div>
  )
}

export default Home