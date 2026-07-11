import { useState } from 'react'

function WordInput({ onSubmit, error, disabled }) {
  const [value, setValue] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!value.trim()) return
    onSubmit(value)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit} className="word-input">
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Escribí una palabra..."
        disabled={disabled}
        autoFocus
      />
      <button type="submit" disabled={disabled}>
        Enviar
      </button>
      {error && <p className="word-input__error">{error}</p>}
    </form>
  )
}

export default WordInput