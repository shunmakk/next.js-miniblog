import { notFound } from "next/navigation";
import { resolve } from "path";
import { Article } from "./types"


export   const getALLArticles = async():Promise<Article[]> => {
     const res = await fetch(`http://localhost:3001/posts`,{cache: "no-store"}); //SSR　更新頻度が高いから

     if(!res.ok){
     throw new   Error("エラーが発生しました");
     };

     await new Promise((resolve) => setTimeout(resolve,1000));


     
     const articles = await res.json();
     return articles;
}

//詳細ページを取得するAPIを叩く
export   const getDeTailArticles = async(id:string):Promise<Article> => {
    const res = await fetch(`http://localhost:3001/posts/${id}`,{next: {revalidate: 60}}); //ISR　更新頻度が高くないから


    if(res.status === 404){
        notFound();
    }

    if(!res.ok){
    throw new   Error("エラーが発生しました");
    };

    await new Promise((resolve) => setTimeout(resolve,1000));


    
    const articles = await res.json();
    return articles;
}