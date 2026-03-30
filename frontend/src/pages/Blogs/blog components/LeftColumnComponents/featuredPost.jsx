import React from "react";


const dummyPost = {
    title: "The Structural Integrity of Minimalist Web Systems",
    summary: "Exploring why the 'less is more' approach is failing in modern SaaS and how technical brutalism provides the necessary architectural friction.",
    Username: "ArchitectMind",
    date: "March 29, 2026",
    userProfileImg: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150",
};

function FeaturedPost({ post = dummyPost }) {
    return (
        <div className="w-full bg-[#F4F1EA] text-[#131313] overflow-hidden">

            <div className="flex items-center justify-between px-4 pt-3 pb-3 md:px-6 md:pt-5 md:pb-4">
                <span className="inline-block bg-[#131313] text-[#F4F1EA] text-[10px] font-bold tracking-widest uppercase px-3 py-1">
                    Featured Insight
                </span>
                <p className="text-[11px] text-[#888] font-medium tracking-wider uppercase">
                    {post.date}
                </p>
            </div>


            <div className="mx-4 md:mx-6 h-px bg-[#D8D4CC]"></div>


            <div className="px-4 pb-4 pt-3 md:px-6 md:pb-6 md:pt-5 flex flex-col gap-3 md:gap-4">
                <h1 className="text-xl md:text-2xl font-bold leading-snug tracking-tight text-[#131313]">
                    {post.title}
                </h1>
                <p className="text-sm text-[#555] leading-relaxed">
                    {post.summary}
                </p>


                <div className="flex items-center gap-3 mt-1">
                    <div className="shrink-0 w-9 h-9 rounded-full overflow-hidden bg-gray-300 border-2 border-[#D8D4CC]">
                        {post.userProfileImg ? (
                            <img className="w-full h-full object-cover" src={post.userProfileImg} alt={post.Username} />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-[#131313] font-bold text-sm bg-gray-200">
                                {post.Username?.charAt(0).toUpperCase()}
                            </div>
                        )}
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-[#131313]">{post.Username}</p>
                        <p className="text-[11px] text-[#888]">Author</p>
                    </div>
                </div>


                <button className="w-full active:bg-[#131313] active:text-[#F4F1EA] md:w-[200px] mt-2 py-2.5 md:py-3.5 border-2 border-[#131313] text-[10px] md:text-xs text-[#131313] font-bold tracking-widest uppercase hover:bg-[#131313] hover:text-[#F4F1EA] hover:border-[#131313] transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2 group cursor-pointer">
                    Read Full Post
                    <svg className="w-4 h-4 opacity-100 group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </button>
            </div>
        </div>
    )
}


export default FeaturedPost


