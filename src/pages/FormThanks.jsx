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
    })(window,document,'script','dataLayer','GTM-WK8TNQN');`

    const n = document.createElement('noscript')
    n.type = 'text/javascript'
    n.async = true
    n.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WK8TNQN"
    height="0" width="0" style="display:none;visibility:hidden"></iframe>`
    this.script.current.appendChild(s)
    this.noscript.current.appendChild(n)

    const s2 = document.createElement('script')
    s.type = 'text/javascript'
    s.async = true
    s.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-5RVX2N5');`

    const n2 = document.createElement('noscript')
    n.type = 'text/javascript'
    n.async = true
    n.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5RVX2N5"
    height="0" width="0" style="display:none;visibility:hidden"></iframe>`
    this.script.current.appendChild(s2)
    this.noscript.current.appendChild(n2)


    const line = document.createElement('script')
    line.type = 'text/javascript'
    line.async = true
    line.innerHTML = `_lt(
      "send",
      "cv",
      {
        type: "Conversion"
      },
      ["902ad94f-8656-40e1-8d9d-b0a2f0f65181"]
    );`
    this.script.current.appendChild(line)
  }

  render() {
    return (
      <React.Fragment>
        <div ref={this.script} />
        <div ref={this.noscript} />
        <div className={css.thanks}>
          <h3>感謝您</h3>
          <p>
            預約成功
            <br />
            我們將會盡快與您聯繫
          </p>
          <Hbutton link="/" back>
            回到首頁
          </Hbutton>
        </div>
      </React.Fragment>
    )
  }
}
