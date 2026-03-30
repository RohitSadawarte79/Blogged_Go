import React, { useState } from "react";
import PostCard from "../../../../components/PostCard";

const dummyBlogs = [
    {
        id: 1,
        title: "Micro-Frontends: Is the Complexity Worth It?",
        content: "A deep dive into when you should actually split your React applications, and when a monolith is just better.",
        imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
        likes: 1200,
        dislikes: 12,
        user: {
            username: "TechArchitect",
            profileImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150"
        }
    },
    {
        id: 2,
        title: "The Death of Localhost: Cloud Development Environments",
        content: "Why DevContainers and cloud IDEs are replacing the traditional local development setup for modern engineering teams.",
        imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
        likes: 850,
        dislikes: 5,
        user: {
            username: "CloudNinja",
            profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
        }
    },
    {
        id: 3,
        title: "Vanilla CSS is making a massive comeback",
        content: "With CSS nestings, OKLCH colors, and container queries, do we really need utility classes anymore?",
        imageUrl: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&q=80&w=800",
        likes: 2100,
        dislikes: 45,
        user: {
            username: "DesignGuru",
            profileImage: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150"
        }
    },
    {
        id: 4,
        title: "Why PostgreSQL is the only database you need",
        content: "From vector embeddings to massive JSONB blobs, Postgres is swallowing the database ecosystem.",
        imageUrl: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=800",
        likes: 3400,
        dislikes: 88,
        user: {
            username: "DataMaster",
            profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
        }
    },
    {
        id: 5,
        title: "Go 1.22: WebAssembly reaches maturity",
        content: "Building blazing fast frontend applications strictly using Go is no longer just a pipe dream.",
        imageUrl: "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=800",
        likes: 1560,
        dislikes: 20,
        user: {
            username: "GopherDev",
            profileImage: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=150"
        }
    }
];

function BlogSection() {
    const [visibleCount, setVisibleCount] = useState(3);

    const loadMore = () => {
        setVisibleCount((prev) => Math.min(prev + 3, dummyBlogs.length));
    };

    return (
        <div className="w-full flex flex-col gap-6 mt-8">
            {dummyBlogs.slice(0, visibleCount).map((blog) => (
                <PostCard key={blog.id} post={blog} />
            ))}

            {visibleCount < dummyBlogs.length && (
                <button
                    onClick={loadMore}
                    className="w-full mt-2 py-3.5 border-2 border-[#131313] text-sm text-red-500 font-thin tracking-widest uppercase hover:bg-[#131313] hover:text-[#F4F1EA] transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2 group cursor-pointer"
                >
                    LOAD MORE ARCHIVES
                    <svg className="w-4 h-4 opacity-70 group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </button>
            )}
        </div>
    );
}

export default BlogSection;