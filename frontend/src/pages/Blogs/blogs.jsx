import React from "react";
import LeftColumn from "./blog components/leftColumn";
import RightColumn from "./blog components/rightColumn";








function Blogs() {
    return (
        <>
            <div className="Container p-5 flex justify-between">
                <LeftColumn />
                <RightColumn />
            </div>
        </>
    )
}


export default Blogs