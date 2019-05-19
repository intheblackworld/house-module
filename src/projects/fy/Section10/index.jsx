import React from 'react'
import SectionTitle from 'components/SectionTitle'
import CircleAnimate from 'components/CircleAnimate'
import ViewPort from 'components/ViewPort'

import css from './index.scss'

const Section10 = () => (
  <div className={css.bg}>
    <SectionTitle title="五大友善設備 生活加倍舒適" short />
    <ViewPort>
      <CircleAnimate />
    </ViewPort>
  </div>
)

export default Section10
