// import { withTrans } from 'utils'
import cx from 'classnames'
// import { Fragment } from 'react'
import ViewPort from 'components/ViewPort'
import c from './index.scss'
// import { isMobile } from '../../../utils'

const Container = ({ show }) => {
  const containerClass = cx(c.container, {
    [c.show]: show,
    [c.hide]: !show,
  })
  return (
    <div className={containerClass}>
      <img className={c.buildingName} src={require('./buildingName.png')} alt="博悅的圖片" />
      <img className={c.tag} src={require('./tag.png')} alt="博悅的圖片" />
      <img src={require('./hand.png')} className={c.hand} alt="博悅的圖片" />
      <img className={c.bgImg} src={require('./bg.png')} alt="博悅的圖片" />
    </div>
  )
}
const Section2 = () => (
  <div className={c.bg}>
    <ViewPort isBottom={false} showOneTime>
      <Container />
    </ViewPort>
  </div>
)

export default Section2
