import {Box} from '~/styles/Box'

export default function GradientBackground() {
  return (
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
  )
}
