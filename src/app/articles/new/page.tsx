'use client'
import Loading from '@/app/loading';
import { createArticle } from '@/blogAPI ';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const CreateBlogPage = () => {

    const router = useRouter();

    const [id,setId] = useState<string>("");
    const [title,setTitle] = useState<string>("");
    const [content,setContent] = useState<string>("");
    const [loading,setLoading] = useState<boolean>(false);

    const API_URL = process.env.NEXT_PUBLIC_API_URL;

   const handeleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

     e.preventDefault();

     setLoading(true);

    //  console.log(id,title,content)

    //  await  createArticle(id,title,content);
 


    await fetch(`${API_URL}/api/create`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({id,title,content})
     }); 


     //リダイレクト
     router.push("/")
     router.refresh();
     


   };


  return (
    <div className='min-h-screen py-8 px-4 md:px-12'>
        <h2 className='text-2xl font-bold  flex justify-center items-center'>Blogを新規作成する</h2>

        <form className='bg-state-200 p-6 rounded shadow-lg' onSubmit={handeleSubmit}>
            <div className='mb-4'>
                <label className='tbext-gray-700 text-sm font-bold mb-2' htmlFor='url'>URL</label>
                <input  id="url"   type="text" className='shadow border rounded w-full py-2 px-3 text-gray-700 reading-tight  focus:outline-none' 
                onChange={(e) => setId(e.target.value)}
                />
            </div>
            <div className='mb-4'>
                <label className='text-gray-700 text-sm font-bold mb-2' htmlFor='title'>タイトル</label>
                <input  id="title"   type="text" className='shadow border rounded w-full py-2 px-3 text-gray-700 reading-tight  focus:outline-none' 
                onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className='mb-4'>
                <label className='text-gray-700 text-sm font-bold mb-2'>本文</label>
                <textarea  className='shadow border rounded w-full py-2 px-3 text-gray-700 reading-tight  focus:outline-none' 
                onChange={(e) => setContent(e.target.value)} />
            </div>
            <button type="submit" className={`py-2 px-4 border rounded-md  ${loading ?"bg-orange-400 cursor-not-allowed rounded-full animate-spin w-16 h-16 border-t-4" :"bg-orange-500 hover:bg-orange-700"}`} disabled={loading}  >投稿する</button>
        </form>
    </div>
  )
}

export default   CreateBlogPage;