import {Command} from '../components'
import type {ImageViewProps, MenuViewProps} from './views'
import {ImageView, MenuView} from './views'

export interface MenuProps extends Omit<MenuViewProps, 'controls'> {
  image?: string | Omit<ImageViewProps, 'controls'>
  zIndex?: number
}

export function Menu({image, zIndex, ...menuProps}: MenuProps) {
  const imageProps = typeof image === 'string' ? {uri: image} : image
  return (
    <Command name="Menu" behavior={['non_skippable']} zIndex={zIndex}>
      {(controls) => (
        <>
          {imageProps && <ImageView controls={controls} {...imageProps} />}
          <MenuView controls={controls} {...menuProps} />
        </>
      )}
    </Command>
  )
}
