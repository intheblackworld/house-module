import React from 'react'
import SectionTitle from 'components/SectionTitle'
import { Image } from 'semantic-ui-react'
import home from 'assets/img/section3/home.png'
import company1 from 'assets/img/section3/company-1.png'
import company2 from 'assets/img/section3/company-2.png'
import cross from 'assets/img/section3/cross.png'
import css from './index.scss'

const Section3 = () => (
  <React.Fragment>
    <SectionTitle titleTop="上市保證" titleBottom="BRAND" iconUrl={home} />
    <div className={css.imgGroup}>
      <Image src={company1} alt="" />
      <Image src={cross} alt="" />
      <Image src={company2} alt="" />
    </div>
  </React.Fragment>
)

export default Section3
