import {ArchcodeLogo} from './ArchcodeLogo'
import {Box, Container, Flex, Link, Text} from '@modulz/design-system'
import {NavLink as RemixNavLink} from 'remix'

export function Header() {
  return (
    <Container as="header" size="3" css={{position: 'relative', zIndex: '1'}}>
      <Flex justify="between" css={{py: '$4'}}>
        <Box
          as={RemixNavLink}
          to="/"
          css={{
            color: '$hiContrast',
            display: 'inline-flex',
            '&:focus': {
              boxShadow: 'none',
            },
          }}>
          <span
            style={{
              position: 'absolute',
              width: 1,
              height: 1,
              padding: 0,
              margin: -1,
              overflow: 'hidden',
              clip: 'rect(0, 0, 0, 0)',
              whiteSpace: 'nowrap',
              border: 0,
            }}>
            Главная страница
          </span>
          <ArchcodeLogo />
        </Box>

        <Flex as="nav" align="center">
          <Link
            as={RemixNavLink}
            to="/about"
            variant="subtle"
            css={{textTransform: 'uppercase', mr: '$5', '@bp2': {mr: '$7'}}}
            className={({isActive}: any) => isActive && 'underline'}>
            <Text>О нас</Text>
          </Link>
          <Link
            as={RemixNavLink}
            to="/interactive"
            variant="subtle"
            css={{textTransform: 'uppercase', mr: '$5', '@bp2': {mr: '$7'}}}
            className={({isActive}: any) => isActive && 'underline'}>
            <Text>Интерактив</Text>
          </Link>
          <Link
            as={RemixNavLink}
            to="/materials"
            variant="subtle"
            css={{textTransform: 'uppercase', mr: '$5', '@bp2': {mr: '$7'}}}
            className={({isActive}: any) => isActive && 'underline'}>
            <Text>Материалы</Text>
          </Link>
          <Link
            as={RemixNavLink}
            to="/contact"
            variant="subtle"
            css={{textTransform: 'uppercase'}}
            className={({isActive}: any) => isActive && 'underline'}>
            <Text>Контакты</Text>
          </Link>
        </Flex>
      </Flex>
    </Container>
  )
}
