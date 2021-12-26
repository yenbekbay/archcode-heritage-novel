import {ArrowLeft as ArrowLeftIcon} from 'phosphor-react'
import Div100vh from 'react-div-100vh'
import {MetaFunction, useNavigate} from 'remix'
import {Media} from '~/Media'
import {MobileDeviceChrome} from '~/components/MobileDeviceChrome'
import {Game} from '~/game'
import {Box} from '~/styles/Box'
import {Flex} from '~/styles/Flex'
import {IconButton} from '~/styles/IconButton'

// https://remix.run/api/conventions#meta
export const meta: MetaFunction = () => {
  return {
    title: 'Снести нельзя оставить!',
    description: 'Сохраняем архитектурную идентичность Алматы',
  }
}

export default function Interactive() {
  const navigate = useNavigate()
  return (
    <Div100vh>
      <Flex css={{position: 'absolute', top: '$3', left: '$3', zIndex: 1}}>
        <IconButton variant="raised" onClick={() => navigate('/')}>
          <ArrowLeftIcon />
        </IconButton>
      </Flex>

      <Box as={Media} css={{width: '100%', height: '100%'}} at="sm">
        <Game />
      </Box>

      <Box as={Media} css={{width: '100%', height: '100%'}} greaterThan="sm">
        <MobileDeviceChrome>
          <Game />
        </MobileDeviceChrome>
      </Box>
    </Div100vh>
  )
}
