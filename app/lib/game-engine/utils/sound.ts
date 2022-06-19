export async function playSound(...samples: (number | undefined)[]) {
  const {zzfx} = await import('zzfx')
  zzfx(...samples)
}
