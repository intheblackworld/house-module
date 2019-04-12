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
    label: '藏地利',
    title: '億兆產值移居就業潮',
    desc:
      '正對鴻海、正崴、鼎創達…等800多家企業集團齊聚的頂埔高科技園區，億兆產值啟動土城經濟大時代，超過6000名科技人移居就業潮，購屋需求一觸即發，掌握增值前景，更要卡位中央大道第一排最強地利、最優生活。',
    src: require('./slide1.png'),
  },
  {
    label: '藏動能',
    title: '一快二高三捷科技門戶',
    desc:
      '散步90秒，板南、三鶯線雙捷運交會首站，單線直達板橋、台北車站、忠孝復興、市政府等台北都會核心，未來三鶯線完工抵達國門更便捷。鄰北二高土城交流道、台65快速道，串連雙國道一日南北，大展宏觀人生。',
    src: require('./slide2.png'),
  },
  {
    label: '藏繁華',
    title: '頂埔多核心商圈',
    desc:
      '榮耀列席土城三大商圈精華區，360度成就精采生活。市場、運動中心、量販店、影城、超商…一應俱全，頂埔、永寧、海山三大商圈環繞，大潤發、家樂福、秀泰影城、美聯社、特力屋…365天全面為您豐衣足食。',
    src: require('./slide3.png'),
  },
  {
    label: '藏智慧',
    title: '科技人文新優境',
    desc:
      '給孩子成長最有力的依靠，從國小到高中都是第一首選！列席頂埔國小、土城國中雙學區優勢，上下學免接送，同時近土城中華高中、 清水高中，把環境當作經度，教育成為緯度，選對家的位置，就等於選對孩子的未來！',
    src: require('./slide4.png'),
  },
  {
    label: '藏慢味',
    title: '水岸樹海永久排場',
    desc:
      '背倚大漢溪流域水岸視野，鄰近萬坪保護區綠地，媽祖田河濱公園、土城河濱公園、溪州運動河濱公園全長12公里自行車道，加上桐花公園、承天禪寺、大安圳賞蝶步道、原住民族生態公園環繞。',
    src: require('./slide5.png'),
  },
]

const Title = ({ show }) => {
  const titleClass = withTrans('title', c, show)
  return (
    <h3 className={titleClass}>
      中央大道にひとつだけ
      <br />
      <p>從日本到中央大道，美的世界級</p>
    </h3>
  )
}

const SideBar = ({ show, dispatch, itemIndex }) => {
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
          <img src={require('./fan.png')} alt="" />
          <div className={`${c.label} ${index === itemIndex && c.active}`}>
            <h3>{slide.label}</h3>
          </div>
        </li>
      ))}

      {/* <li className={c.item}>
        <img src={require('./fan.png')} alt="" />
        <div className={c.label}>
          <h3>藏動能</h3>
        </div>
      </li>
      <li className={c.item}>
        <img src={require('./fan.png')} alt="" />
        <div className={c.label}>
          <h3>藏繁華</h3>
        </div>
      </li>
      <li className={c.item}>
        <img src={require('./fan.png')} alt="" />
        <div className={c.label}>
          <h3>藏智慧</h3>
        </div>
      </li>
      <li className={c.item}>
        <img src={require('./fan.png')} alt="" />
        <div className={c.label}>
          <h3>藏慢味</h3>
        </div>
      </li> */}
    </div>
  )
}

const Slider = ({ show, index = 0 }) => {
  const sliderClass = withTrans('slider', c, show)
  return (
    <div className={sliderClass}>
      <div className={c.blockWhite}>
        <h3 className={c.blockLabel}>{slideList[index].label}</h3>
        <h3 className={c.blockTitle}>{slideList[index].title}</h3>
        <p className={c.blockDesc}>{slideList[index].desc}</p>
      </div>
      <img className={c.blockImg} src={slideList[index].src} alt="" />
      <div className={c.blockYellow} />
    </div>
  )
}

const Section5 = () => {
  const [state, dispatch] = useReducer(reducer, initState)
  const dec = () => dispatch({ type: 'set', payload: state.index === 0 ? slideList.length - 1 : state.index - 1 })
  const add = () => dispatch({ type: 'set', payload: state.index === slideList.length - 1 ? 0 : state.index + 1 })
  return (
    <div className={c.bg}>
      <img src={require('./leftFlower.png')} alt="" className={c.leftFlower} />
      <img src={require('./rightFlower.png')} alt="" className={c.rightFlower} />
      <div className={c.container}>
        <ViewPort>
          <Title />
        </ViewPort>
        <div className={c.content}>
          <ViewPort>
            <SideBar dispatch={dispatch} itemIndex={state.index} />
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
    </div>
  )
}

export default Section5
