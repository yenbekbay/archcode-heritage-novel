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

export default function About() {
  return (
    <Box>
      <Box
        css={{
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          position: 'absolute',
          zIndex: '-1',
          background:
            'radial-gradient(circle at top left, $violet4, rgba(255, 255, 255, 0) 15%), radial-gradient(circle at 80% 20%, $cyan4, rgba(255, 255, 255, 0) 15%)',
          '@bp2': {
            background:
              'radial-gradient(circle at 15% 50%, $violet4, rgba(255, 255, 255, 0) 25%), radial-gradient(circle at 85% 30%, $cyan4, rgba(255, 255, 255, 0) 25%)',
          },
        }}
      />
      <Header />

      <Section size={{'@initial': '2', '@bp1': '3'}}>
        <Container size="3">TODO: О нас</Container>
      </Section>
    </Box>
  )
}
