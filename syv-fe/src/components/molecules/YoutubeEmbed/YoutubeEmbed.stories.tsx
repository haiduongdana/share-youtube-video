import { Meta, StoryObj } from "@storybook/react";
import YoutubeEmbed from "./YoutubeEmbed";

const meta = {
  title: "molecules/YoutubeEmbed",
  component: YoutubeEmbed,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    embedId: "rokGy0huYEA",
  },
} satisfies Meta<typeof YoutubeEmbed>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
