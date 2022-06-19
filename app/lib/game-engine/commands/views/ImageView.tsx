import type {AnimationControls} from 'framer-motion'
import {motion} from 'framer-motion'
import type {CommandViewAnimation} from '../../components'

export interface ImageViewProps {
  uri: string
  style?: React.CSSProperties
  animation?: CommandViewAnimation
  controls: AnimationControls
}

export function ImageView({
  uri,
  style,
  animation = {
    initial: {opacity: 0},
    entrance: {
      opacity: 1,
      transition: {duration: 1},
    },
    exit: {
      opacity: 0,
      transition: {duration: 0.5, ease: 'easeOut'},
    },
  },
  controls,
}: ImageViewProps) {
  return (
    <motion.div
      className="pointer-events-none absolute inset-0 flex"
      variants={animation}
      initial="initial"
      animate={controls}>
      <img className="absolute max-w-none" style={style} src={uri} />
    </motion.div>
  )
}
