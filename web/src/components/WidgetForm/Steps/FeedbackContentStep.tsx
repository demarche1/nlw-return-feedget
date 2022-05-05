import { ArrowLeft, Camera } from "phosphor-react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType
  onFeedbackRestartRequested: () => void
}

export function FeedbackContentStep ({ onFeedbackRestartRequested, feedbackType }: FeedbackContentStepProps) {
  const feedbackInfo = feedbackTypes[feedbackType]

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

      <form className="my-4 w-full">
        <textarea
          className="min-w-[304px] w-full min-h-[112px] rounded-md text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none scrollbar scrollbar-thumb-zinc-600 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhe o que está acontecendo..."
        ></textarea>

        <footer
        className="flex gap-2 mt-2"
        >
          <button 
          type="button"
          className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900"
          >
            <Camera className="w-6 h-6 text-zinc-900"/>
          </button>
          <button 
          type="submit"
          className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brandHover-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 transition-colors"
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  )
}