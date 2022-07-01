import {teamPhotoJpg} from '~/assets/www'
import {Hero} from '~/components'

export default function AboutUs() {
  return (
    <section>
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-[position:center_top] bg-no-repeat"
          style={{backgroundImage: `url(${teamPhotoJpg})`}}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <Hero className="pb-96" title="Команда">
        <p>TODO</p>
      </Hero>
    </section>
  )
}
