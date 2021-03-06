import h from '@kuba/h'
import Container from '@kuba/container'
import Logo from '@kuba/logo'
import Bag from './bag'
import Darlings from './darlings'
import Menu from './menu'
import Nav from './nav'
import Profile from './profile'
import Region from './region'
import Search from './search'
import Services from './services'
import style from './style.css'

export default (props) =>
  <header {...props} className={[style.header, props.className]}>
    <Container className={style.header__container}>
      <div className={style.header__div}>
        <Logo className={style.header__logo} />
        <Search className={style.header__search} />
      </div>
      <div className={style.header__div}>
        <Region className={style.header__region} />
        <Services className={style.header__services} />
        <Profile className={style.header__profile} />
        <Bag className={style.header__bag} />
        <Menu className={style.header__menu} />
      </div>
    </Container>
    <Container className={[style.header__container, style.desktop]}>
      <Nav className={style.header__nav} />
      <Darlings className={style.header__darlings} />
    </Container>
  </header>
