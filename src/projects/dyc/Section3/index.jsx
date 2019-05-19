import { withTrans } from 'utils'
import ViewPort from 'components/ViewPort'
import cx from 'classnames'
import c from './index.scss'
import { isMobile } from '../../../utils'

const Container = ({ show }) => {
  const containerClass = withTrans('container', c, show)
  const containerShowClass = cx(c.container, {
    [c.show]: true,
  })
  return (
    <div className={isMobile ? containerShowClass : containerClass}>
      <div className={c.item}>
        <div className={c.content}>
          <h3 className={c.contentTitle}>藏速</h3>
          <div className={c.desc}>
            <p>一快二高三捷</p>
            <p>捷運頂埔站90秒</p>
            <p>一路有位 出站就到家</p>
          </div>
        </div>
      </div>
      <div className={c.item}>
        <div className={c.content}>
          <h3 className={c.contentTitle}>藏富</h3>
          <div className={c.desc}>
            <p>商圈 x 公園 x 水岸 x 中央大道</p>
            <p>正對高科技園區最富域</p>
          </div>
        </div>
      </div>
      <div className={c.item}>
        <div className={c.content}>
          <h3 className={c.contentTitle}>藏豐</h3>
          <div className={c.desc}>
            <p>德友建設機構</p>
            <p>日本百年營造岩田地崎</p>
            <p>建築大師沈柏卿</p>
            <p>結構教父戴雲發</p>
          </div>
        </div>
      </div>
      <div className={c.item}>
        <div className={c.content}>
          <h3 className={c.contentTitle}>藏美</h3>
          <div className={c.desc}>
            <p>銀級綠建築</p>
            <p>土城首座安全履歷認證地標</p>
            <p>日本同步居家品味美學</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const Section3 = () => (
  <div className={c.bg}>
    <div className={c.title}>
      <h3>日本真工新典範</h3>
      <h3>21-47坪｜巨匠藏品</h3>
    </div>
    <ViewPort isBottom={false}>
      <Container />
    </ViewPort>
    <img src={require('./house.png')} alt="" className={c.house} />
  </div>
)

export default Section3
