import {ArrowLeft as ArrowLeftIcon} from 'phosphor-react'
import {MetaFunction, useNavigate} from 'remix'
import {Media} from '~/Media'
import {MobileDeviceChrome} from '~/components/MobileDeviceChrome'
import {MyGame} from '~/game'
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
    <Flex css={{height: '100vh'}}>
      <Flex css={{position: 'absolute', top: '$3', left: '$3', zIndex: 1}}>
        <IconButton variant="raised" onClick={() => navigate('/')}>
          <ArrowLeftIcon />
        </IconButton>
      </Flex>

      <Box as={Media} css={{width: '100%', height: '100%'}} at="sm">
        <MyGame />
      </Box>

      <Box as={Media} css={{width: '100%', height: '100%'}} greaterThan="sm">
        <MobileDeviceChrome>
          <MyGame />
        </MobileDeviceChrome>
      </Box>
    </Flex>
  )
}
