import React from 'react'
import Navigation from 'components/Navigation'
import MobileNavigation from 'components/MobileNavigation'
import Footer from 'components/Footer'
import ActivityDialog from 'components/ActivityDialog'
import SectionList from 'sections'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import cx from 'classnames'
import c from './index.scss'
import { isMobile } from '../utils'

// const Home = () => (
//   <div>
//     <Navigation />
//     <SectionList />
//     <Footer />
//   </div>
// )

// export default Home

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.script = React.createRef()
    this.noscript = React.createRef()
    this.state = {
      isShow: false,
    }
  }

  componentDidMount() {
    const s = document.createElement('script')
    s.type = 'text/javascript'
    s.async = true
    s.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-KJJ89PT');`

    const n = document.createElement('noscript')
    n.type = 'text/javascript'
    n.async = true
    n.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KJJ89PT"
    height="0" width="0" style="display:none;visibility:hidden"></iframe>`
    this.script.current.appendChild(s)
    this.noscript.current.appendChild(n)
    this.setState({ isShow: true })
  }

  closeDialog() {
    this.setState({ isShow: false })
  }

  render() {
    const closeClass = cx(c.close, {
      [c.show]: this.state.isShow,
    })
    return (
      <div>
        <div ref={this.script} />
        <div ref={this.noscript} />
        <Navigation />
        {isMobile && <MobileNavigation />}
        <SectionList />
        <Footer />
        <div className={closeClass} onClick={this.closeDialog} onKeyDown={this.closeDialog}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
        <ActivityDialog show={this.state.isShow} />
      </div>
    )
  }
}
