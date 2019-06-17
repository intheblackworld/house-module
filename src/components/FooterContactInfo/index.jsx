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
        <img src={require('./logo.png')} alt="東城大境的圖片" className={c.logo} />
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
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F%25E9%2595%25B7%25E8%2599%25B9%25E5%25A4%25A9%25E9%259A%259B-2731739126866550%2F&tabs&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=654913588263352"
                width="330"
                height="240"
                scrolling="no"
                frameBorder="0"
                allowTransparency="true"
                allow="encrypted-media"
              />
            </div>
          </div>
          <div className={c.socialInfo}>
            <h3>地圖</h3>
            <img src={require('./map.jpg')} alt="東城大境的圖片" className={c.map} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterContactInfo
