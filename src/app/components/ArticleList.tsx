import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const ArticleList = () => {
  return (
      <>
    <article className='shadow my-4 flex flex-col'>
        <Link href="#" className='hover:opacity-75'>
            <Image src="https://source.unsplash.com/collection/1346951/1000x500?sig=1" alt="トップ画像" width={1280} height={300}/>
        </Link>
        <div className='bg-gray-50 flex flex-col justify-start p-6'> 
            <Link href='#' className='text-blue-500 pb-4 font-bold'>Next.js</Link>
            <Link href='#' className='text-slate-900 text-3xl font-bold hover:text-gray-500 pb-3'>
                Next.jsって難しい
            </Link>
            <p className='text-sm pb-3 text-slate-900'>published on 2024 </p>
            <Link href='#' className='text-slate-900 pb-6'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia illum officiis eius unde velit, tempora amet doloribus. Quibusdam temporibus architecto eligendi esse vitae iste nisi placeat quod, molestias, quas minima!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente non facere eaque, fuga suscipit soluta est rem laborum perspiciatis reprehenderit eveniet, eius ex unde odit ea nobis atque minima assumenda.
                Ducimus iure nobis, vel eaque at pariatur assumenda voluptas vero veniam suscipit, distinctio sed. Quasi consequuntur ratione harum earum consequatur rerum eos, ab et laudantium, excepturi quia inventore dignissimos culpa.
            </Link>
            <Link href="#" className='text-pink-800  hover:text-slate-500'>続きを読む</Link>
        </div>
    </article>
    <article className='shadow my-4 flex flex-col'>
        <Link href="#" className='hover:opacity-75'>
            <Image src="https://source.unsplash.com/collection/1346951/1000x500?sig=5" alt="トップ画像" width={1280} height={300}/>
        </Link>
        <div className='bg-gray-50 flex flex-col justify-start p-6'> 
            <Link href='#' className='text-blue-500 pb-4 font-bold'>Next.js</Link>
            <Link href='#' className='text-slate-900 text-3xl font-bold hover:text-gray-500 pb-3'>
                Next.jsって難しい
            </Link>
            <p className='text-sm pb-3 text-slate-900'>published on 2024 </p>
            <Link href='#' className='text-slate-900 pb-6'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia illum officiis eius unde velit, tempora amet doloribus. Quibusdam temporibus architecto eligendi esse vitae iste nisi placeat quod, molestias, quas minima!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente non facere eaque, fuga suscipit soluta est rem laborum perspiciatis reprehenderit eveniet, eius ex unde odit ea nobis atque minima assumenda.
                Ducimus iure nobis, vel eaque at pariatur assumenda voluptas vero veniam suscipit, distinctio sed. Quasi consequuntur ratione harum earum consequatur rerum eos, ab et laudantium, excepturi quia inventore dignissimos culpa.
            </Link>
            <Link href="#" className='text-pink-800  hover:text-slate-500'>続きを読む</Link>
        </div>
    </article>
    </>
  )
}

export default ArticleList