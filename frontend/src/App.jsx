import PostCard from "./components/PostCard"
import Layout from "./components/Layout"
import Blogs from "./pages/Blogs/blogs"
import Footer from "./components/Footer"
import BottomBar from "./components/bottomBar"

function App() {
  const dummyPost = {
    title: "How I made My first Million by doing these..",
    content: "This is the content summary of the post. Props are awesome!",
    likes: 15000,
    dislikes: 1000,
    imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1000"
  }

  return (
    <div className="max-w-auto mx-auto">
      <Layout>
        <Blogs />
      </Layout>
      <div className="sm:hidden bottom-bar-mobile">
        <BottomBar />
      </div>
    </div>
  )
}

export default App