function ScoreSummary({ wordChain = [], score = 0 }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <p className="font-bold text-lg">Cant. de palabras encadenadas: {wordChain.length}</p>
      <p className="font-bold text-lg">Puntaje total: {score} pts.</p>
    </div>
  )
}

export default ScoreSummary