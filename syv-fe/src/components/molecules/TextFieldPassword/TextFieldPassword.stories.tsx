import { Meta, StoryObj } from "@storybook/react";
import TextFieldPassword from "./TextFieldPassword";
import textFieldMeta from "../TextField/TextField.stories";

const meta = {
  title: "molecules/TextFieldPassword",
  component: TextFieldPassword,
  tags: ["autodocs"],
  argTypes: {
    ...textFieldMeta.argTypes,
  },
  args: {
    label: "Password",
    name: "password",
  },
} satisfies Meta<typeof TextFieldPassword>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
