import dynamic from 'next/dynamic'

const MyGame = dynamic(() => import('~/game/MyGame'), {ssr: false})

export default function Interactive() {
  return <MyGame />
}
