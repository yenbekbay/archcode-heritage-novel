import {MetaFunction} from 'remix'
import {Container} from '~/styles/Container'
import {Section} from '~/styles/Section'

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
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
