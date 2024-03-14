import React from 'react'

function PostListing({post}) {
  return (
    // <div>PostListing</div>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                    mt-10 px-10 md:px-15 lg:px-32'>
                      
      {post.map((item) => (
        <div key={item.id} className='m-4 cursor-pointer'>
          <img src={'http://localhost:1337' + item.featuredimage} className='w-full rounded-2xl object-cover h-[200px]' />
          <h3 className='text-red-500 mt-3'>{item.category.name}</h3>
          <h3 className='font-bold mt-3'>{item.title}</h3>
          <h3 className='line-clamp-3 text-gray-400 mt-3'>{item.content}</h3>
          <div className='flex items-center mt-5'>
            <img src={'http://localhost:1337/uploads/my_Image_90c67e0cc8.jpg'} className='w-[35px] rounded-full'/>
            <div className='ml-2'>
              <h3 className='font-bold text-[12px]'>{item.author.name}</h3>
              <h3 className='text-gray-500 text-[10px]'>{item.author.publishedAt}</h3>
              {/* <h3 className='text-gray-500'>{item.author.bio}</h3> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostListing