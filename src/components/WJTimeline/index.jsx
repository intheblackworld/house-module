import React from 'react'
import ViewPort from 'components/ViewPort'
import cx from 'classnames'
import css from './index.scss'

const timeItems = [
  {
    year: '2017',
    img: require('./2017-1.jpg'),
    desc: '仰真',
  },

  {
    year: '',
    img: require('./2017-2.jpg'),
    desc: '雙江翠',
  },

  {
    year: '2018',
    img: require('./2018.jpg'),
    desc: '瀚疆日透',
  },
  {
    year: '2019',
    img: require('./2019-1.jpg'),
    desc: '新月天地',
  },

  {
    year: '',
    img: require('./2019-2.jpg'),
    desc: '吾界',
  },
]

const TimeItem = ({ show, item }) => {
  const itemClass = cx(css.item, {
    [css.show]: show,
    [css.hide]: !show,
  })
  return (
    <div className={itemClass}>
      {item.year && <div className={css.title}>{item.year}</div>}
      <div className={css.content}>
        { item.img && <img src={item.img} alt="" />}
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
