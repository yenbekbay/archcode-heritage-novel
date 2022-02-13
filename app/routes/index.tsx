import {MetaFunction} from 'remix'
import {Hero} from '~/components'
import {Container, Flex, Section, Separator} from '~/lib'

// https://remix.run/api/conventions#meta
export const meta: MetaFunction = () => {
  return {
    title: 'Снести нельзя оставить!',
    description: 'Сохраняем архитектурную идентичность Алматы',
  }
}

export default function Home() {
  return (
    <Flex direction="column">
      <Hero />

      <Flex justify="center" css={{py: '$4'}}>
        <Separator size="2" />
      </Flex>

      <Section>
        <Container>TODO: Главная</Container>
      </Section>
    </Flex>
  )
}
