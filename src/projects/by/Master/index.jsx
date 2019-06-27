import React, { useState } from 'react'
import { withTrans } from 'utils'
import cx from 'classnames'
// import ViewPort from 'components/ViewPort'
// import ImageBg from 'components/ImageBg'
import BackgroundVideo from 'react-background-video-player'
import { isMobile } from '../../../utils'
import c from './index.scss'

const Master = ({ show }) => {
  const bgClass = withTrans('bg', c, show)
  // const colorBgClass = withTrans('colorBg', c, show)

  const [isVideoShow, toggleVideoDialog] = useState(false)

  const showVideoDialog = () => {
    toggleVideoDialog(!isVideoShow)
  }

  const closeVideoDialog = () => {
    toggleVideoDialog(false)
  }

  const closeVideoClass = cx(c.close, {
    [c.show]: isVideoShow,
  })

  const videoDialogClass = cx(c.video, {
    [c.show]: isVideoShow,
  })

  //

  return (
    <div className={bgClass}>
      {isMobile ? (
        <div>
          <img className={c.mbg} src={require('./mbg.jpg')} alt="博悅的圖片" />
          <img className={c.mcloud} src={require('./mcloud.png')} alt="博悅的圖片" />
          <img className={c.mlogo} src={require('./mlogo.png')} alt="博悅的圖片" />
        </div>
      ) : (
        <div>
          <div className={c.mask} />
          <img className={c.title} src={require('./title.png')} alt="博悅的圖片" />
          <BackgroundVideo
            src={require('./A.mp4')}
            containerWidth={window.innerWidth}
            containerHeight={window.innerHeight}
          />
        </div>
      )}
      <div className={c.playBtn} onClick={showVideoDialog} onKeyDown={showVideoDialog}>
        <img src={require('./play-icon.png')} alt="博悅的圖片" />
        PLAY FULL MOVIE
      </div>
      <div className={videoDialogClass}>
        <iframe
          title="youtube"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/XW9RuXEv0dY"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div className={closeVideoClass} onClick={closeVideoDialog} onKeyDown={closeVideoDialog}>
          <img src={require('./close.png')} alt="博悅的圖片" />
        </div>
      </div>
    </div>
  )
}
export default Master
