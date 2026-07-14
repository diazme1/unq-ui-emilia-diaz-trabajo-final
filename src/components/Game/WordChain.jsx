import { useEffect, useRef } from 'react'
import {getWordScore} from '../../utils/chainRules.js'

function WordChain({ wordChain=[], score=0 }) {

  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [wordChain.length])

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="w-full max-h-64 overflow-y-auto flex flex-col items-center gap-2 pr-1">
        {wordChain.map((word, index) => (
          <div key={`${word}-${index}`} className="flex flex-col items-center gap-2 w-full shrink-0">
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 w-full">
              <span />
              <span className="sketchy-border hatch-green px-3 py-1 font-bold text-base text-center break-words">
                {word}
              </span>
              <span className="text-sketch-green font-bold text-sm whitespace-nowrap text-left">
                +{getWordScore(word)} pts
              </span>
            </div>
          <span aria-hidden="true">↓</span>
        </div>
        ))}
        <div ref={bottomRef} />
      </div>
    </div>
  )
}

export default WordChain