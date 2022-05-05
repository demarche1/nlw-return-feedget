import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void
}

export function FeedbackTypeStep ({ onFeedbackTypeChanged }: FeedbackTypeStepProps ) {
  return (
    <>
      <header>
        <CloseButton />

        <span className="text-xl leading-6 flex items-center gap-2">
          Deixe seu feedback
        </span>
      </header>

      <div className="flex gap-2 w-full py-8">
        { Object.entries(feedbackTypes).map(([type, feedback]) => (
          <button
            key={ type }
            className="bg-zinc-800 py-5 rounded-lg w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 outline-none"
            onClick={ () => onFeedbackTypeChanged(type as FeedbackType) }
            type="button"
          >
            <i className="text-3xl">{ feedback.icon }</i>
            <span>
              { feedback.title }
            </span>
          </button>
        )) }
      </div>
    </>
  )
}