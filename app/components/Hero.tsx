import {HeroGraphic} from './HeroGraphic'
import {Container} from '~/styles/Container'
import {Flex} from '~/styles/Flex'
import {Heading} from '~/styles/Heading'
import {Section} from '~/styles/Section'

export function Hero() {
  return (
    <Flex as={Section} direction="column" gap="4">
      <Container>
        <Heading size="3" css={{textTransform: 'uppercase', pr: '10rem'}}>
          Сохраняем архитектурную идентичность Алматы
        </Heading>
      </Container>

      <Flex>
        <HeroGraphic />
      </Flex>
    </Flex>
  )
}
