/* eslint-disable jsx-a11y/iframe-has-title */
// import { withTrans } from 'utils'
// import ViewPort from 'components/ViewPort'
import { isMobile } from '../../utils'
import c from './index.scss'

const FooterContactInfo = ({
  address, phone, googleLink, houseInfos,
}) => {
  const redirectToPhoneThanks = (e) => {
    e.preventDefault()
    if (isMobile) {
      window.location.href = `tel:${phone.replace('-', '')}`
    } else {
      return
    }
    setTimeout(() => {
      window.location.href = 'phoneThanks'
    }, 1000)
  }

  return (
    <div className={c.bg}>
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
            <a
              href={`tel:${phone.replace('-', '')}`}
              rel="noopener noreferrer"
              onClick={redirectToPhoneThanks}
            >
              賞屋專線：{phone}
            </a>
            <a href={googleLink} target="_blank" rel="noopener noreferrer">
              接待會館：{address}
            </a>
            {/* <p>賞屋專線：{phone}</p>
            <p>接待會館：{address}</p> */}
            <div className={c.fbBlock}>
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FGreatManor%2F%3Fmodal%3Dadmin_todo_tour&height=170&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=318563575497575"
                height="170"
                width="240"
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
