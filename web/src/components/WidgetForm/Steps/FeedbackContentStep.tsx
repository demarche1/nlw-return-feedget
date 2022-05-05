import { ArrowLeft, Camera } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";
import { Loading } from "../Loading";
import { ScreenshotButton } from "../ScreenshotButton";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType
  onFeedbackRestartRequested: () => void
  onFeedbackSent: () => void
}

export function FeedbackContentStep ({ 
  onFeedbackRestartRequested,
  onFeedbackSent,
  feedbackType
}: FeedbackContentStepProps) {
  const feedbackInfo = feedbackTypes[feedbackType]
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [comment, setComment] = useState('')
  const [isFeedbackSubmitLoading, setIsFeedbackSubmitLoading] = useState(false)

  function sleep() {
    return new Promise((res) => {
      setTimeout(res, 1000)
    })
  }

  async function handleSubmitFeedback (e: FormEvent) {
    e.preventDefault()
    setIsFeedbackSubmitLoading(true)
    console.log({
      feedbackType,
      comment,
      screenshot
    });
    await sleep()
    onFeedbackSent()
    setIsFeedbackSubmitLoading(false)
  }

  return (
    <>
      <button 
      onClick={ onFeedbackRestartRequested } 
      type="button"  title="Voltar Widget" 
      className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100"
      >
        <ArrowLeft weight="bold" className="w-4 h-4"/>
      </button>

      <header>
        <CloseButton />

        <span className="text-xl leading-6 flex items-center gap-2">
          <div>
            { feedbackInfo.icon } 
          </div>
          { feedbackInfo.title }
        </span>
      </header>

      <form className="my-4 w-full" onSubmit={ handleSubmitFeedback }>
        <textarea
          className="min-w-[304px] w-full min-h-[112px] rounded-md text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none scrollbar scrollbar-thumb-zinc-600 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhe o que está acontecendo..."
          onChange={ e => setComment(e.target.value) }
        />

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton 
          onScreenshotTook={ setScreenshot } 
          screenshot={ screenshot }
          />
          
          <button 
          type="submit"
          className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brandHover-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
          disabled={ !comment && true }
          >
            { isFeedbackSubmitLoading ? <Loading /> : "Enviar feedback" }
          </button>
        </footer>
      </form>
    </>
  )
}