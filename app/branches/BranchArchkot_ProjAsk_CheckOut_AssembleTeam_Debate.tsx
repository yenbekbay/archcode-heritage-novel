import {
  adyaPchelkinaPng,
  archbot3Png,
  archkot4Png,
  bgAskAfterAltJpg,
  bgDeveloperHqInsidePng,
  bgDeveloperHqOutsideJpg,
  developerRepB1Png,
  developerRepB2Png,
  developerRepB3Png,
  developerRepB4Png,
  developerRepB5Png,
  gorzhempoPng,
  tinaShtunerPng,
} from '~/assets/game'
import {Branch, Menu, Say, Scene, Title} from '~/lib'

export function BranchArchkot_ProjAsk_CheckOut_AssembleTeam_Debate() {
  return (
    <Branch>
      <Scene src={bgDeveloperHqOutsideJpg} />
      <Scene src={bgDeveloperHqInsidePng} />

      <Say
        tag="АрхКот:"
        image={{uri: archkot4Png, style: {width: '100%', bottom: 0}}}>
        —Это сейчас практически единственное здание, которое не было изменено
      </Say>

      <Say
        tag="Девелопер:"
        image={{uri: developerRepB1Png, style: {width: '100%', bottom: 0}}}>
        —Внутри мы хотим создать современные, удобные помещёния, увеличить
        свободную площадь,
      </Say>

      <Say image={{uri: developerRepB2Png, style: {width: '100%', bottom: 0}}}>
        а ещё сделать open space — с учетом прозрачного фасада, будет больше
        света!
      </Say>

      <Say image={{uri: developerRepB3Png, style: {width: '100%', bottom: 0}}}>
        Стекла на фасаде сделаем зеркальными!
      </Say>

      <Say
        tag="Горжемпо:"
        image={{uri: gorzhempoPng, style: {width: '100%', bottom: 0}}}>
        —В начале 80-х годов прошлого века я мечтал о зеркальном стекле,
        которого в СССР не было
      </Say>

      <Say image={{uri: gorzhempoPng, style: {width: '100%', bottom: 0}}}>
        Из-за дефицита материала в итоге при строительстве было использовано
        дымчатое стекло,
      </Say>

      <Say image={{uri: gorzhempoPng, style: {width: '100%', bottom: 0}}}>
        и в проекте, судя по рендерам, оно заменяется на зеркальное
      </Say>

      <Say
        tag="Тина Штунер:"
        image={{uri: tinaShtunerPng, style: {width: '100%', bottom: 0}}}>
        —Это уже исторический памятник, и сделать зеркальные окна — нарушение
        облика, к которому мы привыкли
      </Say>

      <Say
        tag="Адя Пчелкина:"
        image={{uri: adyaPchelkinaPng, style: {width: '100%', bottom: 0}}}>
        —Есть ли у Bay Shatyr Group лицензия на работу с памятниками?
      </Say>

      <Say
        tag="Девелопер:"
        image={{uri: developerRepB4Png, style: {width: '100%', bottom: 0}}}>
        …
      </Say>

      <Say
        tag="АрхКот:"
        image={{uri: archkot4Png, style: {width: '100%', bottom: 0}}}>
        —Нужен кто-то, кто будет контролировать правильность процесса!
      </Say>

      <Say
        tag="Девелопер:"
        image={{uri: developerRepB5Png, style: {width: '100%', bottom: 0}}}>
        …
      </Say>

      <Scene src={bgDeveloperHqOutsideJpg} />

      <Say>
        А в результате договорились архток, архбот и архкот с девелопером, что
        будут встречаться в процессе работы и стройки процесс обсуждать
      </Say>

      <Scene src={bgAskAfterAltJpg} />

      <Say>
        Поздравляем! Облик здания сохранен! Не даром прошли все ваши и вот
        результат — деликатная реставрация объекта
      </Say>

      <Say>
        Побегайте по лестницам у входа, почувствйте себя снова ребенком!
      </Say>

      <Say
        tag="АрхБот:"
        image={{uri: archbot3Png, style: {width: '100%', bottom: 0}}}>
        Но вот памятником оно всё же не стало…ушел аким, ушел и список…
      </Say>

      <Say
        tag="АрхБот:"
        image={{uri: archbot3Png, style: {width: '100%', bottom: 0}}}>
        {
          'Хотите узнать, что написали СМИ о состоявшейся реставрации АСК?\n\n[Ссылка на статьи](#)'
        }
      </Say>

      <Title hide={-1}>Конец игры</Title>

      <Menu
        scheme="dark"
        choices={[
          {
            label: 'Начать заново',
            onClick: (ctx) => ctx.goToBranch('Intro'),
          },
        ]}
      />
    </Branch>
  )
}
