import React from 'react'

import css from './index.scss'

const HouseInfo = ({ houseInfos }) => (
  <div className={css.houseInfo}>
    <div className={css.title}>建案資訊</div>
    <div className={css.info}>
      {houseInfos.map(infos => (
        <div className={css.item} key={infos[0]}>
          <h3 className={css.label}>{infos[0]}</h3>
          <p className={css.desc}>{infos[1]}</p>
        </div>
      ))}
    </div>
  </div>
)

export default HouseInfo
