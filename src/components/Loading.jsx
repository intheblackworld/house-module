import React from 'react'

import { ClipLoader } from 'react-spinners'

const Loading = () => (
  <div
    style={{
      backgroundColor: '#000',
      backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.24), rgba(156, 30, 35, 0))',
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
      color="#56d8ff"
    />
  </div>
)

export default Loading
