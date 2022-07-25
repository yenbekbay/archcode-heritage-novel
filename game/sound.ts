import {clickMp3, mouseoverMp3} from '~/assets/game'
import {delay, SoundName} from '~/lib/game-engine'
import {getAudio} from '~/lib/game-engine/components/internal'

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
  getAudio({uri: src}).play()
}
