/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { withTrans } from 'utils'
// import ViewPort from 'components/ViewPort'
// import SlidePicker from 'components/SliderPicker'
import Viewport from 'components/ViewPort'
import Carousel from 'components/Carousel'
import SlidePicker from 'components/SliderPicker'
// import {
//   PreContainer, DescContainer, ListContainer, AccordionContainer,
// } from 'components/cht'
import cx from 'classnames'
import { isMobile } from '../../../utils'
import c from './index.scss'

// const list = [
//   {
//     src: require('./best-1.png'),
//     title: '【 觀光休閒消費首選 】',
//     desc: '220間知名品牌進駐北台最大Outlet',
//     label: 1,
//   },
//   {
//     src: require('./best-2.png'),
//     title: '【全台最大醫療機構】',
//     desc: '豐富精密醫療儀器廠商聚集，全國規模最大',
//     label: 2,
//   },
//   {
//     src: require('./best-3.png'),
//     title: '【全台最多國際學校】',
//     desc: '新北市的天母區，教育國際、聯動區域行情',
//     label: 3,
//   },
//   {
//     src: require('./best-4.png'),
//     title: '【全台機能最好的重劃】',
//     desc: '雙影城、四百貨、九超商、百家異國料理齊聚',
//     label: 4,
//   },
//   {
//     src: require('./best-5.png'),
//     title: '【新北重劃區首選】',
//     desc: '各項建設萬箭齊發，唯有林口居域最超值',
//     label: 5,
//   },
//   {
//     src: require('./best-6.png'),
//     title: '【商機無限林口最卓越】',
//     desc: '閃耀首善型都會區的巨擘光芒，席捲雙北置產焦點',
//     label: 6,
//   },
//   {
//     src: require('./best-7.png'),
//     title: '【稀有價值天際享有】',
//     desc: '70-90坪市場缺稀，稀有性成為生活贏家價值',
//     label: 7,
//   },
// ]

const Block1 = ({ show }) => (
  <div className={withTrans('block', c, show)}>
    {isMobile ? (
      <div className={c.blockTitle}>
        <h3>
          聚焦大東區 <br />
          向上新未來
        </h3>
      </div>
    ) : (
      <div className={c.blockTitle}>
        <h3>聚焦大東區 向上新未來</h3>
      </div>
    )}
    <div className={c.content}>
      <img src={require('./leftImg.png')} className={c.leftImg} alt="" />
      <div className={c.itemList}>
        <div className={c.item}>
          <div className={c.color}>
            <p>仁德轉運站</p>
            <span>1 mins</span>
          </div>
        </div>
        <div className={c.item}>
          <div className={c.color}>
            <p>
              仁德交流道
              <br />
              家樂福商圈
            </p>
            <span>3 mins</span>
          </div>
        </div>
        <div className={c.item}>
          <div className={c.color}>
            <p>南紡購物中心</p>
            <span>7 mins</span>
          </div>
        </div>
        <div className={c.item}>
          <div className={c.color}>
            <p>
              台南航空站
              <br />
              台南高鐵站
            </p>
            <span>10 mins</span>
          </div>
        </div>
        <div className={c.item}>
          <div className={c.color}>
            <p>
              成大商圈
              <br />
              台南火車站
            </p>
            <span>14 mins</span>
          </div>
        </div>
        <div className={c.item}>
          <div className={c.color}>
            <p>
              台南科技園區
              <br />
              路竹科技園區
            </p>
            <span>16 mins</span>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const Block2 = ({ show }) => (
  <div id="point3" className={withTrans('block', c, show)}>
    {isMobile ? (
      <div className={c.blockTitle}>
        <h3>
          仁德交流道、
          <br />
          綜合轉運站交通
          <br />
          接線公園綠地、
          <br />
          優質學區
          <br />
          高端純住一氣呵成！
        </h3>
      </div>
    ) : (
      <div className={c.blockTitle}>
        <h3>
          仁德交流道、綜合轉運站交通接線
          <br />
          公園綠地、優質學區 高端純住一氣呵成！
        </h3>
      </div>
    )}
    <div className={c.topTitle}>
      <h3>南紡購物商圈×成大商圈×東門商圈×德安商圈×仁和商圈×家樂福商圈</h3>
      <p>近商圈‧低密度‧高綠覆 新興重劃生活圈 創造高品質人生！</p>
    </div>
    <div className={c.carouselTitle}>
      <h3>上東城</h3>
      <p>
        立足大東區新核心！多重商圈環繞，生活機能充足，流行品味最前線！
        <br />
        緊鄰的虎尾寮高級住宅、德高生活圈，不僅公園綠地休閒規劃多，仁德、復興國中小學更是指標明星學區，
        <br />
        選擇<span>【上東城】</span>，繁華機能、單純寧靜一次把握、願景無限！
      </p>
    </div>
    <div className={c.carousel}>
      <Carousel
        slidesToShow={1}
        fade={!!isMobile}
        arrows

        // beforeChange={() => setIndex(index === locations.length - 1 ? 0 : index + 1)}
      >
        <img src={require('./c1.png')} alt="長虹天際的圖片" key={require('./c1.png')} />
        <img src={require('./c2.png')} alt="長虹天際的圖片" key={require('./c2.png')} />
        <img src={require('./c3.png')} alt="長虹天際的圖片" key={require('./c3.png')} />
        <img src={require('./c4.png')} alt="長虹天際的圖片" key={require('./c4.png')} />
        <img src={require('./c5.png')} alt="長虹天際的圖片" key={require('./c5.png')} />
        <img src={require('./c6.png')} alt="長虹天際的圖片" key={require('./c6.png')} />
        <img src={require('./c7.png')} alt="長虹天際的圖片" key={require('./c7.png')} />
        <img src={require('./c8.png')} alt="長虹天際的圖片" key={require('./c8.png')} />
      </Carousel>
    </div>
  </div>
)

const Block3 = ({ show, showDialog }) => (
  <div className={withTrans('block', c, show)}>
    {isMobile ? (
      <div className={c.blockTitle}>
        <h3>
          仁德交流道南北亨通
          <br />
          仁德綜合轉運站
          <br />
          實現中遠近動脈
          <br />
          一路暢旺！
        </h3>
      </div>
    ) : (
      <div className={c.blockTitle}>
        <h3>
          仁德交流道南北亨通 仁德綜合轉運站實現中
          <br />
          遠近動脈一路暢旺！
        </h3>
      </div>
    )}
    <div className="flex-c">
      <div className={c.mapBlock}>
        <img src={require('./map.png')} className={c.map} alt="" />
        <img
          src={require('./mask.png')}
          className={c.mask}
          alt=""
          onClick={showDialog}
          onKeyDown={showDialog}
        />
      </div>
      {isMobile ? (
        <div className={c.mapContent}>
          <div className={c.item}>
            <h3>【上東城】掌握城市脈動</h3>
            <p>
              出門即接東門路主線精華，仁德交流道輕鬆上線！ 前瞻先進運輸「仁德綜合轉運站」
              1分鐘抵達，高效率轉運，豐享暢快人生！
            </p>
          </div>
          <div className={c.item}>
            <h3>【上東城】近距離享有雙重大建設</h3>
            <p>不僅便捷，更為您迎來身價起漲、紅利人生！</p>
          </div>
        </div>
      ) : (
        <div className={c.mapContent}>
          <div className={c.item}>
            <h3>【上東城】掌握城市脈動</h3>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;出門即接東門路主線精華，仁德交流道輕鬆上線！
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;前瞻先進運輸「仁德綜合轉運站」
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;1分鐘抵達，高效率轉運，豐享暢快人生！
            </p>
          </div>
          <div className={c.item}>
            <h3>【上東城】近距離享有雙重大建設</h3>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不僅便捷，更為您迎來身價起漲、紅利人生！</p>
          </div>
        </div>
      )}
    </div>
  </div>
)

const MapDialog = (props) => {
  const dialogClass = cx(c.dialog, {
    [c.show]: props.show,
  })

  return (
    <div className={dialogClass}>
      <img src={require('./map.png')} className={c.dialogContent} alt="" />
    </div>
  )
}

const slideList = [
  {
    src: require('./slide-1.png'),
    desc: '中庭',
  },
  {
    src: require('./slide-2.png'),
    desc: '中庭',
  },
  {
    src: require('./slide-3.png'),
    desc: '公設LoungeBar',
  },
  {
    src: require('./slide-4.png'),
    desc: '公設KTV',
  },
  {
    src: require('./slide-5.png'),
    desc: '公設圖書室',
  },
  {
    src: require('./slide-6.png'),
    desc: '公設電影院',
  },
  {
    src: require('./slide-7.png'),
    desc: '公設媽媽教室',
  },
  {
    src: require('./slide-8.png'),
    desc: '公設健身房',
  },
  {
    src: require('./slide-9.png'),
    desc: '公設泳池',
  },
  {
    src: require('./slide-10.png'),
    desc: '公設泳池吧',
  },
]
const Block4 = ({ show }) => (
  <div id="point4" className={withTrans('block', c, show)}>
    {isMobile ? (
      <div className={c.blockTitle}>
        <h3>
          菁英獨享 VVIP御所
          <br />
          HOME & HOTEL
        </h3>
      </div>
    ) : (
      <div className={c.blockTitle}>
        <h3>
          菁英獨享 VVIP御所
          <br />
          HOME & HOTEL
        </h3>
      </div>
    )}
    <div className={`${c.topTitle} ${c.leftBarTitle}`}>
      <p>
        東區最強2400坪森氧景觀中庭
        <br />
        軌國際宜居趨勢，每一位住戶都是VVIP！
        <br />
        以生態水景花園＋光點雕塑藝術，打造最強超大景觀中庭；
        <br />
        更用大尺度臨路退縮，創造友善鄰里空間，絕對大氣開放、生活盛放！
      </p>
    </div>
    <div className={`${c.carouselTitle} ${c.slideTitle}`}>
      <h3>媲美豪宅圈 極上心體驗</h3>
      <p>25米室外泳池、健身房、運動吧、下午茶特等席。多功能會館…等飯店式公設人生，生活應有盡有。</p>
    </div>
    <div className={c.slide}>
      <Viewport isBottom={false}>
        <SlidePicker slideList={slideList} />
      </Viewport>
    </div>
  </div>
)

const Block5 = ({ show }) => (
  <div id="point5" className={withTrans('block', c, show)}>
    {isMobile ? (
      <div className={c.blockTitle}>
        <h3>
          興富發
          <br />
          為您榮耀幸福版圖
        </h3>
      </div>
    ) : (
      <div className={c.blockTitle}>
        <h3>興富發 為您榮耀幸福版圖</h3>
      </div>
    )}
    <div className={`${c.carouselTitle} ${c.slideTitle}`}>
      <h3>建築龍頭 上市品牌</h3>
      {isMobile ? (
        <p>
          台灣建築龍頭上市公司「興富發建設」，在北中南均有代表性作品，不僅成就地標，更顯頂尖價值！
          用一貫「創新‧品質‧服務」之理念，加上千億級推案實力，
          讓您一次把握台南大東區精華、一次榮耀好宅最幸福！
        </p>
      ) : (
        <p>
          台灣建築龍頭上市公司「興富發建設」，在北中南均有代表性作品，不僅成就地標，更顯頂尖價值！
          <br />
          用一貫「創新‧品質‧服務」之理念，加上千億級推案實力，
          <br />
          讓您一次把握台南大東區精華、一次榮耀好宅最幸福！
        </p>
      )}
    </div>
    <div className={`${c.carousel} ${c.withMargin}`}>
      <Carousel
        slidesToShow={isMobile ? 1 : 3}
        fade={!!isMobile}
        arrows

        // beforeChange={() => setIndex(index === locations.length - 1 ? 0 : index + 1)}
      >
        <div className={c.marginSlide}>
          <img src={require('./Group1.png')} alt="長虹天際的圖片" key={require('./Group1.png')} />
        </div>
        <div className={c.marginSlide}>
          <img src={require('./Group2.png')} alt="長虹天際的圖片" key={require('./Group2.png')} />
        </div>
        <div className={c.marginSlide}>
          <img src={require('./Group3.png')} alt="長虹天際的圖片" key={require('./Group3.png')} />
        </div>
        <div className={c.marginSlide}>
          <img src={require('./Group4.png')} alt="長虹天際的圖片" key={require('./Group4.png')} />
        </div>
        <div className={c.marginSlide}>
          <img src={require('./Group5.png')} alt="長虹天際的圖片" key={require('./Group5.png')} />
        </div>
        <div className={c.marginSlide}>
          <img src={require('./Group6.png')} alt="長虹天際的圖片" key={require('./Group6.png')} />
        </div>
        <div className={c.marginSlide}>
          <img src={require('./Group7.png')} alt="長虹天際的圖片" key={require('./Group7.png')} />
        </div>
        <div className={c.marginSlide}>
          <img src={require('./Group8.png')} alt="長虹天際的圖片" key={require('./Group8.png')} />
        </div>
        <div className={c.marginSlide}>
          <img src={require('./Group9.png')} alt="長虹天際的圖片" key={require('./Group9.png')} />
        </div>
      </Carousel>
    </div>
  </div>
)

const Block6 = ({ show }) => (
  <div className={withTrans('block', c, show)}>
    {isMobile ? (
      <div className={c.blockTitle}>
        <h3>李天鐸豪宅氣度</h3>
      </div>
    ) : (
      <div className={c.blockTitle}>
        <h3>李天鐸豪宅氣度</h3>
      </div>
    )}
    <div className={`${c.carouselTitle} ${c.slideTitle}`}>
      <h3>擘劃景觀共演飯店家</h3>
      {isMobile ? (
        <p>
          豐富綠意X生態花園 在家，開展景觀跳島之旅! 光點X雕塑X水景 生活處處藝術 美學時時賞心!
          窗景與空間的共演 為您緩和時光 啜飲一口悠閒!
        </p>
      ) : (
        <p>
          豐富綠意X生態花園 在家，開展景觀跳島之旅!
          <br />
          光點X雕塑X水景 生活處處藝術
          <br />
          美學時時賞心! 窗景與空間的共演 為您緩和時光 啜飲一口悠閒!
        </p>
      )}
    </div>
    <div className={`${c.carousel} ${c.withMargin}`}>
      <Carousel
        slidesToShow={isMobile ? 1 : 3}
        fade={!!isMobile}
        arrows

        // beforeChange={() => setIndex(index === locations.length - 1 ? 0 : index + 1)}
      >
        <div className={c.marginSlide}>
          <img src={require('./slide1.png')} alt="長虹天際的圖片" key={require('./slide1.png')} />
        </div>
        <div className={c.marginSlide}>
          <img src={require('./slide2.png')} alt="長虹天際的圖片" key={require('./slide2.png')} />
        </div>
        <div className={c.marginSlide}>
          <img src={require('./slide3.png')} alt="長虹天際的圖片" key={require('./slide3.png')} />
        </div>
        <div className={c.marginSlide}>
          <img src={require('./slide4.png')} alt="長虹天際的圖片" key={require('./slide4.png')} />
        </div>
        <div className={c.marginSlide}>
          <img src={require('./slide5.png')} alt="長虹天際的圖片" key={require('./slide5.png')} />
        </div>
        <div className={c.marginSlide}>
          <img src={require('./slide6.png')} alt="長虹天際的圖片" key={require('./slide6.png')} />
        </div>
      </Carousel>
    </div>
  </div>
)

const Section3 = () => {
  const [isShow, toggleDialog] = useState(false)

  const showDialog = () => {
    toggleDialog(!isShow)
  }
  const closeDialog = () => {
    toggleDialog(false)
  }

  const closeClass = cx(c.close, {
    [c.show]: isShow,
  })
  return (
    <div className={c.container}>
      <Viewport isBottom={false}>
        <Block1 />
      </Viewport>
      <Viewport isBottom={false} position="200px" height="800px">
        <Block2 />
      </Viewport>
      <Viewport isBottom={false} position="200px" height="800px">
        <Block3 showDialog={showDialog} />
      </Viewport>
      <MapDialog show={isShow} closeDialog={closeDialog} />
      <div className={closeClass} onClick={closeDialog} onKeyDown={closeDialog}>
        <FontAwesomeIcon icon={faTimes} />
      </div>
      <Viewport isBottom={false} position="200px" height="800px">
        <Block4 />
      </Viewport>
      <Viewport isBottom={false} position="200px" height="800px">
        <Block5 />
      </Viewport>
      <Viewport isBottom={false} position="200px" height="800px">
        <Block6 />
      </Viewport>
    </div>
  )
}

export default Section3
