import { Article } from '@/types'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';



type ArticleCardprops = {
    article: Article;
}


const ArticlleCard = ({article}:ArticleCardprops) => {
  return (
          <article className='shadow my-4 flex flex-col' key={article.id}>
           <Link href={`articles/${article.id}`} className='hover:opacity-75'>
               <Image src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${article.id}`} alt="トップ画像" width={1280} height={300}/>
           </Link>
           <div className='bg-gray-50 flex flex-col justify-start p-6'> 
               <Link href={`articles/${article.id}`} className='text-blue-500 pb-4 font-bold'>Next.js</Link>
               <Link href={`articles/${article.id}`} className='text-slate-900 text-3xl font-bold hover:text-gray-500 pb-3'>
                  {article.title}
               </Link>
               <p className='text-sm pb-3 text-slate-900'>published on {article.createdAt}</p>
               <Link href={`articles/${article.id}`} className='text-slate-900 pb-6'>
                  {article.content.length > 70 ?article.content.substring(0,70) + '...' :article.content}
               </Link>
               <Link href={`articles/${article.id}`} className='text-pink-800  hover:text-slate-500'>続きを読む</Link>
           </div>
       </article>
         )
}

export default ArticlleCard;