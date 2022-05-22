import type {AnimationControls} from 'framer-motion'
import {motion} from 'framer-motion'
import type {CommandViewAnimation} from '../../components'

export interface ForegroundViewProps {
  src: string
  style?: React.CSSProperties
  animation?: CommandViewAnimation
  controls: AnimationControls
}

export function ForegroundView({
  src,
  style,
  animation = {
    initial: {opacity: 0},
    entrance: {
      opacity: 1,
      transition: {delay: 0.5, duration: 1},
    },
    exit: {
      opacity: 0,
      transition: {duration: 0.5, ease: 'easeOut'},
    },
  },
  controls,
}: ForegroundViewProps) {
  return (
    <motion.div
      className="absolute inset-0 flex"
      variants={animation}
      initial="initial"
      animate={controls}>
      <img className="absolute max-w-none" style={style} src={src} />
    </motion.div>
  )
}
