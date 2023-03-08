import clsx from "clsx"
import React, { PropsWithChildren } from "react"
import { useSkeleton } from "../../../context/skeleton"

type Props = PropsWithChildren<{
  isLoading?: boolean
}>

const Skeleton = ({ children, isLoading }: Props) => {
  const { isLoading: providerState = false } = useSkeleton()

  const state = isLoading || providerState

  return (
    <div
      className={clsx("h-fit w-fit", {
        "animate-pulse rounded-rounded bg-grey-10 [&>*]:opacity-0": state,
      })}
    >
      {children}
    </div>
  )
}

export default Skeleton
