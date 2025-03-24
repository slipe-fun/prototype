import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PublishBlog from './pages/PublishBlog'
import NavBar from './components/ui/navbar'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <main className="pb-[4.5rem]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/publish" element={<PublishBlog />} />
          </Routes>
        </main>
        <NavBar />
      </div>
    </Router>
  )
}

export default App
