import clsx from "clsx"
import React from "react"
import { GroupBase, SingleValueProps } from "react-select"
import { hasPrefix } from "../utils"

const SingleValue = <
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>({
  innerProps,
  children,
  cx,
  className,
  isDisabled,
  data,
}: SingleValueProps<Option, IsMulti, Group>) => {
  const prefix = hasPrefix(data) ? data.prefix : null

  return (
    <div
      {...innerProps}
      className={cx(
        {
          "single-value": true,
          "single-value--is-disabled": isDisabled,
        },
        clsx(
          "absolute top-1/2 -translate-y-1/2 overflow-hidden overflow-ellipsis whitespace-nowrap",
          className
        )
      )}
    >
      <div className="inter-base-regular flex items-center gap-x-xsmall">
        {prefix && <span className="inter-base-semibold">{prefix}</span>}
        {children}
      </div>
    </div>
  )
}

export default SingleValue
