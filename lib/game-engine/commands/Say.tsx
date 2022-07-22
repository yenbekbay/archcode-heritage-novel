import React from 'react'
import type {CommandProps} from '../components'
import {Command} from '../components'
import type {
  Choice,
  ImageViewProps,
  MenuViewProps,
  TextViewProps,
} from './views'
import {charGroupsForMarkdown, ImageView, MenuView, TextView} from './views'

export interface SayProps
  extends Pick<CommandProps, 'audio' | 'hide' | 'next' | 'zIndex'>,
    Omit<TextViewProps, 'groups' | 'controls'> {
  children: string
  image?: string | Omit<ImageViewProps, 'controls'>
  menu?: Choice[] | Omit<MenuViewProps, 'controls'>
  durationMs?: number
}

export function Say({
  children,
  placement,
  scheme,
  image,
  menu,
  durationMs,
  audio,
  hide,
  next,
  zIndex,
  ...textProps
}: SayProps) {
  const groups = React.useMemo(
    () => charGroupsForMarkdown(children),
    [children],
  )
  const length = groups.flatMap((g) => g.chars).length
  const imageProps = typeof image === 'string' ? {uri: image} : image
  const menuProps =
    typeof menu === 'object' && Array.isArray(menu) ? {choices: menu} : menu
  return (
    <Command
      name="Say"
      behavior={
        menuProps
          ? ['non_skippable']
          : groups.some((g) => g.type === 'link')
          ? ['skippable_static']
          : ['skippable_timed', {durationMs: durationMs ?? 4000 + length * 25}]
      }
      audio={audio}
      hide={hide}
      next={next}
      zIndex={zIndex}>
      {(controls) => (
        <>
          {imageProps && <ImageView controls={controls} {...imageProps} />}

          <TextView
            groups={groups}
            placement={placement}
            scheme={scheme}
            controls={controls}
            {...textProps}
          />

          {menuProps && (
            <MenuView
              placement={placement === 'bottom' ? 'top' : 'bottom'}
              scheme={scheme}
              controls={controls}
              {...menuProps}
            />
          )}
        </>
      )}
    </Command>
  )
}
