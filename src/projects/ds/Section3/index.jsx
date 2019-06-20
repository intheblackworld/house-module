/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react'
import { withTrans } from 'utils'
// import ViewPort from 'components/ViewPort'
// import { Element } from 'react-scroll'
// import Viewport from 'components/ViewPort'
// import ImageBg from 'components/ImageBg'
import c from './index.scss'

const Section2 = ({ show }) => {
  const containerClass = withTrans('container', c, show)

  const [pageIndex, setPageIndex] = useState(1)
  const addIndex = () => {
    if (pageIndex === 4) {
      setPageIndex(1)
    } else {
      setPageIndex(pageIndex + 1)
    }
  }

  const subIndex = () => {
    if (pageIndex === 1) {
      setPageIndex(4)
    } else {
      setPageIndex(pageIndex - 1)
    }
  }

  return (
    <div className={containerClass}>
      <div className={c.left}>
        {pageIndex === 1 && <img src={require('./1.png')} alt="" className={c.img} />}
        {pageIndex === 2 && <img src={require('./2.png')} alt="" className={c.img} />}
        {pageIndex === 3 && <img src={require('./3.png')} alt="" className={c.img} />}
        {pageIndex === 4 && <img src={require('./4.png')} alt="" className={c.img} />}
        <div className={c.btnGroup}>
          <div className={c.btnLeft} onClick={subIndex} onKeyDown={subIndex}>
            <img src={require('./btnLeft.png')} alt="" />
          </div>
          <div className={c.pages}>{pageIndex}/4</div>
          <div className={c.btnRight} onClick={addIndex} onKeyDown={addIndex}>
            <img src={require('./btnRight.png')} alt="" />
          </div>
        </div>
      </div>
      <div className={c.right}>
        <div className={c.content}>
          <img src={require('./label.png')} alt="" className={c.label} />
          <h3>交通大格局 接軌國際正核心</h3>
          <p>
            近擁南京東路、敦化北路金融商圈繁榮，建國大道縱貫市心南北，一次連結平面路網核心，輕鬆接軌松山、桃園雙機場，同時鄰近松江南京站雙捷運線交匯
          </p>
        </div>
      </div>
    </div>
  )
}

export default Section2
