import type { Meta, StoryObj } from "@storybook/react-vite";

import { LiveWeather } from "./LiveWeather";

const meta = {
  component: LiveWeather,
} satisfies Meta<typeof LiveWeather>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
