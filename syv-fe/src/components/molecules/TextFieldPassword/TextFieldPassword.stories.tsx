import { Meta, StoryObj } from "@storybook/react";
import TextFieldPassword from "./TextFieldPassword";
import textFieldMeta from "../TextField/TextField.stories";
import { userEvent, waitFor, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

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
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const inputHtml: HTMLInputElement = await canvas.findByLabelText(`${args.label}`);
    const btnTogglePasswordVisibility = await canvas.getByRole('button');

    expect(inputHtml).toHaveAttribute('type', 'password');

    await userEvent.type(inputHtml, 'password@1234');
    expect(inputHtml.value).toBe('password@1234');

    // Click toggle password visibility
    await userEvent.click(btnTogglePasswordVisibility)
    expect(inputHtml).toHaveAttribute('type', 'text');

    await userEvent.click(btnTogglePasswordVisibility)
    expect(inputHtml).toHaveAttribute('type', 'password');
  }
} satisfies Meta<typeof TextFieldPassword>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
