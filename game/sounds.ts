import {Howl} from 'howler'
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
} from '~/assets/game'
import type {CommandAudioConfig, SoundName} from '~/lib/game-engine'
import {delay} from '~/lib/game-engine/utils'

function makeAudioConfig(config: CommandAudioConfig) {
  return config
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
      onStop: ['play', cityAtmosTailMp3],
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
      uri: generalThemeMp3,
      loop: true,
    },
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
    },
  }),
  intro: makeAudioConfig({
    whileVisible: {
      uri: introMp3,
      loop: true,
      overlap: true,
      onStop: ['play', introTailMp3],
    },
  }),
}

export function playSound(name: SoundName) {
  switch (name) {
    case 'click':
      playAudio(clickMp3)
      break
    case 'mouseover':
      playAudio(mouseoverMp3)
      break
    case 'skip':
      playZzfxSound('skip')
      break
    case 'not_allowed':
      playZzfxSound('not_allowed')
      break
  }
}

const ZZFX_SOUNDS = {
  /* eslint-disable no-sparse-arrays */
  skip: [, , 150, 0.05, , 0.05, , 1.3, , , , , , 3],
  not_allowed: [1.5, 0.5, 270, , 0.1, , 1, 1.5, , , , , , , , 0.1, 0.01],
  /* eslint-enable no-sparse-arrays */
}

async function playZzfxSound(name: keyof typeof ZZFX_SOUNDS) {
  const {zzfx} = await import('zzfx')
  return new Promise<void>((resolve) => {
    const sound = ZZFX_SOUNDS[name]
    if (sound) {
      const audio = zzfx(...sound)
      audio.onended = async () => {
        await delay(500)
        resolve()
      }
    } else {
      resolve()
    }
  })
}

async function playAudio(src: string) {
  new Howl({src}).play()
}
