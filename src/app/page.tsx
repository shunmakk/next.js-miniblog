import { getALLArticles } from "@/blogAPI ";
import { supabase } from "@/utils/supabaseClient";
import Image from "next/image";
import { useEffect } from "react";
import ArticleList from "./components/ArticleList";

export default  async function Home()  {
  
  //APIから叩き出したデータ
  //  const articles = await  getALLArticles();

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${API_URL}/api` , { cache: "no-store" });


  // console.log('HTTP status code:', res.status);
  // console.log(API_URL)

  // const text = await res.text();
  // console.log("Raw response", text)

  const articles = await res.json();
  // console.log(articles)

  


  return (
   <div className="md:flex">
   <section className="w-full md:w-2/3  flex flex-col  items-center px-3">
   <ArticleList articles={articles}/>
   </section>
   <aside className="w-full md:w-1/3 flex flex-col items-center px-3 md:pl-6">
        <div className="bg-white shadow-md rounded p-4 mb-6 mt-4">
          <h3 className="font-bold text-gray-900 mb-2">About Me</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>
        <div className="bg-white shadow-md rounded p-4 mb-6 mt-4 w-full">
          <h3 className="font-bold text-gray-900 mb-2">Category</h3>
          <ul className="text-gray-600 mt-2">
            <li>
              <a href="#">Next.js</a>
            </li>
            <li>
              <a href="#">React</a>
            </li>
            <li>
              <a href="#">Node.js</a>
            </li>
            <li>
              <a href="#">HTMX</a>
            </li>
          </ul>
        </div>
      </aside>

   </div>
  );
}