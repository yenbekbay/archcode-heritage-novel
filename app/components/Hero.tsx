import {Container, Flex, Heading, Section} from '~/lib'
import {HeroGraphic} from './HeroGraphic'

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
