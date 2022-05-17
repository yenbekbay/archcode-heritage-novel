import type {ChoicesProps} from './commands'
import {Blank, Choices, Foreground, Say, Title} from './commands'
import type {LabelProps} from './components'
import {Label, SceneContainer} from './components'
import type {SceneContextValue} from './contexts'
import {useSceneContext} from './contexts'

export function makeScene<TStatementLabel extends string = never>() {
  return {
    Container: SceneContainer,
    Label: Label as React.ComponentType<LabelProps<TStatementLabel>>,
    useSceneContext:
      useSceneContext as () => SceneContextValue<TStatementLabel>,
    // -- Commands
    Blank,
    Choices: Choices as React.ComponentType<ChoicesProps<TStatementLabel>>,
    Foreground,
    Say,
    Title,
  }
}

export type {SceneBackgroundComponentProps} from './components'
