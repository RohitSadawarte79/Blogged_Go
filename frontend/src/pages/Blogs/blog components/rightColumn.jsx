import React from "react";
import Search from "./RightColumn components/Search";
import TopStories from "./RightColumn components/TopStories";
import NewsLetter from "./RightColumn components/Newsletter";

function RightColumn() {
    return (
        <>

            <div className="Container inline-flex flex-col gap-10">
                <Search />
                <TopStories />
                <NewsLetter />
            </div>

        </>
    )
}


export default RightColumn