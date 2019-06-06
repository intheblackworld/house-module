import React from 'react'
import handleViewport from 'react-in-viewport'

const Frame = (props) => {
  const { innerRef } = props
  return <div className="viewport-frame" ref={innerRef} />
}

const ViewportFrame = handleViewport(Frame)

const Viewport = ({
  children, isBottom = true, position = null, showOneTime = false,
}) => {
  const [show, setShow] = React.useState(false)
  return (
    <React.Fragment>
      {!isBottom && (
        <div style={{ transform: `translateY(${position})` }}>
          <ViewportFrame
            onEnterViewport={() => {
              setShow(true)
            }}
            onLeaveViewport={() => {
              setShow(!!showOneTime)
            }}
          />
        </div>
      )}
      {React.cloneElement(children || <div />, { show })}
      {isBottom && (
        <div style={{ transform: `translateY(${position})` }}>
          <ViewportFrame
            onEnterViewport={() => {
              setShow(true)
            }}
            onLeaveViewport={() => {
              setShow(!!showOneTime)
            }}
          />
        </div>
      )}
    </React.Fragment>
  )
}

export default Viewport
