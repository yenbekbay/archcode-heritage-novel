import { bgIntroJpg, calligraphyLogoPng } from "#assets/game/index.ts";
import { Menu, Say, useBranchContext } from "#game/runtime.ts";
import { SCENE_AUDIO } from "#game/sounds.ts";
import { useElementRect } from "#lib/use-element-rect.ts";
import { motion } from "framer-motion";
import React from "react";
import { Branch, Command, Play, Show } from "react-visual-novel";

export function BranchIntro() {
  return (
    <Branch>
      <IntroScene />

      <Menu
        placement="middle"
        audio={SCENE_AUDIO.intro}
        choices={[
          {
            label: "Начать",
            onClick: (ctx) => {
              ctx.goToNextStatement();
            },
          },
        ]}
      />

      <Play audio={SCENE_AUDIO.generalTheme} hide={-1} />

      <Say>
        {`
          *Проект инициирован группой АрхКод, которая занимается вопросом сохранения архитектурного наследия. АрхКот, АрхТок и АрхБот — это персонажи, основанные на образах участников АрхКод Алматы.

          Все прочие совпадения с реальностью случайны.
        `}
      </Say>

      <Say>Это город Аталма,</Say>
      <Say>В котором внезапно вырастают алюминиевые заборы,</Say>
      <Say>За которыми разворачиваются строительные работы,</Say>
      <Say>За которыми как правило стоят Девелоперы,</Say>
      <Say>Которые могут поддерживаться Акимами,</Say>
      <Say>За которыми часто следят активисты,</Say>
      <Say>Которые сильно переживают за город,</Say>
      <Say>Который теряет свой колорит.</Say>

      <Show
        src={{
          uri: calligraphyLogoPng.src,
          align: "top",
          style: { paddingLeft: "2rem", paddingRight: "2rem", top: "5rem" },
          animation: {
            initial: { opacity: 0 },
            entrance: {
              opacity: 1,
              transition: { duration: 8 },
            },
            exit: {},
          },
        }}
        hide={-1}
      />

      <Menu
        label="Выберите персонажа"
        choices={[
          {
            label: "Активист",
            onClick: (ctx) => {
              ctx.goToBranch("Activist_0Juncture");
            },
          },
          {
            label: "АрхКот",
            onClick: (ctx) => {
              ctx.goToBranch("Archkot_0Juncture");
            },
          },
          {
            label: "Девелопер",
            onClick: (ctx) => {
              ctx.goToBranch("Developer_0Intro");
            },
          },
          {
            label: "Аким",
            onClick: (ctx) => {
              ctx.goToBranch("Akim_0Menu");
            },
          },
        ]}
      />
    </Branch>
  );
}

function IntroScene() {
  const { containerRect, focusedStatementIndex, getStatementCount } =
    useBranchContext();

  const imgRef = React.useRef<HTMLImageElement>(null);

  const imgRect = useElementRect(imgRef);

  const enteredPercent = Math.min(
    1,
    (focusedStatementIndex + 1) / getStatementCount(),
  );

  return (
    <>
      <Command
        name="IntroScene"
        behavior={["skippable_timed", { durationMs: 0 }]}
        hide={-1}
      >
        {() => null}
      </Command>

      <motion.img
        ref={imgRef}
        src={bgIntroJpg.src}
        initial={{ y: 0 }}
        animate={
          imgRect
            ? {
                y: `calc(${containerRect.height - imgRect.height}px * ${enteredPercent})`,
              }
            : undefined
        }
        transition={{
          duration: INTRO_SCENE_TRANSITION_DURATION_PER_STATEMENT / 1000,
          ease: "easeOut",
        }}
        className="w-full"
      />
    </>
  );
}

const INTRO_SCENE_TRANSITION_DURATION_PER_STATEMENT = 8000;
