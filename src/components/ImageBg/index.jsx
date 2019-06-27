import { isMobile, withTrans } from 'utils'
import c from './index.scss'

const ImageBg = ({
  show, isFullScreen = false, imgSrc, mImgSrc,
}) => (isFullScreen ? (
  <div className={withTrans('bg', c, show)} />
) : (
  <div>
    <span>{show}</span>
    <img src={isMobile ? mImgSrc : imgSrc} className={withTrans('imgBlock', c, show)} alt="博悅的圖片" />
  </div>
))

export default ImageBg
