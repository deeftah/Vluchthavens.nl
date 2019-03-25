import React from 'react'
import ReactCountryFlag from 'react-country-flag'
import { Subtitle, Text } from '../Elements'

export default ({ airport, error }) => (
  <>
    {error ? (
      <Subtitle style={{ gridColumn: '1 / 3', color: '#d58e8e' }}>
        Omdat de site je geolocatie niet heeft kunnen vaststellen worden nu alle vluchthavens in de buurt van je IP-locatie getoond.
Dit kan afwijken van je exacte locatie; vul dan handmatig een plaats in.
      </Subtitle>
    ) : null}
    <div>
      <Subtitle>Naam</Subtitle>
      <Text>{airport.name}</Text>
    </div>
    <div>
      <Subtitle>Code</Subtitle>
      <Text>{airport.iata_code}</Text>
    </div>
    <div>
      <Subtitle>Locatie</Subtitle>
      <Text>
        {airport.municipality && `${airport.municipality} - `}
        <ReactCountryFlag code={airport.iso_country} svg />
      </Text>
    </div>
    <div>
      <Subtitle>Afstand</Subtitle>
      <Text>{(airport._rankingInfo.geoDistance / 1000).toFixed(1)}km</Text>
    </div>
  </>
)
