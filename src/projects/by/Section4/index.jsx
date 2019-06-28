/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react'
import { withTrans } from 'utils'
import cx from 'classnames'
// import ViewPort from 'components/ViewPort'
// import SlidePicker from 'components/SliderPicker'
// import Viewport from 'components/ViewPort'
import { isMobile } from '../../../utils'
// import Carousel from 'components/Carousel'
import c from './index.scss'

const list = [
  {
    title: '住進校園生活圈 天天好青春',
    desc:
      '新南國小、安平國小、金城國中、安平國中，慈濟完全中學校落成後，教育也是一條龍；九年免接送家長最愛!',
    src: require('./area4_img1.jpg'),
  },
  {
    title: '安平五期重劃區核心 趴趴造PLAY',
    desc:
      '觀光、餐飲、娛樂日漸完善、多重商圈環繞，生活機能充足，流行時尚、創意文化，精彩品味最前線！',
    src: require('./area4_img2.jpg'),
  },
  {
    title: '與自然環境共舞 健康入主',
    desc: '二二八紀念公園、慶平雕塑公園、府平公園、怡平公園，生活圈坐擁生態綠地環境！健康天天來!',
    src: require('./area4_img3.jpg'),
  },
]
const Section4 = ({ show }) => {
  const [listIndex, setListIndex] = useState(0)

  const [isImageShow, toggleImageDialog] = useState(false)

  const showImageDialog = () => {
    toggleImageDialog(!isImageShow)
  }

  const closeImageDialog = () => {
    toggleImageDialog(false)
  }

  const closeImageClass = cx(c.close, {
    [c.show]: isImageShow,
  })

  const imageDialogClass = cx(c.imageDialog, {
    [c.show]: isImageShow,
  })

  return (
    <div className={c.bg}>
      {isMobile ? (
        list.map(item => (
          <div className={c.mItem} key={item.src}>
            <img className={c.image} src={item.src} alt="博悅的圖片" />
            <div className={c.mBlock}>
              <img src={require('./area4_logo.png')} alt="博悅的圖片" />
              <div className={c.mContent}>
                <h3 className={c.mTitle}>{list[listIndex].title}</h3>
                <hr />
                <p className={c.mDesc}>{list[listIndex].desc}</p>
                <h3 className={c.mBottomTitle}>introduction</h3>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className={withTrans('container', c, show)}>
          <div className={c.left}>
            <div className={c.top}>
              <div
                className={c.item}
                onMouseEnter={() => setListIndex(0)}
                onClick={showImageDialog}
                onKeyDown={showImageDialog}
              />
              <div
                className={c.item}
                onMouseEnter={() => setListIndex(1)}
                onClick={showImageDialog}
                onKeyDown={showImageDialog}
              />
            </div>
            <div className={c.bottom}>
              <div
                className={c.item}
                onMouseEnter={() => setListIndex(2)}
                onClick={showImageDialog}
                onKeyDown={showImageDialog}
              />
            </div>
            <div className={imageDialogClass}>
              <img src={list[listIndex].src} alt="博悅的圖片" />
              <div
                className={closeImageClass}
                onClick={closeImageDialog}
                onKeyDown={closeImageDialog}
              >
                <img src={require('./close.png')} alt="博悅的圖片" />
              </div>
            </div>
          </div>
          <div className={c.right}>
            <div className={c.showItem}>
              <img src={require('./area4_logo.png')} alt="博悅的圖片" />
              <div className={c.content}>
                <h3 className={c.title}>{list[listIndex].title}</h3>
                <hr />
                <p className={c.desc}>{list[listIndex].desc}</p>
                <h3 className={c.bottomTitle}>introduction</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Section4
