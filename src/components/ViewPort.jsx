import React from 'react'
import handleViewport from 'react-in-viewport'

const Frame = (props: { inViewport: boolean }) => {
  const { innerRef } = props
  return <div className="viewport-frame" ref={innerRef} />
}

const ViewportFrame = handleViewport(Frame)

const Viewport = ({ children, isBottom = true }) => {
  const [show, setShow] = React.useState(false)
  return (
    <React.Fragment>
      {!isBottom && (
        <ViewportFrame
          onEnterViewport={() => {
            setShow(true)
          }}
          onLeaveViewport={() => {
            setShow(true)
          }}
        />
      )}
      {React.cloneElement(children || <div />, { show })}
      {isBottom && (
        <ViewportFrame
          onEnterViewport={() => {
            setShow(true)
          }}
          onLeaveViewport={() => {
            setShow(true)
          }}
        />
      )}
    </React.Fragment>
  )
}

export default Viewport
