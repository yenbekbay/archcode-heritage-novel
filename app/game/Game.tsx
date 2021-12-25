import {Scene1} from './Scene1'
import {Flex} from '~/styles/Flex'

export function Game() {
  return (
    <Flex
      css={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        backgroundColor: '$background',
      }}>
      <Scene1 />
    </Flex>
  )
}
