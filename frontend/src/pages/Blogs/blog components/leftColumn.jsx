import React from "react";
import FeaturedPost from "./LeftColumnComponents/featuredPost";
import BlogSection from "./LeftColumnComponents/blogSection";
import Newsletter from "./RightColumn components/Newsletter";


function LeftColumn() {
    return (
        <>
            <div className="w-full lg:w-[60vw] flex flex-col">
                <div className="explore-blogs border-l-[3px] border-[#cc0000] pl-4 mb-8">
                    <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight leading-none font-sans uppercase">
                        EXPLORE BLOGS
                    </h2>
                    <p className="text-[10px] sm:text-xs tracking-[0.2em] text-[#a3a3a3] mt-2 font-sans uppercase">
                        TOP CURATED BLOGS FOR YOU
                    </p>
                </div>
                <FeaturedPost />
                <div>
                    <BlogSection />
                </div>



            </div>
        </>
    )
}


export default LeftColumn