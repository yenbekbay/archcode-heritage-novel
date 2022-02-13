import {MetaFunction} from 'remix'
import {Container, Section} from '~/lib'

// https://remix.run/api/conventions#meta
export const meta: MetaFunction = () => {
  return {
    title: 'Снести нельзя оставить!',
    description: 'Сохраняем архитектурную идентичность Алматы',
  }
}

export default function Materials() {
  return (
    <Section>
      <Container>TODO: Материалы</Container>
    </Section>
  )
}
