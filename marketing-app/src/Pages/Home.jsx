import React, { useState, useEffect } from 'react'
import { Header, Footer, IntroPost, PostListing } from '../Components/Layout'
import { Search } from '../Components/Shared'
import GlobalApi from '../Services/GlobalApi'

function Home() {
  const [post,setPost]=useState([])
  useEffect(()=>{
    getPost();
  },[])
  const getPost=()=>{
    GlobalApi.getPost.then(resp=>{
      //console.log(resp)
      const result=resp.data.data.map(item=>({
        id:item.id,
        author:item.attributes.author.data.attributes,
        //bioImage:item.attributes.author.bioImage.data.attributes.url,
        category:item.attributes.category.data.attributes,
        content:item.attributes.content,
        excerpt:item.attributes.excerpt,
        readingTime:item.attributes.readingTime,
        title:item.attributes.title,
        featuredimage:item.attributes.featuredimage.data.attributes.url,


      }));
      setPost(result)
      //console.log(result)
      
    })
  }
  return (
    <div className='p-[20px]'>
      <Header/>
      <Search/>
      {post.length > 0 ? <IntroPost post={post[0]}/> : null}
      {post.length > 0 ? <PostListing post={post}/> : null}
      <Footer/>
    </div>
  )
}

export default Home