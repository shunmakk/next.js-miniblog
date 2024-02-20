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


//ブログ投稿用のAPI
export   const createArticle = async(id:string, title:string, content:string):Promise<Article> => {

    const currentDatetime = new Date().toISOString();

    const res = await fetch(`http://localhost:3001/posts`,{
        method: "post",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({id, title, content, createdAt: currentDatetime})
    }); 

    if(!res.ok){
    throw new   Error("エラーが発生しました");
    };

    await new Promise((resolve) => setTimeout(resolve,1000));

    const newarticles = await res.json();
    return newarticles;
}


//ブログを削除するAPI
export   const deleteArticle = async(id:string):Promise<Article> => {

    const res = await fetch(`http://localhost:3001/posts/${id}`,{
        method: "DELETE",
    }); 

    if(!res.ok){
    throw new   Error("エラーが発生しました");
    };

    await new Promise((resolve) => setTimeout(resolve,1000));

    const deletearticles = await res.json();
    return deletearticles;
}