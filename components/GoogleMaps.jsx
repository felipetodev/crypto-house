import { useEffect, useRef, useState } from 'react'
import { Wrapper } from '@googlemaps/react-wrapper'

const DEFAULT_LOCATION = { lat: 0, lng: 0 }

export function GoogleMaps ({ center = DEFAULT_LOCATION, zoom = 18 }) {
  const mapRef = useRef()
  const [map, setMap] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      if (mapRef.current && !map) {
        setMap(new window.google.maps.Map(mapRef.current, {
          center,
          zoom,
          mapId: '8e0a97af9386fef'
        }))
      }
      return new window.google.maps.Marker({
        position: center,
        map
      })
    }, 1000)
  }, [mapRef, map])

  return (
    <section className={`${!map ? 'border' : ''}`}>
      <h2 className='my-6 text-2xl font-medium text-gray-700'>
        Peñalolen, Region Metropolitana, Santiago.
        <p className='text-xs text-gray-500 mt-2'>Dirección aproximada otorgada por el anunciante</p>
      </h2>
      {!map && <span className='text-xs text-gray-500 mt-2'>Cargando mapa...</span>}
      <Wrapper className='bg-gray-500' apiKey={process.env.GOOGLE_MAPS_KEY} version='beta'>
        <div style={{ height: '50vh' }} id='map' ref={mapRef} />
      </Wrapper>
      <p className='text-xs text-gray-500 mt-2'>House of Cryptos, no se responsabiliza de los errores que la información mostrada a continuación pueda contener. La posición en el mapa puede ser aproximada por deseo del anunciante. El usuario será el responsable del uso que dé a dicha información.</p>
    </section>
  )
}
