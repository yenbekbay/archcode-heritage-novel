import loadAsset from 'load-asset'
import {ArrowLeft as ArrowLeftIcon, X as XIcon} from 'phosphor-react'
import React from 'react'
import {MetaFunction, useNavigate} from 'remix'
import {MobileDeviceChrome} from '~/components'
import {assets, MyGame} from '~/game'
import {GameInstance} from '~/game/components'
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Media,
  Progress,
  ProgressIndicator,
  Text,
  useResult,
} from '~/lib'

// https://remix.run/api/conventions#meta
export const meta: MetaFunction = () => {
  return {
    title: 'Снести нельзя оставить!',
    description: 'Сохраняем архитектурную идентичность Алматы',
  }
}

export default function Interactive() {
  const navigate = useNavigate()
  const gameRef = React.useRef<GameInstance>(null)
  return (
    <Flex css={{height: '100vh'}}>
      <Flex
        css={{position: 'absolute', top: '$3', left: '$3', zIndex: 1000}}
        gap="2">
        <IconButton variant="raised" onClick={() => navigate('/')}>
          <XIcon />
        </IconButton>

        <IconButton variant="raised" onClick={() => gameRef.current?.goBack()}>
          <ArrowLeftIcon />
        </IconButton>
      </Flex>

      <Box as={Media} css={{width: '100%', height: '100%'}} at="sm">
        <WithAssets>
          <MyGame ref={gameRef} />
        </WithAssets>
      </Box>

      <Box as={Media} css={{width: '100%', height: '100%'}} greaterThan="sm">
        <MobileDeviceChrome>
          <WithAssets>
            <MyGame ref={gameRef} />
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
  const [progress, setProgress] = React.useState(0)
  React.useEffect(() => {
    ;(async () => {
      try {
        await loadAsset.all([...new Set(assets)], (info) =>
          setProgress(info.progress),
        )
        // setRes({status: 'success', data: undefined})
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
        css={{width: '100%', height: '100%', padding: '$4'}}
        direction="column"
        justify="center"
        align="center"
        gap="2">
        <Text>Загрузка…</Text>

        <Progress value={progress * 100}>
          <ProgressIndicator style={{width: `${progress * 100}%`}} />
        </Progress>
      </Flex>
    )
  }
  if (res.status === 'failure') {
    return (
      <Flex
        css={{width: '100%', height: '100%', padding: '$4'}}
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
