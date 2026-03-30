import React, { useState } from "react";
import { motion } from "framer-motion";

function Search() {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <motion.div
            className="relative flex  overflow-hidden items-center w-full max-w-md bg-[#1B1B1B] will-change-transform"
            initial={{ borderColor: "#474747", borderStyle: "solid", borderWidth: "1px", boxShadow: "0 0 0 rgba(239, 68, 68, 0)" }}
            animate={{
                borderColor: isFocused ? "#ef4444" : "#474747",
                boxShadow: isFocused ? "0 0 20px rgba(239, 68, 68, 0.2)" : "0 0 0 rgba(239, 68, 68, 0)"
            }}
            transition={{ duration: 0.3 }}
        >
            <input
                className="w-full bg-transparent text-sm md:text-base text-white placeholder-neutral-500 px-4 py-2 md:px-5 md:py-4 outline-none rounded-none"
                type="Search"
                placeholder="Search..."
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />

            <motion.button
                animate={{
                    scale: isFocused ? 1.1 : 1,
                    color: isFocused ? "#ef4444" : "#9ca3af" // Red when focused, gray when not
                }}
                whileHover={{ scale: 1.15, color: "#ef4444" }}
                transition={{ duration: 0.2 }}
                className="pr-4 md:pr-5 outline-none"
            >
                <svg
                    className="w-4 h-4 md:w-5 md:h-5 pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-4.35-4.35m1.6-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </motion.button>

            {/* Animating bottom line for a premium touch */}
            <motion.div
                className="absolute bottom-[-1px] left-0 h-[2px] bg-red-500 z-10"
                initial={{ width: "0%" }}
                animate={{ width: isFocused ? "100%" : "0%" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            />
        </motion.div>
    );
}

export default Search;