import React from "react";
import { motion } from "framer-motion";






function NavBar({ isSidebarOpen, setIsSidebarOpen }) {

    return (
        <>
            <div className="bg-[#141414]/70 backdrop-blur-lg w-full h-[60px] border-[#434343] border-b flex items-center justify-between px-6 lg:px-12 fixed top-0 z-40">

                <div className="flex-1 flex justify-start">
                    <div className="logo flex">
                        <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl text-blog-text flex items-baseline font-bold tracking-tight">
                            BLOGGED
                        </h1>
                        <div className="flex items-end pb-2">
                            <div className="w-2 h-2 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 bg-red-500 rounded-full ml-0.5"></div>
                        </div>
                    </div>
                </div>


                <div className="flex justify-center shrink-0">
                    <div className="flex gap-6 md:gap-10">
                        <p className="hover:text-red-500 cursor-pointer transition-colors origin-left hover:scale-105 duration-200 block">ABOUT</p>
                        <p className="hover:text-red-500 cursor-pointer transition-colors origin-left hover:scale-105 duration-200 block">POST BLOGS</p>
                        <p className="hover:text-red-500 cursor-pointer transition-colors origin-left hover:scale-105 duration-200 block">BLOGS</p>
                    </div>
                </div>


                <div className="flex-1 flex justify-end items-center">
                    {/* The animated cross button has been extracted to Layout.jsx to escape the z-index trap! */}
                    <div className="w-[44px] h-[44px]"></div>
                </div>
            </div>
        </>
    )
}

export default NavBar