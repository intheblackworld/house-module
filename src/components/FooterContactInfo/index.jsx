/* eslint-disable jsx-a11y/iframe-has-title */
// import { withTrans } from 'utils'
// import ViewPort from 'components/ViewPort'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { CallDialog, MapDialog } from 'components/Dialog'
import cx from 'classnames'
import { isMobile } from '../../utils'
import c from './index.scss'

// const InfoBlock = ({ show }) => {
//   const [isCallShow, toggleCallDialog] = useState(false)

//   const showCallDialog = () => {
//     toggleCallDialog(!isCallShow)
//   }

//   const closeCallDialog = () => {
//     toggleCallDialog(false)
//   }

//   const [isMapShow, toggleMapDialog] = useState(false)

//   const showMapDialog = () => {
//     toggleMapDialog(!isMapShow)
//   }

//   const closeMapDialog = () => {
//     toggleMapDialog(false)
//   }

//   const closeCallClass = cx(c.closeCall, {
//     [c.show]: isCallShow,
//   })

//   const closeMapClass = cx(c.closeMap, {
//     [c.show]: isMapShow,
//   })
//   return (
//     <div className={withTrans('infoBg', c, show)}>
//       <CallDialog show={isCallShow} closeDialog={closeCallDialog} />
//       <div className={closeCallClass} onClick={closeCallDialog} onKeyDown={closeCallDialog}>
//         <FontAwesomeIcon icon={faTimes} />
//       </div>
//       <MapDialog show={isMapShow} closeDialog={closeMapDialog} />
//       <div className={closeMapClass} onClick={closeMapDialog} onKeyDown={closeMapDialog}>
//         <FontAwesomeIcon icon={faTimes} />
//       </div>
//       <div className={c.infoContainer}>
//         <img src={require('./infoLogo.png')} alt="" />
//         <div className={c.infoList}>
//           <div>
//             {isMobile ? (
//               // eslint-disable-next-line jsx-a11y/click-events-have-key-events
//               <a target="_blank" rel="noopener noreferrer" onClick={showCallDialog}>
//                 <FontAwesomeIcon icon={faPhone} />
//                 {info.phone}
//               </a>
//             ) : (
//               <p>
//                 <FontAwesomeIcon icon={faPhone} />
//                 {info.phone}
//               </p>
//             )}
//           </div>
//           <div>
//             <a href={info.fbMessage} target="_blank" rel="noopener noreferrer">
//               FB Messenger諮詢
//             </a>
//           </div>

//           <div>
//             {isMobile ? (
//               /* eslint-disable-next-line jsx-a11y/click-events-have-key-events */
//               <a onClick={showMapDialog} rel="noopener noreferrer">
//                 導航google地圖
//                 <br />
//                 <span style={{ fontSize: '14px' }}>{info.address}</span>
//               </a>
//             ) : (
//               <a href={info.googleLink} target="_blank" rel="noopener noreferrer">
//                 導航google地圖
//                 <br />
//                 <span style={{ fontSize: '14px' }}>{info.address}</span>
//               </a>
//             )}
//           </div>

//           <div>
//             <a href={info.fbLink} target="_blank" rel="noopener noreferrer">
//               前往粉絲專頁
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
const FooterContactInfo = ({
  address, phone, houseInfos, googleLink,
}) => {
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
    <div className={c.bg}>
      <CallDialog show={isCallShow} closeDialog={closeCallDialog} />
      <div className={closeCallClass} onClick={closeCallDialog} onKeyDown={closeCallDialog}>
        <FontAwesomeIcon icon={faTimes} />
      </div>
      <MapDialog show={isMapShow} closeDialog={closeMapDialog} />
      <div className={closeMapClass} onClick={closeMapDialog} onKeyDown={closeMapDialog}>
        <FontAwesomeIcon icon={faTimes} />
      </div>
      <div className={c.container}>
        <img src={require('./logo.png')} alt="" className={c.logo} />
        <div className={c.content}>
          <div className={c.houseInfo}>
            <h3>建案資訊</h3>
            {houseInfos.map((info, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <p key={`house-${index}`}>
                <span>{info[0]}: </span>
                <span>{info[1]}</span>
              </p>
            ))}
          </div>
          <div className={c.contactInfo}>
            <h3>聯絡資訊</h3>
            {isMobile ? (
              // eslint-disable-next-line
              <p onClick={showCallDialog}>賞屋專線：{phone}</p>
            ) : (
              <p>賞屋專線：{phone}</p>
            )}

            {isMobile ? (
              // eslint-disable-next-line
              <p onClick={showMapDialog}>接待會館：{address}</p>
            ) : (
              <a href={googleLink} target="_blank" rel="noopener noreferrer">
                接待會館：{address}
              </a>
            )}

            {/* <p>賞屋專線：{phone}</p>
            <p>接待會館：{address}</p> */}
            <div className={c.fbBlock}>
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FGreatManor%2F%3Fmodal%3Dadmin_todo_tour&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=318563575497575"
                scrolling="no"
                frameBorder="0"
                allow="encrypted-media"
              />
            </div>
          </div>
          <div className={c.socialInfo}>
            <h3>地圖</h3>
            <img src={require('./map.png')} alt="" className={c.map} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterContactInfo
