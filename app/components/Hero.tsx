import {HeroGraphic} from './HeroGraphic'
import {Container, Flex, Heading, Section} from '@modulz/design-system'

export function Hero() {
  return (
    <Section
      size={{
        '@initial': '2',
        '@bp1': '3',
      }}
      css={{
        pt: '$3',
        '@bp2': {
          pt: '$6',
        },
      }}>
      <Container size="3">
        <Heading
          size="4"
          css={{
            mb: '$3',
            textTransform: 'uppercase',
            pr: '10rem',
          }}>
          Сохраняем архитектурную идентичность Алматы
        </Heading>
      </Container>

      <Flex>
        <HeroGraphic />
      </Flex>
    </Section>
  )
}
