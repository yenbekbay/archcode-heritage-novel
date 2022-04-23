import {HeroGraphic} from './atoms'

export function Hero() {
  return (
    <section>
      <div className="container hero mx-auto">
        <div className="hero-content w-full max-w-none justify-start py-16">
          <h1 className="max-w-2xl text-4xl font-semibold lg:text-5xl">
            Сохраняем архитектурную идентичность Алматы
          </h1>
        </div>
      </div>

      <HeroGraphic />
    </section>
  )
}
