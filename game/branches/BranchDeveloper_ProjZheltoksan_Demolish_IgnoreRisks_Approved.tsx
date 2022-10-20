import {
  angryCrowd1Png,
  bgCityHallConferenceRoomJpg,
  bgDeveloperHqInsideJpg,
  bgDeveloperHqOutsideJpg,
  bgZheltoksanBeforeJpg,
  developerRepAPng,
  developerRepB1Png,
  developerRepB5Png,
  developerRepB7Png,
  developerRepB10Png,
  letterPng,
  mayor7Png,
  redhead12Png,
  redhead13Png,
  stampApprovedPng,
  transition1Mp3,
} from 'assets/game'
import React from 'react'
import {Branch, Menu, Say, Scene, Show} from 'react-visual-novel'
import {SCENE_AUDIO} from '../sounds'

export function BranchDeveloper_ProjZheltoksan_Demolish_IgnoreRisks_Approved() {
  const [answers] = React.useState(() => new Map<number, 'a' | 'b'>())
  return (
    <Branch>
      <Scene src={bgCityHallConferenceRoomJpg.src} audio={SCENE_AUDIO.indoor} />

      <Show
        src={{
          uri: letterPng.src,
          style: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            backgroundColor: '#e7dbab',
            transform: 'scale(2.5)',
            transformOrigin: '50% 35%',
          },
        }}
        hide={1}
      />

      <Show
        src={{
          uri: stampApprovedPng.src,
          style: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transform: 'translateY(-15%)',
          },
        }}
      />

      <Say
        tag={{text: 'Аким:', color: '#687065'}}
        image={{uri: mayor7Png.src, align: 'bottom', style: {bottom: '-12%'}}}
      >
        —Я согласен с вашими решениями. Можете начинать стройку
      </Say>

      <Scene src={bgZheltoksanBeforeJpg.src} audio={SCENE_AUDIO.city} />

      <Say
        image={{uri: angryCrowd1Png.src, align: 'bottom'}}
        audio={SCENE_AUDIO.chatter}
      >
        Общественность возмущена
      </Say>

      <Scene src={bgDeveloperHqInsideJpg.src} audio={SCENE_AUDIO.indoor} />

      <Say
        image={{uri: developerRepB7Png.src, align: 'bottom'}}
        menu={[
          {
            label: 'Игнорировать',
            onClick: (ctx) => ctx.goToNextStatement(),
          },
          {
            label: 'Провести общественные слушаниям',
            onClick: (ctx) => ctx.goToNextStatement(1),
          },
        ]}
      >
        Вечно всем надо совать свой нос в чужое дело… Что с этим делать?
      </Say>

      <Say>
        Можно игнорировать запросы, но общественные слушания придётся проводить
        в любом случае
      </Say>

      <Scene
        src={bgDeveloperHqOutsideJpg.src}
        audio={{onEntrance: transition1Mp3}}
      />

      <Say>Общественные слушания</Say>

      <Scene src={bgDeveloperHqInsideJpg.src} audio={SCENE_AUDIO.hearings} />

      <Say
        tag={{text: 'Менеджер проекта:', color: '#A57B55'}}
        image={{uri: developerRepAPng.src, align: 'bottom'}}
      >
        —Добрый день, Мы — представители Bay Shatyr Group
      </Say>

      <Say image={{uri: developerRepB10Png.src, align: 'bottom'}}>
        —В рамках проекта будет построено девятиэтажное здание. Под галереей на
        последнем этаже подразумевается ресторан. Подземный 3-уровневый паркинг
        на 490 авто
      </Say>

      <Say
        tag={{text: 'Активистка:', color: '#C2653A'}}
        image={{uri: redhead13Png.src, align: 'bottom'}}
      >
        —Но ведь это создаёт огромную нагрузку на транспортную инфраструктуру и
        не только…
      </Say>

      <Say
        image={{uri: developerRepB1Png.src, align: 'bottom'}}
        menu={[
          {
            label: 'А) Всё под контролем, беспокойств не будет',
            onClick: (ctx) => {
              answers.set(0, 'a')
              ctx.goToNextStatement()
            },
          },
          {
            label: 'Б) Мы учтем ваше замечание и пересмотрим расчеты',
            onClick: (ctx) => {
              answers.set(0, 'b')
              ctx.goToNextStatement()
            },
          },
        ]}
      >
        Что ответить?
      </Say>

      <Say
        tag={{text: 'Активистка:', color: '#C2653A'}}
        image={{uri: redhead12Png.src, align: 'bottom'}}
      >
        —Судя по всему, предполагается вырубка всех существующих на территории
        здания деревьев???
      </Say>

      <Say
        image={{uri: developerRepB5Png.src, align: 'bottom'}}
        menu={[
          {
            label: 'А) Всё по правилам, и придуманы они не нами',
            onClick: (ctx) => {
              answers.set(1, 'a')
              ctx.goToNextStatement()
            },
          },
          {
            label: 'Б) В проекте возможны поправки, учтём ваши пожелания',
            onClick: (ctx) => {
              answers.set(1, 'b')
              ctx.goToNextStatement()
            },
          },
        ]}
      >
        Что ответить?
      </Say>

      <Say
        tag={{text: 'Активистка:', color: '#C2653A'}}
        image={{uri: redhead12Png.src, align: 'bottom'}}
      >
        —А в целом то, здание, хоть и не является официально памятником, но это
        история города! Его непременно нужно сохранить!!!
      </Say>

      <Say
        image={{uri: developerRepB5Png.src, align: 'bottom'}}
        menu={[
          {
            label: 'А) На уровне законодательства нет никаких наращений',
            onClick: (ctx) => {
              answers.set(2, 'a')
              ctx.goToNextStatement()
            },
          },
          {
            label: 'Б) Благодарим за ваши пожелания. Они заставляют задуматься',
            onClick: (ctx) => {
              answers.set(2, 'b')
              ctx.goToNextStatement()
            },
          },
        ]}
      >
        Что ответить?
      </Say>

      <Menu
        choices={[
          {
            label: 'Дальше',
            onClick: (ctx) => {
              const values = [...answers.values()]
              const aCount = values.filter((v) => v === 'a')
              const bCount = values.filter((v) => v === 'b')
              ctx.goToBranch(
                aCount > bCount
                  ? 'Developer_ProjZheltoksan_Demolish_IgnoreRisks_Approved_Boycott'
                  : 'Developer_ProjZheltoksan_Demolish_IgnoreRisks_Approved_Silence',
              )
            },
          },
        ]}
      />
    </Branch>
  )
}
