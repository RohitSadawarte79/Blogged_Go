import React, { useState } from "react";
import { motion } from "framer-motion";
import NavBar from "./navbar";
import Sidebar from "./sidebar";
import Footer from "./Footer";

function Layout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="relative min-h-screen flex flex-col overflow-x-hidden">

            <NavBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

            <Sidebar isSidebarOpen={isSidebarOpen} />

            <main className="p-4 md:p-8 flex-1 w-full mt-[60px]">
                {children}
            </main>

            <Footer />


            <div className="fixed z-[60] top-[18px] right-6 sm:hidden flex items-center justify-center cursor-pointer text-[#a3a3a3] hover:text-red-500 active:text-red-500 transition-colors group select-none">
                <svg className="group-hover:scale-110 group-active:scale-90 transition-all duration-200" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
            </div>

            <motion.div
                className="fixed z-[60] top-[8px] max-sm:hidden right-6 lg:right-12 flex items-center justify-center h-[44px] w-[44px] cursor-pointer group"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                initial="rest"
                animate={isSidebarOpen ? "open" : "rest"}
                whileHover={isSidebarOpen ? "openHover" : "hover"}
            >
                <motion.div
                    className="absolute inset-0 w-full h-full"
                    variants={{
                        rest: { rotate: 45 },
                        hover: { rotate: 405 },
                        open: { rotate: 225 },
                        openHover: { rotate: 225, scale: 0.9 }
                    }}
                    transition={{ type: "spring", stiffness: 120, damping: 14 }}
                >
                    <motion.div
                        className="absolute left-[10px] top-[10px] w-[3px] h-[32px] bg-white group-hover:bg-red-500 transition-colors duration-300"
                        variants={{ rest: { x: 0, y: 0 }, hover: { x: 0, y: 0 }, open: { x: 10.5, y: -4 }, openHover: { x: 10.5, y: -4 } }}
                    />
                    <motion.div
                        className="absolute right-[10px] top-[2px] w-[2px] h-[32px] bg-white group-hover:bg-red-500 transition-colors duration-300"
                        variants={{ rest: { x: 0, y: 0 }, hover: { x: 0, y: 0 }, open: { x: -11, y: 4 }, openHover: { x: -11, y: 4 } }}
                    />
                    <motion.div
                        className="absolute top-[10px] left-[2px] h-[3px] w-[32px] bg-white group-hover:bg-red-500 transition-colors duration-300"
                        variants={{ rest: { x: 0, y: 0 }, hover: { x: 0, y: 0 }, open: { x: 4, y: 10.5 }, openHover: { x: 4, y: 10.5 } }}
                    />
                    <motion.div
                        className="absolute bottom-[10px] left-[10px] h-[2px] w-[32px] bg-white group-hover:bg-red-500 transition-colors duration-300"
                        variants={{ rest: { x: 0, y: 0 }, hover: { x: 0, y: 0 }, open: { x: -4, y: -11 }, openHover: { x: -4, y: -11 } }}
                    />
                </motion.div>
                <motion.div
                    className="absolute z-[-1] -rotate-45 w-[22px] h-[22px] overflow-hidden pointer-events-none"
                    variants={{
                        rest: { opacity: 1, scale: 1 },
                        hover: { opacity: 1, scale: 1 },
                        open: { opacity: 0, scale: 0 },
                        openHover: { opacity: 0, scale: 0 }
                    }}
                    transition={{ duration: 0.2 }}
                >
                    <img className="w-full h-full object-cover rounded-full rotate-45 scale-[1]" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </motion.div>

            </motion.div>


        </div>
    )
}

export default Layout;