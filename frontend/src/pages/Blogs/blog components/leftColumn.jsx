import React from "react";
import Search from "./RightColumn components/Search";
import TopStories from "./RightColumn components/TopStories";
import NewsLetter from "./RightColumn components/Newsletter";
import FeaturedPost from "./LeftColumnComponents/featuredPost";
import BlogSection from "./LeftColumnComponents/blogSection";


function LeftColumn() {
    return (
        <>
            <div className="w-full lg:w-[60vw]">
                <FeaturedPost />
                <BlogSection />
            </div>
        </>
    )
}


export default LeftColumn