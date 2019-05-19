import { withTrans } from 'utils'
import ViewPort from 'components/ViewPort'
import { isMobile } from '../../../utils'
import c from './index.scss'

const Top = ({ show }) => {
  const topClass = withTrans('top', c, show)
  return (
    <div className={topClass}>
      <h3 className={c.title}>城意實築 台灣首發</h3>
      <h3 className={c.subTitle}>大建商不願做的，小公司做不來的，{ isMobile && <br /> }德友魄力一次包辦</h3>
      <p className={c.desc}>
        銷售合約公開化｜保證產權清楚｜建築安全履歷認證
        <br />
        施工紀錄透明化｜售後服務中心｜提供永續服務經營
      </p>
    </div>
  )
}

const Container = ({ show }) => {
  const containerClass = withTrans('container', c, show)
  return (
    <div className={containerClass}>
      <div className={c.item}>
        <div className={c.itemTop}>
          <h3 className={c.number}>15</h3>
          <h3 className={c.year}>年</h3>
        </div>
        <div className={c.bottom}>
          <p className={c.bottomDesc}>15年間の保證</p>
          <h3 className={c.bottomDesc}>結構保固</h3>
        </div>
      </div>
      <div className={c.item}>
        <div className={c.itemTop}>
          <h3 className={c.number}>10</h3>
          <h3 className={c.year}>年</h3>
        </div>
        <div className={c.bottom}>
          <p className={c.bottomDesc}>10年の保證</p>
          <h3 className={c.bottomDesc}>防水保固</h3>
        </div>
      </div>
      <div className={c.item}>
        <div className={c.itemTop}>
          <h3 className={c.number}>3</h3>
          <h3 className={c.year}>年</h3>
        </div>
        <div className={c.bottom}>
          <p className={c.bottomDesc}>3年の保證</p>
          <h3 className={c.bottomDesc}>固定設備</h3>
        </div>
      </div>
    </div>
  )
}

const Section8 = () => (
  <div className={c.bg}>
    <ViewPort isBottom={false}>
      <Top />
    </ViewPort>
    <ViewPort isBottom={false}>
      <Container />
    </ViewPort>
  </div>
)

export default Section8
