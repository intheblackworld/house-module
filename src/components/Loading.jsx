import React from 'react'
import { ClipLoader } from 'react-spinners'
import c from './loading.scss'

const Loading = () => (
  <div
    style={{
      backgroundColor: '#000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100vw',
      height: '100vh',
    }}
  >
    <div className={c.commicSuprice} />
    <ClipLoader sizeUnit="px" size={150} color="#fbdda6" />
  </div>
)

export default Loading
