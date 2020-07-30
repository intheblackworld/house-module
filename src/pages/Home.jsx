import React from 'react'
import Navigation from 'components/Navigation'
import MobileNavigation from 'components/MobileNavigation'
import Layout from 'layouts'
import Footer from 'components/Footer'
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
  }

  componentDidMount() {
    const s = document.createElement('script')
    s.type = 'text/javascript'
    s.async = true
    s.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-WK8TNQN');`

    const n = document.createElement('noscript')
    n.type = 'text/javascript'
    n.async = true
    n.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WK8TNQN"
    height="0" width="0" style="display:none;visibility:hidden"></iframe>`
    document.head.appendChild(s)
    // this.script.current.appendChild(s)
    this.noscript.current.appendChild(n)

    const s2 = document.createElement('script')
    s.type = 'text/javascript'
    s.async = true
    s.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-5RVX2N');`

    const n2 = document.createElement('noscript')
    n.type = 'text/javascript'
    n.async = true
    n.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5RVX2N"
    height="0" width="0" style="display:none;visibility:hidden"></iframe>`
    document.head.appendChild(s2)
    this.noscript.current.appendChild(n2)
  }

  render() {
    return (
      <div>
        <div ref={this.script} />
        <div ref={this.noscript} />
        <Navigation />
        { isMobile && <MobileNavigation />}
        <Layout />
        <Footer />
      </div>
    )
  }
}
