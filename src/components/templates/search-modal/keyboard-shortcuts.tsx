import React from "react"
import ArrowDownIcon from "../../fundamentals/icons/arrow-down-icon"
import ArrowUpIcon from "../../fundamentals/icons/arrow-up-icon"
import DownLeftIcon from "../../fundamentals/icons/down-left"
import PointerIcon from "../../fundamentals/icons/pointer-icon"

const KeyboardShortcuts = ({ ...props }) => {
  return (
    <p {...props}>
      <span className="rounded bg-grey-10 p-1">
        <PointerIcon color="#9CA3AF" size="16px" />
      </span>
      or
      <span className="rounded bg-grey-10 p-1">
        <ArrowUpIcon color="#9CA3AF" size="16px" />
      </span>
      <span className="-ml-1 rounded bg-grey-10 p-1">
        <ArrowDownIcon color="#9CA3AF" size="16px" />
      </span>
      to navigate,
      <span className="rounded bg-grey-10 p-1">
        <DownLeftIcon color="#9CA3AF" size="16px" />
      </span>
      to select, and
      <span className="font-small rounded bg-grey-10 px-1.5 py-0.5 font-semibold leading-small">
        <OSCommandIcon />
      </span>
      <span className="-mx-2">+</span>
      <span className="font-small rounded bg-grey-10 px-1.5 py-0.5 font-semibold leading-small">
        K
      </span>
      to search anytime
    </p>
  )
}

const OSCommandIcon = () => {
  const isMac =
    typeof window !== "undefined" &&
    navigator?.platform?.toUpperCase().indexOf("MAC") >= 0
      ? true
      : false
  return <>{isMac ? "⌘" : "Ctrl"}</>
}

export default KeyboardShortcuts
