import React from 'react'
import styled from 'styled-components'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween, Timeline } from 'react-gsap'

import ThreeFaTimeline from 'components/ThreeFaTimeline'

const HorizontalTimelineStyled = styled.div`
  overflow: hidden;
  #pinContainer {
    width: 100vw;
    height: calc(100vh + 128px);
    display: flex;
    align-items: center;
    overflow: hidden;
  }
  #pinContainer .panel {
    position: absolute;
    text-align: center;
  }
  .panel span {
    position: relative;
    display: block;
    top: 50%;
    font-size: 80px;
  }

  .panel.blue {
    background-color: #3883d8;
    white-space: nowrap;
  }

  .panel.turqoise {
    background-color: #38ced7;
  }

  .panel.green {
    background-color: #22d659;
  }

  .panel.bordeaux {
    background-color: #953543;
  }
`
const ref = React.createRef()
const HorizontalTimeline = () => {
  const width = document.getElementById('app').offsetWidth
  console.log(width)
  return (
    <HorizontalTimelineStyled>
      <Controller>
        <Scene triggerHook="onLeave" duration="200%" pin>
          <Timeline wrapper={<div id="pinContainer" />}>
            <Tween from={{ x: '0' }} to={{ x: `${-3330 + width}px` }}>
              <ThreeFaTimeline ref={ref} />
            </Tween>
            {/* <Tween from={{ x: '-100%' }} to={{ x: '0%' }}>

            </Tween>
            <Tween from={{ x: '-100%' }} to={{ x: '0%' }}>
              <section className="panel green">
                <span>Panel</span>
              </section>
            </Tween> */}
          </Timeline>
        </Scene>
      </Controller>
    </HorizontalTimelineStyled>
  )
}

export default HorizontalTimeline
