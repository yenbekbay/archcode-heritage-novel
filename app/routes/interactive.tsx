import Div100vh from 'react-div-100vh'
import {MetaFunction} from 'remix'
import {MobileDeviceChrome} from '~/components/MobileDeviceChrome'
import {Game} from '~/game'

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: 'Снести нельзя оставить!',
    description: 'Сохраняем архитектурную идентичность Алматы',
  }
}

export default function Interactive() {
  return (
    <Div100vh>
      <MobileDeviceChrome>
        <Game />
      </MobileDeviceChrome>
    </Div100vh>
  )
}
