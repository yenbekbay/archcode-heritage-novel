import {MetaFunction} from 'remix'
import {Hero} from '~/components/Hero'
import {Container} from '~/styles/Container'
import {Flex} from '~/styles/Flex'
import {Section} from '~/styles/Section'
import {Separator} from '~/styles/Separator'

// https://remix.run/api/conventions#meta
export const meta: MetaFunction = () => {
  return {
    title: 'Снести нельзя оставить!',
    description: 'Сохраняем архитектурную идентичность Алматы',
  }
}

export default function Home() {
  return (
    <Flex direction="column" gap="5">
      <Hero />

      <Flex justify="center">
        <Separator size="2" />
      </Flex>

      <Section>
        <Container>TODO: Главная</Container>
      </Section>
    </Flex>
  )
}
