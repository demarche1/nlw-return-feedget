import { CloseButton } from "../../CloseButton";

interface FeedbackSucessStepProps {
  onNewFeedbackRequested: () => void
}

export function FeedbackSucessStep ({ onNewFeedbackRequested }: FeedbackSucessStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-7 w-[304px] text-4xl">
        ✅
      </div>

      <span className="text-xl mt-2">Agradecemos o feedback!</span>

      <button 
      className="py-2 px-6 my-6 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brandHover-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
      onClick={ onNewFeedbackRequested }
      >
        Quero enviar outro
      </button>
    </>
  )
}