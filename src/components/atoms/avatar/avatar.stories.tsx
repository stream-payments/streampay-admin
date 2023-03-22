import { ComponentMeta } from "@storybook/react"
import React from "react"
import Avatar from "."

export default {
  title: "Atoms/Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>

const Template = args => (
  <div className="h-large w-large">
    <Avatar {...args} />
  </div>
)

export const User = Template.bind({})
User.args = {
  user: {
    first_name: "John",
    last_name: "Doe",
    email: "avatar@streampay.shop",
  },
}

export const NoUser = Template.bind({})
NoUser.args = {}
