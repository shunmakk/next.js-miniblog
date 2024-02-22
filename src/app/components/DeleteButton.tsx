'use client'
import { deleteArticle } from '@/blogAPI ';
import { useRouter } from 'next/navigation';
import React from 'react'

type DeleteButtonProps = {
    id: string;
}

const DeleteButton = ({id}: DeleteButtonProps) => {

    const router = useRouter();

    const handleDelete = async () => {
        // await deleteArticle(id);

        window.alert('本当に削除しますか?')


   const API_URL = process.env.NEXT_PUBLIC_API_URL;


 await fetch(`${API_URL}/api/${id}` ,{
     method: 'DELETE',
 }); 




        router.push('/');
        router.refresh();
    }

  return (
    <div className='bg-red-500 hover:bg-red-600 rounded-md py-2 px-5 inline cursor-pointer text-white' onClick={handleDelete}>削除</div>
  )
}

export default DeleteButton