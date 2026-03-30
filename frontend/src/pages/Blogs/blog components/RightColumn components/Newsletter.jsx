import React from "react";


function NewsLetter() {
    return (
        <div className="pt-6 border-t border-red-500 max-w-md #141414">
            <div className="flex items-center gap-3 mb-2">
                <h2 className="text-lg font-bold text-white uppercase tracking-wide">
                    Subscribe to the Log
                </h2>
            </div>

            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                The most interesting stories in tech, science, and coding. Delivered weekly to your inbox.
            </p>

            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>
                    </div>
                    <input
                        type="email"
                        placeholder="user@domain.com"
                        required
                        className="w-full bg-[#121212] border border-[#333333]  pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-3.5 border cursor-pointer border-[#333333] text-xs text-gray-300 font-bold tracking-widest hover:bg-white hover:text-black hover:border-white transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2 group"
                >
                    SUBSCRIBE
                    <svg className="w-4 h-4 opacity-70 group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </button>
            </form>
        </div>
    )
}


export default NewsLetter