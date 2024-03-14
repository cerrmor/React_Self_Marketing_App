import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function PostDetails() {
    const {id}=useParams
    useEffect(()=>{
        console.log("id",id)
    },[])
  return (
    <div>PostDetails</div>
  )
}

export default PostDetails