import type {AnimationControls} from 'framer-motion'
import {motion} from 'framer-motion'
import type {CommandViewVariants} from '../../components'

export interface ForegroundViewProps {
  src: string
  style?: React.CSSProperties
  variants: CommandViewVariants
  controls: AnimationControls
}

export function ForegroundView({
  src,
  style,
  variants,
  controls,
}: ForegroundViewProps) {
  return (
    <motion.div
      className="absolute inset-0 flex"
      variants={variants}
      initial="initial"
      animate={controls}
      custom={0}>
      <img className="absolute max-w-none" style={style} src={src} />
    </motion.div>
  )
}
