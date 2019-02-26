import React from 'react'
import Hbutton from 'components/Button'
import css from './index.scss'

export default class Thanks extends React.Component {
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
    })(window,document,'script','dataLayer','GTM-KWKPQK4');`

    const n = document.createElement('noscript')
    n.type = 'text/javascript'
    n.async = true
    n.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KWKPQK4"
    height="0" width="0" style="display:none;visibility:hidden"></iframe>`
    this.script.current.appendChild(s)
    this.noscript.current.appendChild(n)
  }

  render() {
    return (
      <React.Fragment>
        <div ref={this.script} />
        <div ref={this.noscript} />
        <div className={css.thanks}>
          <h3>感謝您</h3>
          <p>感謝您的來電</p>
          <Hbutton link="/" back>回到首頁</Hbutton>
        </div>
      </React.Fragment>
    )
  }
}
