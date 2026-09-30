import {
  akimThemeMp3,
  calmLoopMp3,
  chatterMp3,
  cityAtmosMp3,
  cityAtmosTailMp3,
  clickMp3,
  constructionMp3,
  developerThemeMp3,
  generalThemeMp3,
  hearingsMp3,
  heartbeatMp3,
  indoorAtmosphereMp3,
  introMp3,
  introTailMp3,
  mouseoverMp3,
} from "#assets/game/index.ts";
import { Howl } from "howler";
import type { CommandAudioConfig, SoundName } from "react-visual-novel";

function makeAudioConfig(config: CommandAudioConfig) {
  return config;
}

export const SCENE_AUDIO = {
  akimTheme: makeAudioConfig({
    whileVisible: {
      uri: akimThemeMp3,
      loop: true,
    },
  }),
  calmLoop: makeAudioConfig({
    whileVisible: {
      uri: calmLoopMp3,
      loop: true,
    },
  }),
  chatter: makeAudioConfig({
    whileVisible: {
      uri: chatterMp3,
      loop: true,
    },
  }),
  city: makeAudioConfig({
    whileVisible: {
      uri: cityAtmosMp3,
      loop: true,
      overlap: true,
      onStop: ["play", cityAtmosTailMp3],
    },
  }),
  construction: makeAudioConfig({
    whileVisible: {
      uri: constructionMp3,
      loop: true,
    },
  }),
  developerTheme: makeAudioConfig({
    whileVisible: {
      uri: developerThemeMp3,
      loop: true,
    },
  }),
  generalTheme: makeAudioConfig({
    whileVisible: {
      uri: calmLoopMp3,
      loop: true,
    },
    onEntrance: generalThemeMp3,
  }),
  hearings: makeAudioConfig({
    whileVisible: {
      uri: hearingsMp3,
      loop: true,
      overlap: true,
    },
  }),
  heartbeat: makeAudioConfig({
    whileVisible: {
      uri: heartbeatMp3,
      loop: true,
    },
  }),
  indoor: makeAudioConfig({
    whileVisible: {
      uri: indoorAtmosphereMp3,
      loop: true,
      overlap: true,
    },
  }),
  intro: makeAudioConfig({
    whileVisible: {
      uri: introMp3,
      loop: true,
      overlap: true,
      onStop: ["play", introTailMp3],
    },
  }),
};

export function playSound(name: SoundName) {
  switch (name) {
    case "click": {
      playAudio(clickMp3);
      break;
    }
    case "mouseover": {
      playAudio(mouseoverMp3);
      break;
    }
    case "skip": {
      void playZzfxSound("skip").catch((error: unknown) => {
        console.error("Failed to play skip sound", error);
      });
      break;
    }
    case "not_allowed": {
      void playZzfxSound("not_allowed").catch((error: unknown) => {
        console.error("Failed to play not_allowed sound", error);
      });
      break;
    }
  }
}

const ZZFX_SOUNDS = {
  // NOTE: `undefined` preserves ZzFX defaults at each parameter position.
  skip: [
    undefined,
    undefined,
    150,
    0.05,
    undefined,
    0.05,
    undefined,
    1.3,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    3,
  ],
  not_allowed: [
    1.5,
    0.5,
    270,
    undefined,
    0.1,
    undefined,
    1,
    1.5,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    0.1,
    0.01,
  ],
};

async function playZzfxSound(name: keyof typeof ZZFX_SOUNDS) {
  const { zzfx } = await import("zzfx");
  await new Promise<void>((resolve) => {
    const sound = ZZFX_SOUNDS[name];
    const audio = zzfx(...sound);
    audio.addEventListener(
      "ended",
      () => {
        resolve();
      },
      { once: true },
    );
  });

  await delay(500);
}

function playAudio(src: string) {
  new Howl({ src }).play();
}

function delay(durationMs: number) {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, durationMs);
  });
}
