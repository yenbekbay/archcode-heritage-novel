import loadAsset from 'load-asset'
import {ArrowLeft as ArrowLeftIcon} from 'phosphor-react'
import React from 'react'
import {MetaFunction, useNavigate} from 'remix'
import {Media} from '~/Media'
import {MobileDeviceChrome} from '~/components/MobileDeviceChrome'
import {assets, MyGame} from '~/game'
import {useResult} from '~/hooks/useResult'
import {Box} from '~/styles/Box'
import {Flex} from '~/styles/Flex'
import {Heading} from '~/styles/Heading'
import {IconButton} from '~/styles/IconButton'
import {Text} from '~/styles/Text'

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
        <WithAssets>
          <MyGame />
        </WithAssets>
      </Box>

      <Box as={Media} css={{width: '100%', height: '100%'}} greaterThan="sm">
        <MobileDeviceChrome>
          <WithAssets>
            <MyGame />
          </WithAssets>
        </MobileDeviceChrome>
      </Box>
    </Flex>
  )
}

// MARK: WithAssets

interface WithAssetsProps {
  children: React.ReactNode
}

function WithAssets({children}: WithAssetsProps) {
  const [res, setRes] = useResult<Error, undefined>()
  React.useEffect(() => {
    ;(async () => {
      try {
        await loadAsset.all(assets)
        setRes({status: 'success', data: undefined})
      } catch {
        setRes({
          status: 'failure',
          error: new Error('Не удалось загрузить ресурсы'),
        })
      }
    })()
  }, [setRes])

  if (res.status === 'loading') {
    return (
      <Flex
        css={{flex: 1, padding: '$4'}}
        direction="column"
        justify="center"
        align="center">
        Загрузка…
      </Flex>
    )
  }
  if (res.status === 'failure') {
    return (
      <Flex
        css={{flex: 1, padding: '$4'}}
        direction="column"
        justify="center"
        align="center"
        gap="2">
        <Heading>Что-то пошло не так!</Heading>

        <Text
          as="pre"
          variant="red"
          css={{
            padding: '$3',
            backgroundColor: '$redA3',
            fontFamily: '$mono',
            whiteSpace: 'pre-line',
          }}>
          {res.error.message}
        </Text>

        <Text as="p">
          Мы уже в курсе этой ошибки, и постараемся её исправить как можно
          скорее.
        </Text>
      </Flex>
    )
  }
  return <>{children}</>
}
