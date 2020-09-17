import React from 'react';
import GoogleMapReact from 'google-map-react'
import './map.css'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
const LocationPin = ({ text }) => (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
  )
const GMap = ({ location, zoomLevel }) => (
    <div className="map">
      <h2 className="map-h2">Help Someone who can Help You!Find us!</h2>
  
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCKGgl_YAQeMavme0hDq3kaOPzT9GLfTGg' }}
          defaultCenter={location[0]}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location[0].lat}
            lng={location[0].lng}
            text={location[0].address}
          />
           <LocationPin
            lat={location[1].lat}
            lng={location[1].lng}
            text={location[1].address}
          />
           <LocationPin
            lat={location[2].lat}
            lng={location[2].lng}
            text={location[2].address}
          />
        </GoogleMapReact>
      </div>
    </div>
  )
  export default GMap;