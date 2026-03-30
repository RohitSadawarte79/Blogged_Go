import React from "react";
import Search from "./RightColumn components/Search";
import TopStories from "./RightColumn components/TopStories";
import NewsLetter from "./RightColumn components/Newsletter";

function RightColumn() {
    return (
        <>

            <div className="hidden lg:flex w-[30vw] flex-col gap-10">
                <Search />
                <TopStories />
                <NewsLetter />
            </div>

        </>
    )
}


export default RightColumn