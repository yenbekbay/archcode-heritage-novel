import dynamic from 'next/dynamic'

const MyGame = dynamic(() => import('~/game'), {ssr: false})

export default function Interactive() {
  return <MyGame />
}
