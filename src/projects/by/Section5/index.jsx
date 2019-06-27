/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react'
import { withTrans } from 'utils'
// import cx from 'classnames'
// import ViewPort from 'components/ViewPort'
// import ImageBg from 'components/ImageBg'
import BackgroundVideo from 'react-background-video-player'
// import { isMobile } from '../../../utils'
import c from './index.scss'

const Section5 = ({ show }) => {
  const bgClass = withTrans('bg', c, show)
  const [openIndex, setOpenIndex] = useState(-1)
  const handleOpenIndex = (index) => {
    if (index === openIndex) {
      setOpenIndex(-1)
    } else {
      setOpenIndex(index)
    }
  }
  return (
    <div className={bgClass}>
      <div>
        <div className={c.mask} />
        <div className={c.container}>
          <h3 className={c.title}>收藏城堡 驕傲一輩子</h3>
          <div className={`${c.dropdown} ${openIndex === 0 ? c.open : ''}`}>
            <div className={c.head}>
              <p className={c.label}>巴洛克豪邸 謳歌壯闊傳奇</p>
              <img src={require('./mobile_arrow1.png')} alt="博悅的圖片" onClick={() => handleOpenIndex(0)} onKeyDown={() => handleOpenIndex(0)} />
            </div>
            <p className={c.desc}>
              「博悦」矗立於地表、集結現代精工鑄造的建築外觀，絕對是驚豔眾人的第一印象，全棟採用崗石精雕細琢的新古典量體，展現地標建築的經典特色之外，同時改寫府城天際線！
            </p>
          </div>
          <div className={`${c.dropdown} ${openIndex === 1 ? c.open : ''}`}>
            <div className={c.head}>
              <p className={c.label}>每處細節都是耗時高成本精鑄而成 驚見 不凡力量!</p>
              <img src={require('./mobile_arrow1.png')} alt="博悅的圖片" onClick={() => handleOpenIndex(1)} onKeyDown={() => handleOpenIndex(0)} />
            </div>
            <p className={c.desc}>
              建築團隊以高聳厚實的圓型列柱，擎起建築最尊貴門面，雕花立體感、工藝精緻度呈現巴洛克的風格，絕世工藝壯闊絕倫，世襲價值尊貴可鑑！
            </p>
          </div>
        </div>
        <BackgroundVideo
          src={require('./area5Video.mp4')}
          containerWidth={window.innerWidth}
          containerHeight={window.innerHeight}
        />
      </div>
    </div>
  )
}
export default Section5
