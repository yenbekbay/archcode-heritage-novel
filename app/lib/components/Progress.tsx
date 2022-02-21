import * as ProgressPrimitive from '@radix-ui/react-progress'
import {styled} from '../stitches.config'

export const Progress = styled(ProgressPrimitive.Root, {
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: '$slate6',
  borderRadius: '99999px',
  width: 300,
  height: 25,
})

export const ProgressIndicator = styled(ProgressPrimitive.Indicator, {
  backgroundColor: '$hiContrast',
  height: '100%',
  transition: 'width 660ms cubic-bezier(0.65, 0, 0.35, 1)',
})
