// src/services/wordApi.js

const BASE_URL = import.meta.env.VITE_WORD_API_URL || 'https://word-api-hmlg.vercel.app'

export class WordApiError extends Error {
  constructor(message) {
    super(message)
    this.name = 'WordApiError'
  }
}

export async function validateWord(word) {
  const normalized = word.trim().toLowerCase()

  let response
  try {
    response = await fetch(
      `${BASE_URL}/api/validate?word=${encodeURIComponent(normalized)}`
    )
  } catch {
    throw new WordApiError('No se pudo conectar con el servicio de validación.')
  }

  if (!response.ok) {
    throw new WordApiError('La palabra ingresada es inválida.')
  }

  const data = await response.json()
  return data.exists === true
}