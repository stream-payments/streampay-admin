import * as RadixAvatar from "@radix-ui/react-avatar"
import clsx from "clsx"
import React from "react"
import Spinner from "../spinner"

type AvatarProps = {
  user?: {
    img?: string
    first_name?: string
    last_name?: string
    email?: string
  }
  font?: string
  color?: string
  isLoading?: boolean
}

const Avatar: React.FC<AvatarProps> = ({
  user,
  font = "inter-small-semibold",
  color = "bg-violet-60",
  isLoading = false,
}) => {
  let username: string

  if (user?.first_name && user?.last_name) {
    username = user.first_name + " " + user.last_name
  } else if (user?.email) {
    username = user.email
  } else {
    username = "StreamPay user"
  }

  return (
    <RadixAvatar.Root
      className={clsx(
        "w-full h-full items-center justify-center overflow-hidden select-none rounded-circle",
        color
      )}
    >
      <RadixAvatar.Image
        src={user?.img}
        alt={username}
        className="object-cover w-full h-full rounded-circle"
      />
      <RadixAvatar.Fallback
        className={clsx(
          "w-full h-full flex items-center justify-center bg-inherit text-grey-0 rounded-circle",
          font
        )}
      >
        {isLoading ? (
          <Spinner size="small" variant="primary" />
        ) : (
          username.slice(0, 1).toUpperCase()
        )}
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  )
}

export default Avatar
