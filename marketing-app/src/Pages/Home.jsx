import React, { useState, useEffect } from 'react'
import { IntroPost, PostListing } from '../Components/Layout'
import { Search } from '../Components/Shared'
import GlobalApi from '../Services/GlobalApi'

function Home() {
  const [post,setPost]=useState([])
  const [orgPost,setOrgPost]=useState([])

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
        tag:item.attributes.category.data.attributes.name,
        content:item.attributes.content,
        excerpt:item.attributes.excerpt,
        readingTime:item.attributes.readingTime,
        title:item.attributes.title,
        featuredimage:item.attributes.featuredimage.data.attributes.url,


      }));
      setPost(result)
      setOrgPost(result);
      
    })
  }

  const filterPost=(tag)=>{
    console.log(typeof(tag))
    if(tag === 'All')
    {
      setPost(orgPost);
      return ;
    }
    const result=orgPost.filter(item=>item.tag==tag);
    setPost(result);
  }

  return (
    <div>
      <Search selectedTag={(tag)=>filterPost(tag)}/>
      {post.length > 0 ? <IntroPost post={post[0]}/> : null}
      {post.length > 0 ? <PostListing post={post}/> : null}
    </div>
  )
}

export default Home