import {Box, Container, Flex, Section, Separator} from '@modulz/design-system'
import {MetaFunction} from 'remix'
import {Header} from '~/components/Header'

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: 'Снести нельзя оставить!',
    description: 'Сохраняем архитектурную идентичность Алматы',
  }
}

export default function Interactive() {
  return (
    <Box>
      <Section size="2">
        <Container size="3">TODO</Container>
      </Section>
    </Box>
  )
}
