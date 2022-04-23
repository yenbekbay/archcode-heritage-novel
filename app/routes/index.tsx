import {Hero} from '~/components'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />

      <div className="flex flex-col py-8">
        <div className="divider mx-auto w-64" />
      </div>

      <section>
        <div className="container hero mx-auto">TODO: Главная</div>
      </section>
    </div>
  )
}
