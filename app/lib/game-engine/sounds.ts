import {delay} from './utils'

const sounds = {
  /* eslint-disable no-sparse-arrays */
  click: [2, 0.8, 999, , , , , 1.5, , 0.3, -99, 0.1, 1.63, , , 0.11, 0.22],
  error: [1.5, 0.5, 270, , 0.1, , 1, 1.5, , , , , , , , 0.1, 0.01],
  skip: [, , 150, 0.05, , 0.05, , 1.3, , , , , , 3],
  /* eslint-enable no-sparse-arrays */
}

export async function playSound(name: keyof typeof sounds) {
  const {zzfx} = await import('zzfx')
  return new Promise<void>((resolve) => {
    const sound = sounds[name]
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
