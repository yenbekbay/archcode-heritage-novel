import type {ChoicesProps} from './commands'
import {Blank, Choices, Foreground, Say, Title} from './commands'
import type {LabelProps} from './components'
import {Branch, Label} from './components'
import type {BranchContextValue} from './contexts'
import {useBranchContext} from './contexts'

export function makeStrictBranch<TStatementLabel extends string = never>() {
  return {
    Root: Branch,
    Label: Label as React.ComponentType<LabelProps<TStatementLabel>>,
    useBranchContext:
      useBranchContext as () => BranchContextValue<TStatementLabel>,
    // -- Commands
    Blank,
    Choices: Choices as React.ComponentType<ChoicesProps<TStatementLabel>>,
    Foreground,
    Say,
    Title,
  }
}
