import React from "react";
import formatViews from "../utils/formatters";

function PostCard({ post }) {
    const likes = formatViews(post.likes);
    const dislikes = formatViews(post.dislikes);

    return (
        <div className="flex flex-col sm:flex-row w-full bg-blog-surface font-sans shadow-lg border border-neutral-800 rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl hover:scale-[1.02] cursor-pointer">


            <div className="w-full w-flex sm:w-2/5 md:w-[1/3] ">
                <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full self-center h-48 sm:h-full object-center object-cover object-fit"
                />
            </div>


            <div className="flex flex-col flex-1 p-4 sm:p-5 md:p-6 text-black dark:text-white justify-center">


                <div className="mb-2">
                    <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                        {post.username}
                    </span>
                </div>


                <div className="mb-4">
                    <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 line-clamp-2">
                        {post.title}
                    </h1>
                    <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 line-clamp-2 sm:line-clamp-3">
                        {post.content}
                    </p>
                </div>


                <div className="flex items-center gap-4 text-sm md:text-base text-neutral-500 dark:text-neutral-400 mt-auto">


                    <div className="flex items-center gap-1.5 group">
                        <svg className="w-5 h-5 fill-current transition-transform duration-200 group-hover:scale-110 group-hover:fill-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="thumbs-up">
                            <path d="M21.3,10.08A3,3,0,0,0,19,9H14.44L15,7.57A4.13,4.13,0,0,0,11.11,2a1,1,0,0,0-.91.59L7.35,9H5a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17.73a3,3,0,0,0,2.95-2.46l1.27-7A3,3,0,0,0,21.3,10.08ZM7,20H5a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H7Zm13-7.82-1.27,7a1,1,0,0,1-1,.82H9V10.21l2.72-6.12A2.11,2.11,0,0,1,13.1,6.87L12.57,8.3A2,2,0,0,0,14.44,11H19a1,1,0,0,1,.77.36A1,1,0,0,1,20,12.18Z"></path>
                        </svg>
                        <span>{likes}</span>
                    </div>


                    <div className="flex items-center gap-1.5 group">
                        <svg className="w-5 h-5 fill-current transition-transform duration-200 group-hover:scale-110 group-hover:fill-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="thumbs-down">
                            <path d="M19,2H6.27A3,3,0,0,0,3.32,4.46l-1.27,7A3,3,0,0,0,5,15H9.56L9,16.43A4.13,4.13,0,0,0,12.89,22a1,1,0,0,0,.91-.59L16.65,15H19a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2ZM15,13.79l-2.72,6.12a2.13,2.13,0,0,1-1.38-2.78l.53-1.43A2,2,0,0,0,9.56,13H5a1,1,0,0,1-.77-.36A1,1,0,0,1,4,11.82l1.27-7a1,1,0,0,1,1-.82H15ZM20,12a1,1,0,0,1-1,1H17V4h2a1,1,0,0,1,1,1Z"></path>
                        </svg>
                        <span>{dislikes}</span>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default PostCard;