import { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";

const meta = {
  title: "molecules/Header",
  component: Header,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
