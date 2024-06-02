import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import AudioRecorder from "./AudioRecordingComponent";

const meta: Meta<typeof AudioRecorder> = {
  title: "AudioRecorder",
  component: AudioRecorder,
};

export default meta;
type Story = StoryObj<typeof AudioRecorder>;

const onRecordingComplete: (blob: Blob) => void = (blob: Blob) => {
  alert("Save pressed. On recording complete called with blob");
};

export const Primary: Story = {
  name: "AudioRecorder",
  render: () => <AudioRecorder onRecordingComplete={onRecordingComplete} />,
};
