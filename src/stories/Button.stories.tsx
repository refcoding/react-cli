import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "@mui/material";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["contained", "text", "outlined"],
      control: { type: "select" },
    },
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Contained: ComponentStory<typeof Button> = Template.bind({});

Contained.args = {
  variant: "contained",
  children: "aaaa",
};
