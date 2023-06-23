import { Meta, StoryObj } from "@storybook/react";
import HeaderItem from "./HeaderItem";

const meta = {
  title: "molecules/HeaderItem",
  component: HeaderItem,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    link: "/",
    title: "Title",
  },
} satisfies Meta<typeof HeaderItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
