import { useReducer } from 'react'
import { withTrans, isMobile } from 'utils'
import ViewPort from 'components/ViewPort'
import c from './index.scss'

const initState = {
  index: 0,
}

const reducer = (state, action) => ({
  index: action.payload,
})
const slideList = [
  {
    label: '尊榮門廳',
    src: require('./1.jpg'),
    labelImg: require('./icon1.png'),
  },
  {
    label: '大廳交誼廳',
    src: require('./2.jpg'),
    labelImg: require('./icon2.png'),
  },
  {
    label: '多功能洽談區',
    src: require('./3.jpg'),
    labelImg: require('./icon3.png'),
  },
  {
    label: '宴會廳',
    src: require('./4.jpg'),
    labelImg: require('./icon4.png'),
  },
  {
    label: '瑜珈室',
    src: require('./5.jpg'),
    labelImg: require('./icon5.png'),
  },
  {
    label: '健身房',
    src: require('./6.jpg'),
    labelImg: require('./icon6.png'),
  },
  {
    label: '空中花園',
    src: require('./7.jpg'),
    labelImg: require('./icon7.png'),
  },
]

const Title = ({ show }) => {
  const titleClass = withTrans('title', c, show)
  return (
    <h3 className={titleClass}>
      世界之門 瞬間為您開啟
    </h3>
  )
}

const SideBar = ({ show, dispatch }) => {
  const handleIndex = index => dispatch({ type: 'set', payload: index })
  const sideBarClass = withTrans('sideBar', c, show)
  return (
    <div className={sideBarClass}>
      {slideList.map((slide, index) => (
        <li /* eslint-disable-line */
          className={c.item}
          key={slide.title}
          onMouseEnter={() => handleIndex(index)}
          onKeyDown={() => handleIndex(index)} /* eslint-disable-line */
        >
          <img src={slide.labelImg} alt="帝璽的圖片" />
          <div className={c.label}>
            <h3>{slide.label}</h3>
          </div>
        </li>
      ))}
    </div>
  )
}

const Slider = ({ show, index = 0 }) => {
  const sliderClass = withTrans('slider', c, show)
  return (
    <div className={sliderClass}>
      <img className={c.blockImg} src={slideList[index].src} alt="帝璽的圖片" />
      <div className={c.blockYellow} />
    </div>
  )
}

const Section7 = () => {
  const [state, dispatch] = useReducer(reducer, initState)
  const dec = () => dispatch({ type: 'set', payload: state.index === 0 ? slideList.length - 1 : state.index - 1 })
  const add = () => dispatch({ type: 'set', payload: state.index === slideList.length - 1 ? 0 : state.index + 1 })
  return (
    <div className={c.bg}>
      <div className={c.container}>
        <ViewPort>
          <Title />
        </ViewPort>
        <div className={c.content}>
          <ViewPort>
            <SideBar dispatch={dispatch} />
          </ViewPort>
          <ViewPort>
            <Slider index={state.index} />
          </ViewPort>
          {isMobile ? (
            <div className={c.control}>
              <div className={c.left} onClick={dec} onKeyDown={dec} />
              <div className={c.right} onClick={add} onKeyDown={add} />
            </div>
          ) : null}
        </div>
      </div>
      <a className={c.vrBanner} href="https://my.matterport.com/show/?m=Ggh26R1un73&utm_source=4" target="_blank" rel="noopener noreferrer">
        <img src={require('./vr.png')} alt="" />
      </a>
    </div>
  )
}

export default Section7
