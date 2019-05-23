/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react'
import { faPhone, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cx from 'classnames'
import { withTrans } from 'utils'
import Viewport from 'components/ViewPort'
import Order from 'components/Order'
import GoogleMap from 'components/GoogleMap'
import { CallDialog, MapDialog } from 'components/Dialog'
// import FullScreen from 'layouts/FullScreen'
// import { PreContainer, DescContainer } from 'components/cht'
import { isMobile } from '../../../utils'
import info from '../../../info'
import c from './index.scss'

const ContactBlock = ({ show }) => (
  <div id="contact" className={withTrans('block', c, show)}>
    {isMobile ? (
      <div className={c.blockTitle}>
        <h3>預約賞屋</h3>
      </div>
    ) : (
      <div className={c.blockTitle}>
        <h3>預約賞屋</h3>
      </div>
    )}
    {isMobile ? (
      <Viewport>
        <div id="orderBg" className={`${c.order}`}>
          <Order />
        </div>
      </Viewport>
    ) : (
      <Viewport>
        <Order />
      </Viewport>
    )}
  </div>
)

const InfoBlock = ({ show }) => {
  const [isCallShow, toggleCallDialog] = useState(false)

  const showCallDialog = () => {
    toggleCallDialog(!isCallShow)
  }

  const closeCallDialog = () => {
    toggleCallDialog(false)
  }

  const [isMapShow, toggleMapDialog] = useState(false)

  const showMapDialog = () => {
    toggleMapDialog(!isMapShow)
  }

  const closeMapDialog = () => {
    toggleMapDialog(false)
  }

  const closeCallClass = cx(c.closeCall, {
    [c.show]: isCallShow,
  })

  const closeMapClass = cx(c.closeMap, {
    [c.show]: isMapShow,
  })
  return (
    <div className={withTrans('infoBg', c, show)}>
      <CallDialog show={isCallShow} closeDialog={closeCallDialog} />
      <div className={closeCallClass} onClick={closeCallDialog} onKeyDown={closeCallDialog}>
        <FontAwesomeIcon icon={faTimes} />
      </div>
      <MapDialog show={isMapShow} closeDialog={closeMapDialog} />
      <div className={closeMapClass} onClick={closeMapDialog} onKeyDown={closeMapDialog}>
        <FontAwesomeIcon icon={faTimes} />
      </div>
      <div className={c.infoContainer}>
        <img src={require('./infoLogo.png')} alt="" />
        <div className={c.infoList}>
          <div>
            {isMobile ? (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events
              <a target="_blank" rel="noopener noreferrer" onClick={showCallDialog}>
                <FontAwesomeIcon icon={faPhone} />
                {info.phone}
              </a>
            ) : (
              <p>
                <FontAwesomeIcon icon={faPhone} />
                {info.phone}
              </p>
            )}
          </div>
          <div>
            <a href={info.fbMessage} target="_blank" rel="noopener noreferrer">
              FB Messenger諮詢
            </a>
          </div>

          <div>
            {isMobile ? (
              /* eslint-disable-next-line jsx-a11y/click-events-have-key-events */
              <a onClick={showMapDialog} rel="noopener noreferrer">
                導航google地圖
                <br />
                <span style={{ fontSize: '14px' }}>{info.address}</span>
              </a>
            ) : (
              <a href={info.googleLink} target="_blank" rel="noopener noreferrer">
                導航google地圖
                <br />
                <span style={{ fontSize: '14px' }}>{info.address}</span>
              </a>
            )}
          </div>

          <div>
            <a href={info.fbLink} target="_blank" rel="noopener noreferrer">
              前往粉絲專頁
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

const InfoFooter = ({ show }) => (
  <div className={withTrans('infoFooter', c, show)}>
    <div>
      <h3>建案資訊</h3>
      <span>
        <p>{info.houseInfos[0]} </p>
        <p>{info.houseInfos[1]} </p>
        <p>{info.houseInfos[2]} </p>
        <p>{info.houseInfos[3]} </p>
      </span>
    </div>
    <div>
      <h3 /> {/* eslint-disable-line */}
      <span>
        <p>{info.houseInfos[4]} </p>
        <p>{info.houseInfos[5]} </p>
        <p>{info.houseInfos[6]} </p>
      </span>
    </div>
    <div>
      <h3>facebook</h3>
      {/* eslint-disable-next-line */}
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FDTED062896111%2F&tabs&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=654913588263352"
        width={`${isMobile ? '250' : '360'}`}
        height={`${isMobile ? '92' : '132'}`}
        scrolling="no"
        frameBorder="0"
        allowTransparency="true"
        allow="encrypted-media"
      />
    </div>
  </div>
)

const Section4 = () => (
  <span>
    <div className={c.container}>
      <Viewport isBottom={false}>
        <ContactBlock />
      </Viewport>
    </div>
    <Viewport isBottom={false}>
      <InfoBlock />
    </Viewport>
    <GoogleMap />
    <Viewport isBottom={false}>
      <InfoFooter />
    </Viewport>
  </span>
)

export default Section4
