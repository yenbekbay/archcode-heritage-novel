import archcodeLogoUrl from '~/assets/logo.png'
import {Image} from '~/lib'

export function ArchcodeLogo() {
  return (
    <Image css={{height: '3rem'}} src={archcodeLogoUrl} alt="Логотип Архкод" />
  )
}
