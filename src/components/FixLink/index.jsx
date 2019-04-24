import { Link } from 'react-scroll'
import c from './index.scss'

const FixLink = () => (
  <Link to="contact" spy smooth duration={500} offset={-80} key="contact" className={c.fixLink}>
    <img src={require('./icon.png')} alt="" />
  </Link>
)

export default FixLink
