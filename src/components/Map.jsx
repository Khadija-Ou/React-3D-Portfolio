import React from 'react'
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
} from 'react-simple-maps'

const Map = () => {
  return (
    <ComposableMap
      projection='geoAzimuthalEqualArea'
      projectionConfig={{
        rotate: [2, -32.0, 0],
        center: [-5, -3],
        scale: 1600,
      }}
      style={{ width: '100%', height: '100%' }}
    >
      <Geographies
        geography='/features.json'
        fill='#2C065D'
        stroke='#FFFFFF'
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[-189.4, 150, 475]}
        dx={-35}
        dy={-30}
        connectorProps={{
          stroke: 'white',
          strokeWidth: 2,
          strokeLinecap: 'round',
        }}
      >
        <text
          x='-8'
          textAnchor='end'
          alignmentBaseline='middle'
          fill='white'
        >
          {'Agadir'}
        </text>
      </Annotation>
    </ComposableMap>
  )
}

export default Map
