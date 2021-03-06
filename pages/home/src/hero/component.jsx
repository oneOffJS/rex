import h from '@kuba/h'
import Hero from '@kuba/hero'
import schema from './schema'
import style from './style.css'

export default (props) =>
  <Hero {...schema} className={[style.hero, props.className]} />
