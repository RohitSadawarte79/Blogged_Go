import React, { useState } from "react";
import NavBar from "./navbar";
import Sidebar from "./sidebar";

function Layout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="relative min-h-screen overflow-x-hidden">

            <NavBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

            <div className="max-w-7xl mx-auto py-10 px-6 sm:px-12">
                <main className="w-full">
                    {children}
                </main>
            </div>

            {/* Pass the state to the Sidebar so it becomes an overlay drawer */}
            <Sidebar isSidebarOpen={isSidebarOpen} />
        </div>
    )
}

export default Layout;