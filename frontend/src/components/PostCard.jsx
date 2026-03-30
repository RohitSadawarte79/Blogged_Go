import React from "react";
import { useState, useEffect } from "react"
import formatViews from "../utils/formatters";



function PostCard({ post }) {
    const likes = formatViews(post.likes);
    const dislikes = formatViews(post.dislikes)
    return (
        <>

            <div className="hover:scale-105 duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg transition-all cursor-pointer w-full flex flex-col lg:flex-row bg-blog-surface font-sans shadow-lg border border-neutral-800 overflow-hidden">
                <img src={post.imageUrl} alt={post.title} className="w-full lg:w-[40%] h-64 lg:h-auto object-cover" />

                <div className="w-full lg:w-[60%] flex flex-col justify-center p-4 sm:p-6 md:p-8 text-black dark:text-white">
                    <div className="username">
                        <div id="pfp">{post.username}</div>
                        <div id="username"></div>
                    </div>
                    <div className="content">
                        <h1 id="title" className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2">
                            {post.title}
                        </h1>
                        <p id="content-summary" className="text-xs sm:text-sm md:text-base text-neutral-600 dark:text-neutral-300 mb-4 line-clamp-2">
                            {post.content}
                        </p>
                    </div>

                    <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base text-neutral-500 dark:text-neutral-400">
                        <p id="likecount" className="ml-2">{likes}</p>
                        <svg className="hover:scale-115 hover:fill-blue-500 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="thumbs-up"><path d="M21.3,10.08A3,3,0,0,0,19,9H14.44L15,7.57A4.13,4.13,0,0,0,11.11,2a1,1,0,0,0-.91.59L7.35,9H5a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17.73a3,3,0,0,0,2.95-2.46l1.27-7A3,3,0,0,0,21.3,10.08ZM7,20H5a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H7Zm13-7.82-1.27,7a1,1,0,0,1-1,.82H9V10.21l2.72-6.12A2.11,2.11,0,0,1,13.1,6.87L12.57,8.3A2,2,0,0,0,14.44,11H19a1,1,0,0,1,.77.36A1,1,0,0,1,20,12.18Z"></path></svg>
                        <p id="dislikecount" className="ml-2">{dislikes}</p>
                        <svg className="hover:scale-115 hover:fill-red-500 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="thumbs-down"><path d="M19,2H6.27A3,3,0,0,0,3.32,4.46l-1.27,7A3,3,0,0,0,5,15H9.56L9,16.43A4.13,4.13,0,0,0,12.89,22a1,1,0,0,0,.91-.59L16.65,15H19a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2ZM15,13.79l-2.72,6.12a2.13,2.13,0,0,1-1.38-2.78l.53-1.43A2,2,0,0,0,9.56,13H5a1,1,0,0,1-.77-.36A1,1,0,0,1,4,11.82l1.27-7a1,1,0,0,1,1-.82H15ZM20,12a1,1,0,0,1-1,1H17V4h2a1,1,0,0,1,1,1Z"></path></svg>
                    </div>
                </div>
            </div>
        </>
    )
}


export default PostCard