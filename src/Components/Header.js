import React from 'react'
import Autocomplete from 'react-google-autocomplete'
import { H1 } from '../Elements'
import header from '../assets/header.svg'

const AutocompleteStyles = {
  fontSize: '16px',
  position: 'absolute',
  margin: '46px 23px',
  marginTop: '100px',
  padding: '10px 13px',
  background: 'transparent',
  border: '0',
  color: 'white',
  borderBottom: '2px solid white',
  paddingLeft: '0'
}

export default ({ onSelect }) => {
  return (
    <>
      <H1> Dichtsbijzijnde vluchthaven:</H1>
      <Autocomplete
        types={null}
        style={AutocompleteStyles}
        placeholder="Locatie invoeren"
        onPlaceSelected={place =>
          place.geometry &&
          onSelect({
            latitude: place.geometry.location.lat(),
            longitude: place.geometry.location.lng()
          })
        }
      />
      <img src={header} width="100%" alt="Vluchthavens.nl" />
    </>
  )
}
