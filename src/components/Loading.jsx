import React from 'react'
import { ClipLoader } from 'react-spinners'
import c from './loading.scss'

const Loading = () => (
  <div
    style={{
      // backgroundImage: "url('../projects/dyc/Master/bg.png')",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100vw',
      height: '100vh',
    }}
  >
    <div className={c.commicSuprice} />
    <ClipLoader sizeUnit="px" size={150} color="#384b67" />
  </div>
)

export default Loading
