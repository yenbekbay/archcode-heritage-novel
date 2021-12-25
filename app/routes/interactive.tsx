import {ArrowLeft as ArrowLeftIcon} from 'phosphor-react'
import Div100vh from 'react-div-100vh'
import {MetaFunction, useNavigate} from 'remix'
import {useMediaQuery} from 'usehooks-ts'
import {MobileDeviceChrome} from '~/components/MobileDeviceChrome'
import {Game} from '~/game'
import {Flex} from '~/styles/Flex'
import {IconButton} from '~/styles/IconButton'

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: 'Снести нельзя оставить!',
    description: 'Сохраняем архитектурную идентичность Алматы',
  }
}

export default function Interactive() {
  const navigate = useNavigate()
  const isDesktop = useMediaQuery('(min-width: 750px)')
  return (
    <Div100vh>
      <Flex css={{position: 'absolute', top: '$4', left: '$4'}}>
        <IconButton variant="raised" onClick={() => navigate('/')}>
          <ArrowLeftIcon />
        </IconButton>
      </Flex>

      {typeof window !== 'undefined' &&
        (isDesktop ? (
          <MobileDeviceChrome>
            <Game />
          </MobileDeviceChrome>
        ) : (
          <Game />
        ))}
    </Div100vh>
  )
}
