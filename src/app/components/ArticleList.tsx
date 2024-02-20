import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Article } from '@/types'
import ArticleCard from './ArticleCard' // 修正: ArticlleCard -> ArticleCard


type ArticleListProps = {
    articles: Article[];
}

const ArticleList = ({articles}: ArticleListProps) => {
  return (
    <div>
      {articles.map((article) => (
        <ArticleCard article={article} key={article.id} /> // 修正: ArticlleCard -> ArticleCard
      ))}
    </div>
  )
}

export default ArticleList
