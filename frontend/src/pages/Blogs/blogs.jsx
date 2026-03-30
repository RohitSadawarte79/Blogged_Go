import React from "react";
import LeftColumn from "./blog components/leftColumn";
import RightColumn from "./blog components/rightColumn";








function Blogs() {
    return (
        <>
            <div className="Container pb-15 p-4 md:p-5 flex flex-col lg:flex-row justify-between gap-10 lg:gap-4">
                <LeftColumn />
                <RightColumn />
            </div>
        </>
    )
}


export default Blogs