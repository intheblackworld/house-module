/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// import { withTrans } from 'utils'
// import ViewPort from 'components/ViewPort'
import SlidePicker from 'components/SliderPicker'
import Viewport from 'components/ViewPort'
import { PreContainer, DescContainer } from 'components/cht'
import { isMobile, withTrans } from '../../../utils'
import c from './index.scss'

const slideList = [
  {
    src: require('./slide-1.jpg'),
    desc: 'NO.1【得天獨厚的蛋黃位置】人口成長位新北之冠、新北及國門正中心位置',
  },
  {
    src: require('./slide-2.jpg'),
    desc: 'NO.1【得天獨厚的蛋黃位置】人口成長位新北之冠、新北及國門正中心位置',
  },
  {
    src: require('./slide-3.jpg'),
    desc: 'NO.1【得天獨厚的蛋黃位置】人口成長位新北之冠、新北及國門正中心位置',
  },
  {
    src: require('./slide-4.jpg'),
    desc: 'NO.1【得天獨厚的蛋黃位置】人口成長位新北之冠、新北及國門正中心位置',
  },
  {
    src: require('./slide-5.jpg'),
    desc: 'NO.1【得天獨厚的蛋黃位置】人口成長位新北之冠、新北及國門正中心位置',
  },
  {
    src: require('./slide-6.jpg'),
    desc: 'NO.1【得天獨厚的蛋黃位置】人口成長位新北之冠、新北及國門正中心位置',
  },
  {
    src: require('./slide-7.jpg'),
    desc: 'NO.1【得天獨厚的蛋黃位置】人口成長位新北之冠、新北及國門正中心位置',
  },
  {
    src: require('./slide-8.jpg'),
    desc: 'NO.1【得天獨厚的蛋黃位置】人口成長位新北之冠、新北及國門正中心位置',
  },
  {
    src: require('./slide-9.jpg'),
    desc: 'NO.1【得天獨厚的蛋黃位置】人口成長位新北之冠、新北及國門正中心位置',
  },
]

const itemList = [
  {
    title: '三立報導',
    src: require('./1.png'),
    link: 'https://www.setn.com/News.aspx?NewsID=538303',
    bDesc: '林口唯一！　SRC+全棟制震　長虹天際　公園豪門圈',
  },
  {
    title: '三立報導',
    src: require('./2.png'),
    link: 'https://www.setn.com/News.aspx?NewsID=543964',
    bDesc: '睽違3年　長虹在林口最強代表作　圓滿落成',
  },

  {
    title: '工商時報',
    src: require('./3.png'),
    link: 'https://ctee.com.tw/industrynews/building/86761.html',
    bDesc: '長虹天際 營建股王 林口唯一全棟SRC高規制震',
  },

  {
    title: '中時電子報',
    src: require('./4.png'),
    link: 'https://www.chinatimes.com/realtimenews/20190826001551-260410?chdtv',
    bDesc: '旺house》林口超強豪宅銷售開紅盤 長虹天際慶圓滿落成熱銷已逾230戶',
  },

  {
    title: '蘋果日報',
    src: require('./5.png'),
    link: 'https://tw.news.appledaily.com/headline/daily/20190517/38338750/',
    bDesc: '睽違3年 長虹在林口最強代表作 圓滿落成',
  },

  {
    title: 'ETtoday房產雲',
    src: require('./8.png'),
    bDesc: '睽違3年　長虹在林口最強代表作圓滿落成',
    link: 'https://house.ettoday.net/news/1522074',
  },

  {
    title: '鉅亨網新聞',
    src: require('./7.png'),
    link: 'https://m.cnyes.com/news/id/4337686',
    bDesc: '長虹天際520檔期看屋 500組創盛況',
  },

  {
    title: 'ETtoday房產雲',
    src: require('./6.png'),
    link: 'https://www.nownews.com/news/20190827/3593053/',
    bDesc: '林口高規格豪宅長虹天際　開案熱銷250戶',
  },
]

const ItemsContainer = ({ show, list }) => (
  <div className={withTrans('itemsContainer', c, show)}>
    {isMobile ? (
      <Viewport isBottom={false}>
        <SlidePicker slideList={itemList} />
      </Viewport>
    ) : (
      list.map(item => (
        <a
          className={c.item}
          key={item.link}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={item.src} alt="" />
          <div className={c.itemTitle}>{item.title}</div>
          <div className={c.itemDesc}>
            <p>{item.bDesc}</p>
          </div>
        </a>
      ))
    )}
  </div>
)

const Section5 = () => (
  <div>
    <Viewport isBottom={false}>
      <PreContainer
        title1="貼心幸福‧奢華無設限"
        title2="極上設施"
        desc="Be the Luxury Amenities"
        src={require('./preImg.jpg')}
      />
    </Viewport>
    <div className={c.container}>
      <Viewport>
        <DescContainer title="頂級公設，隨時回家享受悠然時光" section={4} />
      </Viewport>
      <Viewport isBottom={false}>
        <SlidePicker slideList={slideList} />
      </Viewport>
      {!isMobile && (
        <iframe
          title="youtube"
          width="100%"
          height="600px"
          src="https://www.youtube.com/embed/hc5wha2BYv0"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
    {isMobile && (
      <iframe
        title="youtube"
        width="100%"
        height="315px"
        src="https://www.youtube.com/embed/hc5wha2BYv0"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    )}
    <div className={c.container}>
      <Viewport>
        <DescContainer title="媒體報導" section={8} />
      </Viewport>
      <Viewport>
        <ItemsContainer list={itemList} />
      </Viewport>
      {!isMobile && (
        <iframe
          title="youtube"
          width="100%"
          height="700px"
          src="https://www.youtube.com/embed/vMvmnvIV5m8"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
    {isMobile && (
      <iframe
        title="youtube"
        width="100%"
        height="255px"
        src="https://www.youtube.com/embed/vMvmnvIV5m8"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    )}
  </div>
)

export default Section5
