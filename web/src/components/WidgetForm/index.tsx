import { useState } from "react";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSucessStep } from "./Steps/FeedbackSucessStep";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    icon: '🐛',
    alt: 'Imagem de um inseto'
  },
  IDEA: {
    title: 'Ideia',
    icon: '💡',
    alt: 'Imagem de uma lâmpada'
  },
  OTHER: {
    title: 'Outro',
    icon: '💭',
    alt: 'Imagem de uma nuvem de pensamento'
  }
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm () {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)

  function handleRestartFeedback() {
    setFeedbackType(null)
    setFeedbackSent(false)
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSucessStep onNewFeedbackRequested={ handleRestartFeedback }/>
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={ setFeedbackType } />
          ) : (
            <FeedbackContentStep 
              onFeedbackRestartRequested={ handleRestartFeedback }
              onFeedbackSent={() => setFeedbackSent(true)}
              feedbackType={ feedbackType }
            />
          )}
        </>
      )}

      <footer className="text-xs">
        Feito com ♥ por <a className="underline underline-offset-1" href="https://github.com/demarche1/">demarche</a>
      </footer>
    </div>
  )
}
