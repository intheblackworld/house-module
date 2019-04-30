// import { withTrans } from 'utils'
// import ViewPort from 'components/ViewPort'
// import { isMobile } from '../../../utils'
// import c from './index.scss'
import Viewport from 'components/ViewPort'
import GhostOrder from 'components/GhostOrder'
import FooterContactInfo from 'components/FooterContactInfo'
// import FullScreen from 'layouts/FullScreen'
// import Section from 'layouts/Section'
import GoogleMap from 'components/GoogleMap'
// import HouseInfo from 'components/HouseInfo'
import c from './index.scss'
import info from '../../info'

const {
  address, phone, fbLink, googleLink, houseInfos,
} = info
const ContactSection = () => (
  <div className={c.contactSection}>
    <GoogleMap />
    <div id="orderBg" className={`${c.orderBg} bg`}>
      <GhostOrder />
    </div>
    <Viewport isBottom={false}>
      <FooterContactInfo
        address={address}
        phone={phone}
        fbLink={fbLink}
        googleLink={googleLink}
        houseInfos={houseInfos}
      />
    </Viewport>
  </div>
)

export default ContactSection
