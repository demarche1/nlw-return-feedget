import { CircleNotch } from "phosphor-react";

export function Loading() {
  return (
    <div className="h-6 w-6 flex items-center justify-center">
      <CircleNotch weight="bold" className="w-4 h-4 animate-spin" />
    </div>
  )
}