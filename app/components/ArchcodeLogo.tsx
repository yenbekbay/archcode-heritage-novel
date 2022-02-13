import archcodeLogoUrl from '~/assets/logo.png'
import {Box} from '~/lib'

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
