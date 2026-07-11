import { Link } from 'react-router-dom'

function GameOver({ wordChain, score, onRestart }) {
  return (
    <div className="game-over">
      <h2>Fin de la partida</h2>
      <p>Palabras encadenadas: {wordChain.length}</p>
      <p>Puntaje final: {score}</p>
      <div className="flex flex-col gap-3">
        <button onClick={onRestart}>Jugar de nuevo</button>
        <Link to="/" className="sketchy-border bg-paper font-bold py-2 hover:-translate-y-0.5 transition-transform">
             Volver al inicio
        </Link>
      </div>
    </div>
  )
}

export default GameOver