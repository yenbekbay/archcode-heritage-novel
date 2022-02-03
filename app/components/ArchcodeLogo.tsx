import archcodeLogoUrl from '~/assets/logo.png'
import {Box} from '~/lib/components/Box'

export function ArchcodeLogo() {
  return (
    <Box
      as="img"
      css={{height: '3rem'}}
      src={archcodeLogoUrl}
      alt="Логотип Архкод"
    />
  )
}
