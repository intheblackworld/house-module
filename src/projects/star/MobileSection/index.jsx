import { useState } from 'react'
import { Desc } from 'projects/star/Section4'
import c from './index.scss'

const MobileSection = () => {
  const [show, setShow] = useState(false)

  return (
    <div className={c.bg}>
      {!show && (
        <div className={c.export} onKeyDown={() => setShow(!show)} onClick={() => setShow(!show)} />
      )}
      {show && <Desc />}
    </div>
  )
}

export default MobileSection
