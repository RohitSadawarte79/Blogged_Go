import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function Sidebar({ isSidebarOpen }) {
    return (
        <AnimatePresence>
            {isSidebarOpen && (
                <>
                    {/* Dark Blurred Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black z-[40] pointer-events-none"
                    />

                    {/* Sliding Drawer Panel */}
                    <motion.aside
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed right-0 top-0 w-full sm:w-[400px] h-screen bg-[#1c1c1c] z-[50] border-l border-gray-800 p-8 shadow-2xl pt-28"
                    >
                        <div className="flex flex-col gap-6">

                            <ul className="flex flex-col gap-6 text-xl font-medium text-gray-400">
                                <li className="hover:text-red-500 cursor-pointer transition-colors origin-left hover:scale-105 duration-200 block">Profile</li>
                                <li className="hover:text-red-500 cursor-pointer transition-colors origin-left hover:scale-105 duration-200 block">Dashboard</li>
                                <li className="hover:text-red-500 cursor-pointer transition-colors origin-left hover:scale-105 duration-200 block">Messages</li>
                                <li className="hover:text-red-500 cursor-pointer transition-colors origin-left hover:scale-105 duration-200 block">Drafts</li>
                                <li className="hover:text-red-500 cursor-pointer transition-colors origin-left hover:scale-105 duration-200 block">Create New Post</li>
                            </ul>
                        </div>
                    </motion.aside>
                </>
            )}
        </AnimatePresence>
    )
}

export default Sidebar;