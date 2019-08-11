// import { withTrans } from 'utils'
import cx from 'classnames'
import { Fragment, useState, useEffect } from 'react'
// import ViewPort from 'components/ViewPort'
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
//   return (
//     <div className={containerClass}>
//       {/* {!isMobile && (
//         <span>
//           <h3 className={c.title}>驕傲的站在郭台銘面前</h3>
//           <div className={c.desc}>
//             <h3>鴻海頂埔園區正對面，感動科技人的精工收藏</h3>
//             <br />
//             <span>
//               <p>逾兆元產值10公頃高科技自然劇場，一個用心完美的建築家，與園區</p>
//               <p>最講究的生活家，相約在中央大道第一排風景包廂；放眼天地穹蒼，</p>
//               <p>靜取萬方艷羨，歡迎有遠見的您就座，與鴻海面對面。</p>
//               <p>人生、呼吸、視野開始世界級！</p>
//             </span>
//           </div>
//         </span>
//       )} */}
//       {/* <img className={c.flower} src={require('./flower.png')} alt="" /> */}
//     </div>
//   )
// }
const Section2 = () => {
  const { mask, showMask } = useMask()
  const maskClass = cx(c.mask, {
    [c.show]: mask,
  })

  return isMobile ? (
    <Fragment>
      {/* <ViewPort>
        <Container />
      </ViewPort> */}
      <div className={c.scrollBg}>
        <div className={maskClass} onClick={showMask} onKeyDown={showMask} onTouchStart={showMask}>
          {/* <h3 className={c.maskTitle}>請左右滑動</h3> */}
          <img src={require('./hand.png')} className={c.hand} alt="" />
        </div>
        <div>
          {/* <div className={c.content}>
            <h3 className={c.title}>驕傲的站在郭台銘面前</h3>
            <div className={c.desc}>
              <h3>鴻海頂埔園區正對面，感動科技人的精工收藏</h3>
              <br />
              <span>
                <p>逾兆元產值10公頃高科技自然劇場，<br />一個用心完美的建築家，與園區</p>
                <p>最講究的生活家，<br />相約在中央大道第一排風景包廂；<br />放眼天地穹蒼，</p>
                <p>靜取萬方艷羨，<br />歡迎有遠見的您就座，與鴻海面對面。</p>
                <p>人生、呼吸、視野開始世界級！</p>
              </span>
            </div>
          </div> */}
          <img src={require('./bg.jpg')} alt="" className={c.scrollImg} />
        </div>
      </div>
    </Fragment>
  ) : (
    <img src={require('./bg.jpg')} alt="" className={c.section2} />
    // <div className={c.bg}>
    //   <ViewPort>
    //     <Container />
    //   </ViewPort>
    // </div>
  )
}

export default Section2
