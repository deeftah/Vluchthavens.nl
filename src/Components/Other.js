import React from 'react'
import { Subtitle, Section, Text } from '../Elements'

export default ({ airports }) => {
  return (
    <div style={{ gridColumn: '1 / 3' }}>
      <Subtitle>Other close airports</Subtitle>
      <Section style={{ padding: 0 }}>
        {airports.map(a => (
          <Text key={a.id}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={a.home_link || a.wikipedia_link}
            >
              {a.name} ({(a._rankingInfo.geoDistance / 1000).toFixed(1)}
              km){' '}
            </a>
          </Text>
        ))}
      </Section>
    </div>
  )
}
