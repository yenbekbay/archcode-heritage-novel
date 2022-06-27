import {Hero} from '~/components/Hero'

export default function Home() {
  return (
    <section className="text-content-invert">
      <Hero title="Снести нельзя оставить">
        <p>
          Этот проект посвящен привлечению внимания общественности к теме
          сохранения архитектурного наследия и права на коллективную память,
          запечатлённую в архитектуре города. Проект подытоживает адвокационный
          опыт инициативы «Архкод Алматы» на протяжении шести лет.
        </p>

        <p>
          <a className="btn btn-outline" href="/play">
            Играть
          </a>
        </p>
      </Hero>

      <div className="container mx-auto px-8 py-16">
        <article className="prose">
          <p>TODO</p>
        </article>
      </div>
    </section>
  )
}
