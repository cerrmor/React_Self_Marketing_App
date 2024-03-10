import React, { useEffect } from 'react'


function IntroPost({post}) {

  return (
    <div className='grid grid-cols-1 
                    md:grid-cols-2
                    mt-10 px-10 md:px-15 lg:px-32 gap-8'>
      <img src={'http://localhost:1337'+post.featuredimage} className='rounded-2xl object-cover w-full h-full'/>
      <div>
        <h4 className='text-red-500'>{post.category.name}</h4>
        <h2 className='text-[23px] font-bold mt-5'>{post.title}</h2>
        <h4 className='line-clamp-6 text-gray-400 mt-5'>{post.content}</h4>
        <div className='flex items-center mt-5'>
        <img src={'http://localhost:1337/uploads/my_Image_90c67e0cc8.jpg'} className='w-[50px] rounded-full'/>
        <div className='ml-2'>
          <h3 className='font-bold'>{post.author.name}</h3>
          <h3 className='text-gray-500'>{post.author.publishedAt}</h3>
          <h3 className='text-gray-500'>{post.author.bio}</h3>
        </div>
      </div>
      
      </div>
    </div>
  )
}

export default IntroPost

