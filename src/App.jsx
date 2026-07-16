import {Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import Rules from './pages/Rules.jsx'
import Leaderboard from './pages/Leaderboard.jsx'
import Game from './pages/Game.jsx'

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reglas" element={<Rules />} />
        <Route path="/jugar" element={<Game />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </div>
  )
}

export default App