export function normalizeWord(word) {
  return word
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') 
}

export function getWordScore(word) {
  return word.trim().length
}

export function isWordUsed(word, chain) {
  const normalized = normalizeWord(word)
  return chain.some((w) => normalizeWord(w) === normalized)
}

export function respectsChain(previousWord, newWord) {
  if (!previousWord) return true 
  const lastLetter = normalizeWord(previousWord).slice(-1)
  const firstLetter = normalizeWord(newWord).slice(0, 1)
  return lastLetter === firstLetter
}