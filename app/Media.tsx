import {createMedia} from '@artsy/fresnel'

const AppMedia = createMedia({
  breakpoints: {
    sm: 0,
    md: 768,
    lg: 1024,
    xl: 1192,
  },
})

export const mediaStyle = AppMedia.createMediaStyle()
export const {Media, MediaContextProvider} = AppMedia
