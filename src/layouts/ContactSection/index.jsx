import React from 'react'
import Viewport from 'components/ViewPort'
import Order from 'components/Order'
import ContactInfo from 'components/ContactInfo'
// import FullScreen from 'layouts/FullScreen'
import Section from 'layouts/Section'
import GoogleMap from 'components/GoogleMap'
import HouseInfo from 'components/HouseInfo'
import css from './index.scss'
import info from '../../info'

const {
  address, phone, fbLink, googleLink, houseInfos,
} = info
const ContactSection = () => (
  <div className={css.contactSection}>
    <div className={css.orderBg}>
      <img src={require('./leftLeaf.png')} className={css.leftLeaf} alt="" />
      <img src={require('./rightLeaf.png')} className={css.rightLeaf} alt="" />
      <img src={require('./mleaf.png')} className={css.mleaf} alt="" />
      <Viewport>
        <Order />
      </Viewport>
      {/* <FullScreen needCutHeader alignCenter>
      </FullScreen> */}
      <Viewport isBottom={false}>
        <ContactInfo address={address} phone={phone} fbLink={fbLink} googleLink={googleLink} />
      </Viewport>
    </div>
    <GoogleMap />
    <div className={css.houseBg}>
      <Section>
        <Viewport isBottom={false}>
          <HouseInfo houseInfos={houseInfos} />
        </Viewport>
      </Section>
    </div>
  </div>
)

export default ContactSection
