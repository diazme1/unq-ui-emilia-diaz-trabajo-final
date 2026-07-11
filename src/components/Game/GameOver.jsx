function GameOver({ wordChain, score, onRestart }) {
  return (
    <div className="game-over">
      <h2>Fin de la partida</h2>
      <p>Palabras encadenadas: {wordChain.length}</p>
      <p>Puntaje final: {score}</p>
      <button onClick={onRestart}>Jugar de nuevo</button>
    </div>
  )
}

export default GameOver