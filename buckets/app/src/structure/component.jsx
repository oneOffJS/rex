import h, { Fragment } from '@kuba/h'
import Header from '@kuba/header'
import Site from '@kuba/site'
import Story from '@kuba/story'
import text from '@kuba/text'
import style from './style.css'

export default () =>
  <Site className={style.structure}>
    <Header className={style.structure__header} slot='header' />
    <Fragment slot='main'>
      <Story className={style.structure__story}>
        <text.H1 className={style.structure__h1} master darker larger>Structure</text.H1>
      </Story>
    </Fragment>
  </Site>