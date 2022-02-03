import {ArchcodeLogo} from './ArchcodeLogo'
import {NavLink as RemixNavLink} from 'remix'
import {Box} from '~/lib/components/Box'
import {Container} from '~/lib/components/Container'
import {Flex} from '~/lib/components/Flex'
import {Link} from '~/lib/components/Link'

const LINKS: {to: string; label: string}[] = [
  {
    to: '/about',
    label: 'О нас',
  },
  {
    to: '/interactive',
    label: 'Интерактив',
  },
  {
    to: '/materials',
    label: 'Материалы',
  },
  {
    to: '/contact',
    label: 'Контакты',
  },
]

export function Header() {
  return (
    <Container as="header">
      <Flex justify="between" gap="4" css={{py: '$4'}}>
        <Box as={RemixNavLink} css={{flexShrink: 0}} to="/">
          <ArchcodeLogo />
        </Box>

        <Flex as="nav" align="center" gap="4">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              as={RemixNavLink}
              css={{textTransform: 'uppercase'}}
              style={({isActive}: any) =>
                isActive ? {textDecoration: 'underline'} : {}
              }
              to={l.to}>
              {l.label}
            </Link>
          ))}
        </Flex>
      </Flex>
    </Container>
  )
}
