import React from "react";
import { motion } from "framer-motion";






function NavBar() {


    return (
        <>
            <div className="w-full h-[60px] flex items-center justify-between px-6 lg:px-12">
                {/* Left Wing: Logo */}
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

                {/* Center: Links */}
                <div className="flex justify-center shrink-0">
                    <div className="flex gap-6 md:gap-10">
                        <p className="hover:text-red-500 cursor-pointer">ABOUT</p>
                        <p className="hover:text-red-500 cursor-pointer">POST BLOGS</p>
                        <p className="hover:text-red-500 cursor-pointer">BLOGS</p>
                    </div>
                </div>

                {/* Right Wing: Profile */}
                <div className="flex-1 flex justify-end items-center">
                    <motion.div
                        className="relative flex items-center justify-center h-[44px] w-[44px] cursor-pointer group"
                        initial="rest"
                        animate="rest"
                        whileHover="hover"
                    >
                        <motion.div
                            className="absolute inset-0 w-full h-full"
                            variants={{
                                rest: { rotate: 45 },
                                hover: { rotate: 405 }
                            }}
                            transition={{ type: "spring", stiffness: 120, damping: 14 }}
                        >
                            <div className="absolute left-[10px] top-[10px] w-[3px] h-[32px] bg-white group-hover:bg-red-500 transition-colors duration-300"></div>
                            <div className="absolute right-[10px] top-[2px] w-[2px] h-[32px] bg-white group-hover:bg-red-500 transition-colors duration-300"></div>
                            <div className="absolute top-[10px] left-[2px] h-[3px] w-[32px] bg-white group-hover:bg-red-500 transition-colors duration-300"></div>
                            <div className="absolute bottom-[10px] left-[10px] h-[2px] w-[32px] bg-white group-hover:bg-red-500 transition-colors duration-300"></div>
                        </motion.div>
                        <div className="absolute z-[-1] -rotate-45 w-[22px] h-[22px] overflow-hidden pointer-events-none">
                            <img className="w-full h-full object-cover rounded-full rotate-45 scale-[1]" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default NavBar