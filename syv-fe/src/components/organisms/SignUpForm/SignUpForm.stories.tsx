import { Meta, StoryObj } from "@storybook/react";
import SignUpForm from "./SignUpForm";

const meta = {
  title: "molecules/SignUpForm",
  component: SignUpForm,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof SignUpForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
