import { useState } from 'react'
import ReactMapboxGl, { Marker, ZoomControl } from 'react-mapbox-gl';
import { RiVirusLine } from "react-icons/ri";
import InfoBlock from '../InfoBlock'
const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1Ijoic2VyajEwIiwiYSI6ImNraHVwYmZocDA3aGQydG8ycWhid3NpZncifQ.arz3I42PJkwW_ie_RZvDYA'
});



const MyMap = ({ data }) => {
  const [infoBlock, setInfoBlock] = useState(null)
  // there are isuses with amount of marker, need to switch to feature..
  const filtered = data.filter((it, i) => i < 200)
  console.log(filtered)
  const markersComponents = filtered.map(item => {
    return (
      <Marker
        coordinates={[item.long, item.lat]}
        onClick={() => setInfoBlock({
          country: item.countryRegion,
          flag: item.iso2,
          ...item
        })}
      >
        <RiVirusLine className='icon' />

      </Marker>
    )
  })

  return (
    <Map
      // eslint-disable-next-line
      style="mapbox://styles/mapbox/streets-v11"
      containerStyle={{
        height: '100vh',
        width: '100vw'
      }}
      zoom={[3]}

    >
      <ZoomControl />
      {markersComponents}
      {infoBlock
        &&
        <InfoBlock
          info={infoBlock}
          closeMenu={() => setInfoBlock(null)}
        />}
    </Map>
  )
}


export default MyMap
