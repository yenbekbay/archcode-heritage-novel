import {SceneActivist1} from './SceneActivist1'
import {SceneActivist1_2a} from './SceneActivist1_2a'
import {SceneActivist1_2b} from './SceneActivist1_2b'
import {SceneActivist1_2b_3a} from './SceneActivist1_2b_3a'
import {SceneActivist1_2b_3b} from './SceneActivist1_2b_3b'
import {SceneActivist1_2b_3b_4a} from './SceneActivist1_2b_3b_4a'
import {SceneActivist1_2b_3b_4b} from './SceneActivist1_2b_3b_4b'
import {SceneActivist1_2b_3b_4c} from './SceneActivist1_2b_3b_4c'
import {SceneCityHall1} from './SceneCityHall1'
import {SceneCityHall1_2a} from './SceneCityHall1_2a'
import {SceneCityHall1_2a_3a} from './SceneCityHall1_2a_3a'
import {SceneCityHall1_2a_3a_4a} from './SceneCityHall1_2a_3a_4a'
import {SceneCityHall1_2a_3a_4a_5a} from './SceneCityHall1_2a_3a_4a_5a'
import {SceneCityHall1_2a_3a_4a_5a_6a} from './SceneCityHall1_2a_3a_4a_5a_6a'
import {SceneCityHall1_2a_3a_4a_5a_6b} from './SceneCityHall1_2a_3a_4a_5a_6b'
import {SceneCityHall1_2a_3a_4a_5a_6b_7a} from './SceneCityHall1_2a_3a_4a_5a_6b_7a'
import {SceneCityHall1_2a_3a_4b} from './SceneCityHall1_2a_3a_4b'
import {SceneCityHall1_2a_3a_4b_5a} from './SceneCityHall1_2a_3a_4b_5a'
import {SceneCityHall1_2a_3a_4b_5b} from './SceneCityHall1_2a_3a_4b_5b'
import {SceneIntro} from './SceneIntro'

export const scenes = {
  Intro: SceneIntro,
  Activist1: SceneActivist1,
  Activist1_2a: SceneActivist1_2a,
  Activist1_2b: SceneActivist1_2b,
  Activist1_2b_3a: SceneActivist1_2b_3a,
  Activist1_2b_3b: SceneActivist1_2b_3b,
  Activist1_2b_3b_4a: SceneActivist1_2b_3b_4a,
  Activist1_2b_3b_4b: SceneActivist1_2b_3b_4b,
  Activist1_2b_3b_4c: SceneActivist1_2b_3b_4c,
  CityHall1: SceneCityHall1,
  CityHall1_2a: SceneCityHall1_2a,
  CityHall1_2a_3a: SceneCityHall1_2a_3a,
  CityHall1_2a_3a_4a: SceneCityHall1_2a_3a_4a,
  CityHall1_2a_3a_4a_5a: SceneCityHall1_2a_3a_4a_5a,
  CityHall1_2a_3a_4a_5a_6a: SceneCityHall1_2a_3a_4a_5a_6a,
  CityHall1_2a_3a_4a_5a_6b: SceneCityHall1_2a_3a_4a_5a_6b,
  CityHall1_2a_3a_4a_5a_6b_7a: SceneCityHall1_2a_3a_4a_5a_6b_7a,
  CityHall1_2a_3a_4b: SceneCityHall1_2a_3a_4b,
  CityHall1_2a_3a_4b_5a: SceneCityHall1_2a_3a_4b_5a,
  CityHall1_2a_3a_4b_5b: SceneCityHall1_2a_3a_4b_5b,
}

declare global {
  type SceneId = keyof typeof scenes
}
