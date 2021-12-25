import {Button} from '~/styles/Button'
import {Flex} from '~/styles/Flex'

export interface Option {
  label: string
  action:
    | {type: 'go_to_scene'; sceneId: string}
    | {type: 'show_options'; options: Option[]}
}

export interface OptionsProps {
  options: Option[]
}

export function Options({options}: OptionsProps) {
  return (
    <Flex direction="column" align="center" gap="2">
      {options.map((o) => (
        <Button
          key={o.label}
          variant="transparentWhite"
          css={{
            fontFamily: '$calligraph',
            fontSize: '$4',
            textShadow: '0 1px $colors$slate12',
            backgroundColor: 'transparent',
          }}
          onClick={() => {
            alert('Не сделано')
          }}>
          {o.label}
        </Button>
      ))}
    </Flex>
  )
}
