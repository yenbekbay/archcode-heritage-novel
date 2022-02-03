import {HeroGraphic} from './HeroGraphic'
import {Container} from '~/lib/components/Container'
import {Flex} from '~/lib/components/Flex'
import {Heading} from '~/lib/components/Heading'
import {Section} from '~/lib/components/Section'

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
