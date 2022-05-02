import {useNavigate} from '@remix-run/react'
import {MyGame} from '~/game'

export default function Interactive() {
  const navigate = useNavigate()
  return <MyGame onClose={() => navigate('/')} />
}
