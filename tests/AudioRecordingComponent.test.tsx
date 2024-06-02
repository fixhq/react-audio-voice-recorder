import React from "react";
import { expect, test, vi } from "vitest";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import AudioRecorder from "../src/components/AudioRecordingComponent";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const mockGetUserMedia = vi.fn(async () => {
  return new Promise<void>((resolve) => {
    resolve();
  });
});

Object.defineProperty(global.navigator, "mediaDevices", {
  value: {
    getUserMedia: mockGetUserMedia,
  },
});

let dataavailableCallback: any = null;
const addEventListener = vi.fn().mockImplementation((event, cb) => {
  // holding on to the callback assigned by useAudioRecorder hook to call later from MediaRecorder.stop
  dataavailableCallback = cb;
});

const stop = vi.fn();
const getTracks = vi.fn(() => [
  {
    stop: stop,
  },
]);

Object.defineProperty(window, "MediaRecorder", {
  writable: true,
  value: vi.fn().mockImplementation(() => ({
    start: vi.fn(),
    addEventListener: addEventListener,
    onerror: vi.fn(),
    state: "",
    stop: vi.fn().mockImplementation(() => {
      // calling the addEventListener callback added by useAudioRecorder
      dataavailableCallback &&
        dataavailableCallback({
          data: new Blob([JSON.stringify({ a: 1 }, null, 2)], {
            type: "application/json",
          }),
        });
    }),
    pause: vi.fn(),
    stream: {
      getTracks,
    },
  })),
});

describe("Test AudioRecorder", () => {
  test("AudioRecorder renders", () => {
    render(<AudioRecorder />);
    expect(screen.getByTestId("audio_recorder")).toHaveClass("audio-recorder");
  });

  test("AudioRecorder starts / cancels properly", async () => {
    const user = userEvent.setup();
    render(<AudioRecorder />);
    const audioRecorder: HTMLElement = screen.getByTestId("audio_recorder");
    const audioRecorderMic: HTMLElement = screen.getByTestId("ar_mic");
    await act(async () => {
      await user.click(audioRecorderMic);
    });
    expect(audioRecorder).toHaveClass("recording");

    const audioRecorderCancel: HTMLElement = screen.getByTestId("ar_cancel");
    await act(async () => {
      await user.click(audioRecorderCancel);
    });
    expect(audioRecorder.classList.contains("recording")).toBeFalsy();
    expect(getTracks).toHaveBeenCalled();
    expect(stop).toHaveBeenCalled();
  });

  test("AudioRecorder starts / save properly", async () => {
    const user = userEvent.setup();
    const onRecordingComplete = vi.fn();
    render(<AudioRecorder onRecordingComplete={onRecordingComplete} />);
    const audioRecorder: HTMLElement = screen.getByTestId("audio_recorder");
    const audioRecorderMic: HTMLElement = screen.getByTestId("ar_mic");
    await act(async () => {
      await user.click(audioRecorderMic);
    });
    expect(audioRecorder).toHaveClass("recording");

    await act(async () => {
      await user.click(audioRecorderMic);
    });
    expect(audioRecorder.classList.contains("recording")).toBeFalsy();
    expect(onRecordingComplete).toHaveBeenCalled();
    expect(getTracks).toHaveBeenCalled();
    expect(stop).toHaveBeenCalled();
  });

  test("AudioRecorder starts / pause / save properly", async () => {
    const user = userEvent.setup();
    const onRecordingComplete = vi.fn();
    render(<AudioRecorder onRecordingComplete={onRecordingComplete} />);
    const audioRecorder: HTMLElement = screen.getByTestId("audio_recorder");
    const audioRecorderMic: HTMLElement = screen.getByTestId("ar_mic");
    await act(async () => {
      await user.click(audioRecorderMic);
    });
    expect(audioRecorder).toHaveClass("recording");

    const audioRecorderTimer: HTMLElement = screen.getByTestId("ar_timer");
    const audioRecorderPause: HTMLElement = screen.getByTestId("ar_pause");
    await act(async () => {
      await user.click(audioRecorderPause);
    });
    const time = audioRecorderTimer.textContent;

    expect(audioRecorder).toHaveClass("recording"); //should still be recording after pause
    expect(audioRecorderTimer.textContent).toEqual(time); //timer should have have stayed the same after 1 second

    await act(async () => {
      await user.click(audioRecorderMic);
    });
    expect(audioRecorder.classList.contains("recording")).toBeFalsy();
    expect(onRecordingComplete).toHaveBeenCalled();
    expect(getTracks).toHaveBeenCalled();
    expect(stop).toHaveBeenCalled();
  });

  test("AudioRecorder timer works properly", async () => {
    const user = userEvent.setup();
    const onRecordingComplete = vi.fn();
    render(<AudioRecorder onRecordingComplete={onRecordingComplete} />);
    const audioRecorder: HTMLElement = screen.getByTestId("audio_recorder");
    const audioRecorderMic: HTMLElement = screen.getByTestId("ar_mic");
    await act(async () => {
      await user.click(audioRecorderMic);
    });
    expect(audioRecorder).toHaveClass("recording");

    // Wait a second
    await act(async () => {
      await sleep(1000);
    });
    const audioRecorderTimer: HTMLElement = screen.getByTestId("ar_timer");
    expect(audioRecorder).toHaveClass("recording"); //should still be recording after pause
    expect(audioRecorderTimer.textContent).toEqual("0:01"); //timer should have gone to 1 sec

    // Stop Recording
    await act(async () => {
      await user.click(audioRecorderMic);
    });
    expect(audioRecorder.classList.contains("recording")).toBeFalsy();
    expect(onRecordingComplete).toHaveBeenCalled();
    expect(getTracks).toHaveBeenCalled();
    expect(stop).toHaveBeenCalled();
  });
});
