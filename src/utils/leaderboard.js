const STORAGE_KEY = 'pe-leaderboard'
const MAX_ENTRIES = 10

export function getScores() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function saveScore({ name, score, wordsCount }) {
  const entry = {
    name: name.trim() || 'Anónimo',
    score,
    wordsCount
  }

  const current = getScores()
  const updated = [...current, entry]
    .sort((a, b) => b.score - a.score)
    .slice(0, MAX_ENTRIES)

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
  return updated
}