import c from './index.scss'

const FixLink = () => (
  <a className={c.fixLink} href="https://lbs.h35.tw/" target="_blank" rel="noopener noreferrer">
    <img src={require('./icon.png')} alt="" />
  </a>
)

export default FixLink
