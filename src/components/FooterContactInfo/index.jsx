// import { withTrans } from 'utils'
// import ViewPort from 'components/ViewPort'
// import { isMobile } from '../../../utils'
import c from './index.scss'

const FooterContactInfo = ({
  address, phone, fbLink, googleLink, houseInfos,
}) => {
  console.log(fbLink, googleLink)
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
            <p>賞屋專線：{phone}</p>
            <p>接待會館：{address}</p>
            <img src={require('./map.png')} alt="" className={c.map} />
          </div>
          <div className={c.socialInfo}>
            <h3>facebook</h3>
            <div className={c.fbBlock} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterContactInfo
