// import { withTrans } from 'utils'
import cx from 'classnames'
import { Fragment, useState, useEffect } from 'react'
import ViewPort from 'components/ViewPort'
import c from './index.scss'
import { isMobile } from '../../../utils'

const useMask = () => {
  const [mask, setMask] = useState(false)
  const showMask = () => setMask(false)
  useEffect(() => {
    if (isMobile) {
      setMask(true)
    }
  }, [])
  return { mask, showMask }
}
const Container = ({ show }) => {
  const containerClass = cx(c.bg, {
    [c.show]: show,
    [c.hide]: !show,
  })
  return (
    <div className={containerClass}>
      <div className={c.content}>
        <h3 className={c.title}>
          翻轉新東區! <br />
          近4000坪大器造鎮
        </h3>
        <div className={c.desc}>
          <p>南紡購物商圈 X 成大商圈 X 東門商圈 X 德安商圈 X 仁和商圈 X 家樂福商圈</p>
          <br />
        </div>
      </div>
      <img src={require('./bg.png')} alt="" className={c.section2} />
    </div>
  )
}
const Section2 = () => {
  const { mask, showMask } = useMask()
  const maskClass = cx(c.mask, {
    [c.show]: mask,
  })

  return isMobile ? (
    <Fragment>
      <div className={c.scrollBg}>
        <div className={maskClass} onClick={showMask} onKeyDown={showMask} onTouchStart={showMask}>
          {/* <h3 className={c.maskTitle}>請左右滑動</h3> */}
          <img src={require('./hand.png')} className={c.hand} alt="" />
        </div>
        <div>
          <div className={c.content}>
            <h3 className={c.title}>
              翻轉新東區! <br />
              近4000坪大器造鎮
            </h3>
            <div className={c.desc}>
              <p>
                南紡購物商圈 X 成大商圈 X <br />
                東門商圈 X 德安商圈 X <br />
                仁和商圈 X 家樂福商圈
              </p>
              <br />
            </div>
          </div>
          <img src={require('./bg.png')} alt="" className={c.scrollImg} />
        </div>
      </div>
    </Fragment>
  ) : (
    <ViewPort isBottom={false} position="200px">
      <Container />
    </ViewPort>
  )
}

export default Section2
