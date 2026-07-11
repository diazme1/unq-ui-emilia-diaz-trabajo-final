import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Game from './components/Game/Game.jsx'

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jugar" element={<Game />} />
      </Routes>
    </div>
  )
}

export default App