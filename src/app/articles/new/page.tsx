import React from 'react'

const CreateBlogPage = () => {
  return (
    <div className='min-h-screen py-8 px-4 md:px-12'>
        <h2 className='text-2xl font-bold  flex justify-center items-center'>Blogを新規作成する</h2>

        <form className='bg-state-200 p-6 rounded shadow-lg'>
            <div className='mb-4'>
                <label className='text-gray-700 text-sm font-bold mb-2'>URL</label>
                <input type="text" className='shadow border rounded w-full py-2 px-3 text-gray-700 reading-tight  focus:outline-none'  />
            </div>
            <div className='mb-4'>
                <label className='text-gray-700 text-sm font-bold mb-2'>タイトル</label>
                <input type="text" className='shadow border rounded w-full py-2 px-3 text-gray-700 reading-tight  focus:outline-none'  />
            </div>
            <div className='mb-4'>
                <label className='text-gray-700 text-sm font-bold mb-2'>本文</label>
                <textarea  className='shadow border rounded w-full py-2 px-3 text-gray-700 reading-tight  focus:outline-none'  />
            </div>
            <button type="submit" className='py-2 px-4 border rounded-md bg-orange-400'>投稿する</button>
        </form>
    </div>
  )
}

export default   CreateBlogPage;