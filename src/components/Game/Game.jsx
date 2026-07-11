import { useGame } from '../../hooks/useGame.js'
import WordInput from './WordInput.jsx'
import WordChain from './WordChain.jsx'
import Timer from './Timer.jsx'
import GameOver from './GameOver.jsx'

function Game() {
  const {
    status,        
    wordChain,         
    score,         
    segundosRestantes,   
    error,     
    isValidating,    
    submitWord,    
    startGame,     
    restartGame,   
  } = useGame()

  if (status === 'idle') {
    return (
      <div className="game">
        <button onClick={startGame}>Jugar</button>
      </div>
    )
  }

  if (status === 'gameOver') {
    return (
      <GameOver
        wordChain={wordChain}
        score={score}
        onRestart={restartGame}
      />
    )
  }

  return (
    <div className="game">
      <Timer segundosRestantes={segundosRestantes} />
      <WordChain wordChain={wordChain} score={score} />
      <WordInput onSubmit={submitWord} error={error} disabled={isValidating} />
    </div>
  )
}

export default Game