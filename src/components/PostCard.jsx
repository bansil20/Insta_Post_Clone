import React from 'react'
import appwriteService from '../appwrite/Config'

function PostCard({$id, title, featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className="w-full bg-gray-100 rounded-xl p-4">
            <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='rounded-xl' />
        </div>
        <h2 className='mt-2 text-lg font-semibold'>{title}</h2>
    </Link>
  )
}

export default PostCard