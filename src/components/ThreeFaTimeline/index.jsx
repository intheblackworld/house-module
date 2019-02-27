import React from 'react'
import ViewPort from 'components/ViewPort'
import cx from 'classnames'
import css from './index.scss'

const timeItems = [
  {
    year: '2005',
    img: '',
    desc: '金革成為第一家上櫃唱片公司',
  },

  {
    year: '2008',
    img: '',
    desc: '第一個建案 景湛（高雄）開案 <br>金革跨足建築產業',
  },

  {
    year: '2011',
    img: '',
    desc: '第一個別墅造鎮計畫：總裁行館',
  },
  {
    year: '2012',
    img: require('assets/img/section6/item-1.png'),
    desc: '更名為三發地產<br>開拓台南房地產市場',
  },

  {
    year: '2013',
    img: '',
    desc: `跨足星級飯店產業：桃園晶悅大飯店<br>
    三發地產轉上市公司`,
  },

  {
    year: '2014',
    img: '',
    desc: `成立財團法人高雄市三發教育基金會<br>
    第22屆中華建築金石獎｜優良規劃設計類｜三發國際城<br>
    國家卓越建設獎優質獎｜最佳施工品質類｜三發文化和平<br>
    `,
  },

  {
    year: '2015',
    img: require('assets/img/section6/item-2.png'),
    desc: '社團法人高雄市建築經營協會——第21屆建築園冶推手',
  },

  {
    year: '2016',
    img: require('assets/img/section6/item-3.png'),
    desc: `國家卓越建設金質獎<br>
    最佳施工品質類<br>
    【三發匯世界】【三發晶沙】 <br>
    <br>
    中華建設金石獎、規劃設計類<br>
    【三發匯世界】【三發晶沙】<br>
    <br>
    國家品牌玉山獎，第13屆傑出企業類`,
  },
  {
    year: '2017',
    img: require('assets/img/section6/item-4.png'),
    desc: `國家建築金質獎<br>
    施工品質類國首獎【三發晶沙】<br>
    首次建造高雄厝個案【三發晶沙】完工<br>`,
  },

  {
    year: '2018',
    img: require('assets/img/section6/item-5.png'),
    desc: `高雄厝綠建築大獎、友善空間特別獎<br>
    民眾票選人氣獎【三發晶沙】<br>
    <br>
    第20屆 國建築金質獎<br>
    施工品質類【三發丰悅】<br>
    <br>
    台灣永續發展協會、台灣誠信建商`,
  },
]

const TimeItem = ({ show, item }) => {
  const itemClass = cx(css.item, {
    [css.show]: show,
    [css.hide]: !show,
  })
  return (
    <div className={itemClass}>
      <div className={css.title}>{item.year}</div>
      <div className={css.content}>
        { item.img && <img src={item.img} alt="立信吾界的圖片" />}
        <div className={css.desc}>
          {item.desc.split('<br>').map((text, index) => (
            <p key={`${index}-${text}`}>{text}</p> // eslint-disable-line
          ))}
        </div>
      </div>
    </div>
  )
}
const Timeline = React.forwardRef((props, ref) => (
  <section className={css.timeline} ref={ref}>
    {timeItems.map(item => (
      <ViewPort key={item.desc}>
        <TimeItem item={item} />
      </ViewPort>
    ))}
  </section>
))

export default Timeline
