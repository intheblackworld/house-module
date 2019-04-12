import React from 'react'
import sliverStyle from './sliver'
import info from '../../info'
import css from './index.scss'

const loadJS = (src) => {
  const ref = window.document.getElementsByTagName('script')[0]
  const script = window.document.createElement('script')
  script.src = src
  script.async = true
  ref.parentNode.insertBefore(script, ref)
}

export default class GooglMap extends React.Component {
  constructor(props) {
    super(props)
    this.mapArea = React.createRef()
  }

  componentDidMount() {
    window.initMap = this.initMap
    this.styledMapType = loadJS(
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyAKNXcM_2Jf2ZLNbFBe4blWitnvKXM1CSo&callback=initMap',
    )
  }

  initMap = () => {
    const { google } = window
    // 座標位置
    const position = { lat: info.locations.lat, lng: info.locations.lng }
    const map = new google.maps.Map(this.mapArea.current, {
      center: position,
      zoom: 18,
      mapTypeControlOptions: {
        mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'styled_map'],
      },
    })
    map.mapTypes.set('styled_map', new google.maps.StyledMapType(sliverStyle))
    map.setMapTypeId('styled_map')
    const marker = new google.maps.Marker({ // eslint-disable-line
      position,
      map,
    })
  }

  render() {
    return (
      <div>
        <div ref={this.mapArea} className={css.mapFrame} />
      </div>
    )
  }
}

// hook test @TODO
// const map = new google.maps.Map(document.getElementById('map'), {
//   center: { lat: -25.363, lng: 131.044 },
//   zoom: 5,
// })
// const GoogleMap = () => {
//   const [map, setMap] = useState('')

//   useEffect(() => {

//   })
//   return <div>Google Map</div>
// }

// export default GoogleMap
