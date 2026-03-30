import React, { useState } from "react";

function BottomBar() {
    const [isMobileSearchActive, setIsMobileSearchActive] = useState(false);

    return (
        <>
            <div className="fixed bottom-0 left-0 w-full h-[65px] bg-[#141414]/90 backdrop-blur-xl border-t border-[#434343] z-50 flex items-center justify-around text-[#a3a3a3]">


                <div className="flex flex-col items-center justify-center w-full h-full cursor-pointer hover:text-red-500 active:text-red-500 transition-colors group select-none">
                    <svg className="w-6 h-6 group-hover:scale-110 group-active:scale-90 transition-all duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                </div>


                <div
                    className="flex flex-col items-center justify-center w-full h-full cursor-pointer hover:text-red-500 active:text-red-500 transition-colors group select-none"
                    onClick={() => setIsMobileSearchActive(true)}
                >
                    <svg className="w-6 h-6 group-hover:scale-110 group-active:scale-90 transition-all duration-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m1.6-5.65a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>


                <div className="flex flex-col items-center justify-center w-full h-full cursor-pointer text-[#a3a3a3] hover:text-red-500 active:text-red-500 transition-colors group select-none">
                    <svg className="w-6 h-6 group-hover:scale-110 group-active:scale-90 transition-all duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                </div>


                <div className="flex flex-col items-center justify-center w-full h-full cursor-pointer hover:text-red-500 active:text-red-500 transition-colors group select-none">
                    <svg className="w-6 h-6 group-hover:scale-110 group-active:scale-90 transition-all duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                </div>
            </div>


            {isMobileSearchActive && (
                <div className="fixed inset-0 z-[80] bg-[#141414] flex flex-col">
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

export default BottomBar