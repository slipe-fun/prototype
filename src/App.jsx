import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/feed'
import PublishBlog from './pages/publishBlog'
import NavBar from './components/navbar'

function App() {
  return (
    <Router>
        <main className="h-screen w-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/publish" element={<PublishBlog />} />
          </Routes>
        </main>
        <NavBar />
    </Router>
  )
}

export default App
