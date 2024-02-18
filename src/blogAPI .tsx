import { Article } from "./types"


export   const getALLArticles = async():Promise<Article[]> => {
     const res = await fetch(`http://localhost:3001/posts`,{cache: "no-store"}); //SSR　更新頻度が高いから
     
     const articles = await res.json();
     return articles;
}