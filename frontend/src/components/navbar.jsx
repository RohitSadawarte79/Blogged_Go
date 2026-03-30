import React, { useState } from "react";
import { motion } from "framer-motion";






function NavBar({ isSidebarOpen, setIsSidebarOpen }) {
    const [isMobileSearchActive, setIsMobileSearchActive] = useState(false);

    return (
        <>
            <div className="bg-[#141414]/70 backdrop-blur-lg w-full h-[60px] border-[#434343] border-b flex items-center justify-between px-6 lg:px-12 fixed top-0 z-40">

                <div className="flex-1 flex justify-start">
                    <div className="logo flex">
                        <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl text-blog-text flex items-baseline font-bold tracking-tight">
                            BLOGGED
                        </h1>
                        <div className="flex items-end pb-[5.6px]">
                            <div className="w-2 h-2 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 bg-red-500 self-end rounded-full ml-0.5"></div>
                        </div>
                    </div>
                </div>


                <div className=" max-lg:mr-[10%] items-center gap-10 max-sm:hidden flex max-md:justify-end max-md:items-end justify-center ">

                    <div className="hidden lg:flex gap-6 md:gap-10">
                        <p className="hover:text-red-500 cursor-pointer transition-colors origin-left hover:scale-105 duration-200 block">ABOUT</p>
                        <p className="hover:text-red-500 cursor-pointer transition-colors origin-left hover:scale-105 duration-200 block">POST BLOGS</p>
                        <p className="hover:text-red-500 cursor-pointer transition-colors origin-left hover:scale-105 duration-200 block">BLOGS</p>
                    </div>

                    <div
                        className=" lg:hidden w-fit h-fit  cursor-pointer"
                        onClick={() => setIsMobileSearchActive(true)}
                    >
                        <svg className="w-6 h-6 self-end shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m1.6-5.65a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </div>
                    <div className="flex lg:hidden items-center gap-2 hover:text-red-500 cursor-pointer transition-all origin-left hover:scale-105 duration-200 group">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org" viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>
                    </div>
                </div>


                <div className="flex-1 max-lg:hidden flex justify-end items-center">

                    <div className="w-[44px] h-[44px]"></div>
                </div>
            </div>


            {isMobileSearchActive && (
                <div className="fixed inset-0 z-[80] bg-[#141414] flex flex-col lg:hidden">

                    <div className="flex items-center gap-3 p-4 border-b border-[#434343] bg-[#141414]/90 backdrop-blur-md">
                        <div className="relative flex-1 bg-[#1B1B1B] border border-[#ef4444] shadow-[0_0_20px_rgba(239,68,68,0.2)]">
                            <input
                                type="Search"
                                autoFocus
                                placeholder="Search blogs..."
                                className="w-full bg-transparent text-white px-4 py-3 outline-none"
                            />

                            <div className="absolute bottom-[-1px] left-0 h-[2px] bg-red-500 w-full" />
                        </div>
                        <button
                            onClick={() => setIsMobileSearchActive(false)}
                            className="text-[#a3a3a3] text-sm font-bold tracking-wider uppercase px-2 py-3 hover:text-white transition-colors"
                        >
                            Cancel
                        </button>
                    </div>


                    <div className="flex-1 overflow-y-auto p-6 bg-[#111111]">
                        <p className="text-[#a3a3a3] text-xs font-mono tracking-widest uppercase">REALTIME SEARCH RESULTS...</p>
                        {/* Go backend search results will render here */}
                    </div>
                </div>
            )}
        </>
    )
}

export default NavBar