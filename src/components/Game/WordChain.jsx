function WordChain({ wordChain, score }) {
  return (
    <div className="word-chain">
      <p>Puntaje: {score}</p>
      <ol>
        {wordChain.map((word, index) => (
          <li key={`${word}-${index}`}>{word}</li>
        ))}
      </ol>
    </div>
  )
}

export default WordChain