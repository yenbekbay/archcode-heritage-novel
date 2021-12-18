import {Box, Container, Section} from '@modulz/design-system'
import React from 'react'
import {MetaFunction} from 'remix'

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: 'Снести нельзя оставить!',
    description: 'Сохраняем архитектурную идентичность Алматы',
  }
}

export default function Interactive() {
  React.useLayoutEffect(() => {
    ;(async () => {
      const RenJS = (await import(
        // @ts-expect-error
        'renjs'
      )) as typeof import('renjs/dist/types/src')
      const Phaser = (await import('phaser-ce')).default

      const RenJSConfig: import('renjs/dist/types/src/core/RJSGameConfig').RJSGameConfig =
        {
          name: 'Quickstart',
          w: 800,
          h: 600,
          renderer: Phaser.AUTO, // become renderer
          scaleMode: Phaser.ScaleManager.SHOW_ALL,
          loadingScreen: {
            background: 'assets/game/gui/loaderloaderbackground.png',
            loadingBar: {
              asset: 'assets/game/gui/loaderloading-bar.png',
              position: {
                x: 109,
                y: 458,
              },
              size: {
                w: 578,
                h: 82,
              },
            },
          },
          fonts: 'assets/game/gui/fonts.css',
          guiConfig: 'story/GUI.yaml',
          storyConfig: 'story/Config.yaml',
          storySetup: 'story/Setup.yaml',
          storyText: ['story/Story.yaml'],
          logChoices: true,
        }

      const RenJSGame = new RenJS.game(RenJSConfig)
      RenJSGame.launch()
    })()
  }, [])

  return (
    <Box>
      <Section size="2">
        <Container size="3">TODO</Container>
      </Section>
    </Box>
  )
}
