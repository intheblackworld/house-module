import React from 'react'
import { ClipLoader } from 'react-spinners'
import c from './loading.scss'

const Loading = () => (
  <div
    style={{
      backgroundImage: 'linear-gradient(to bottom, #ffed47, #ffce35',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100vw',
      height: '100vh',
    }}
  >
    <div className={c.commicSuprice} />
    <ClipLoader sizeUnit="px" size={150} color="#0047af" />
  </div>
)

export default Loading
