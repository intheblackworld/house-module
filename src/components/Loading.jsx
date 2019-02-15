import React from 'react'

import { ClipLoader } from 'react-spinners'

const Loading = () => (
  <div
    style={{
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100vw',
      height: '100vh',
    }}
  >
    <ClipLoader
      sizeUnit="px"
      size={150}
      color="#123abc"
    />
  </div>
)

export default Loading
