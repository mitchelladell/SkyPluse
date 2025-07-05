import type { Meta, StoryObj } from "@storybook/react-vite";

import { WeatherCard } from "./WeatherCard";

const meta = {
  component: WeatherCard,
} satisfies Meta<typeof WeatherCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    city: "city",
    temperature: 0,
    humidity: 0,
    location: "51.5074° N, 0.1278° W", // example location string
  },
};
