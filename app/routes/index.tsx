import {MetaFunction} from 'remix'
import {Hero} from '~/components/Hero'
import {Container} from '~/lib/components/Container'
import {Flex} from '~/lib/components/Flex'
import {Section} from '~/lib/components/Section'
import {Separator} from '~/lib/components/Separator'

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
