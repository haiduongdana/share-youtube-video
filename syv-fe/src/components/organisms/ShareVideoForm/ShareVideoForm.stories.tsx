import { Meta, StoryObj } from "@storybook/react";
import ShareVideoForm from "./ShareVideoForm";

const meta = {
  title: "molecules/ShareVideoForm",
  component: ShareVideoForm,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof ShareVideoForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
