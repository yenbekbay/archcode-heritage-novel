import {MetaFunction} from 'remix'
import {Container} from '~/lib/components/Container'
import {Section} from '~/lib/components/Section'

// https://remix.run/api/conventions#meta
export const meta: MetaFunction = () => {
  return {
    title: 'Снести нельзя оставить!',
    description: 'Сохраняем архитектурную идентичность Алматы',
  }
}

export default function About() {
  return (
    <Section>
      <Container>TODO: О нас</Container>
    </Section>
  )
}
