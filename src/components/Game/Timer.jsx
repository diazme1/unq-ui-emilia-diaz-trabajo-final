function Timer({ segundosRestantes }) {
  return (
    <div className="timer">
      <span>Tiempo: {segundosRestantes}s</span>
    </div>
  )
}

export default Timer