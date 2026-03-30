import React from "react";
import formatViews from "../../../../utils/formatters";


function TopStories({ stories }) {

    return (
        <div className="p-6 border border-[#333333]  max-w-md bg-[#1B1B1B]">
            <h2 className="text-xl font-bold text-white mb-5 uppercase tracking-wide">
                Top Stories <span className="text-red-500 font-medium normal-case tracking-normal">for you</span>
            </h2>
            <div className="flex flex-col gap-2">
                {/* Use .slice(0, 3) to grab at most 3 items, then .map to render them! */}
                {(stories || [
                    { title: "The Future of AI in Modern Web Development", username: "TechVisionary", views: 24500, userProfileImg: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150" },
                    { title: "Why I Switched from Next.js to Vite", username: "ReactNinja", views: 12400, userProfileImg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" },
                    { title: "10 Tailwind CSS Tricks You Probably Don't Know", username: "DesignGuru", views: 8900, userProfileImg: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150" },
                    { title: "This 4th story won't appear because of slice(0, 3)!", username: "HiddenUser", views: 100, userProfileImg: "" }
                ]).slice(0, 3).map((story, index) => (
                    <div
                        key={index}
                        className="group flex gap-4 p-3 md:-mx-3 rounded-xl hover:bg-[#252525] transition-colors duration-200 cursor-pointer"
                    >
                        <div className="shrink-0 w-11 h-11 rounded-full overflow-hidden bg-gray-700 border border-gray-600">
                            {story.userProfileImg ? (
                                <img
                                    className="w-full h-full object-cover"
                                    src={story.userProfileImg}
                                    alt={story.username}
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-300 font-bold text-lg">
                                    {story.username.charAt(0).toUpperCase()}
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col justify-center min-w-0">
                            <h3 className="text-base font-semibold text-gray-100 line-clamp-2 leading-tight group-hover:text-red-400 transition-colors">
                                {story.title}
                            </h3>
                            <div className="flex items-center gap-2 mt-1.5 text-xs text-gray-400 font-medium">
                                <span className="truncate">{story.username}</span>
                                <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                                <span>{formatViews(story.views)} views</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button className="w-full mt-4 py-3.5 border cursor-pointer border-[#333333] text-xs text-gray-400 font-bold tracking-widest hover:bg-white hover:text-black hover:border-white transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2 group">
                VIEW ALL RANKINGS
                <svg className="w-4 h-4 opacity-70 group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </button>
        </div>
    )
}


export default TopStories