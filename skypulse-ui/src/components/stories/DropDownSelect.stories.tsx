import type { Meta, StoryObj } from "@storybook/react-vite";

import { DropDownSelect } from "./DropDownSelect";
const meta = {
  component: DropDownSelect,
  title: "Components/DropDownSelect",
} satisfies Meta<typeof DropDownSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onChange: () => {},
  },
};
