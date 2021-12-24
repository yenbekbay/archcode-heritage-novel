import React from 'react'
import {MetaFunction} from 'remix'
import useOnClickOutside from 'use-onclickoutside'
import {AnimatedText, AnimatedTextInstance} from '~/components/AnimatedText'
import {Container} from '~/styles/Container'
import {Section} from '~/styles/Section'

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: 'Снести нельзя оставить!',
    description: 'Сохраняем архитектурную идентичность Алматы',
  }
}

export default function Interactive() {
  const textRef = React.useRef<HTMLSpanElement>(null)
  const animatedTextRef = React.useRef<AnimatedTextInstance>(null)
  useOnClickOutside(textRef, () => animatedTextRef.current?.cancel())

  return (
    <Section>
      <Container>
        <AnimatedText ref={animatedTextRef} textRef={textRef}>
          В городе, с цветущими яблонями и журчащими арыками, где возвышалось
          здание с изогнутой золотой крышей и стучали об рельсы трамваи, на
          центральной площади что-то строил старик, а перед ним табличка: “Я
          верну голубое небо”
        </AnimatedText>
      </Container>
    </Section>
  )
}
