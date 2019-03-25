import algoliasearch from 'algoliasearch'

const client = algoliasearch('DU7ET53YZ6', '556cf8e9361a5e242e06587c72521e65')

const index = client.initIndex('all_airports')

export const getData = async (coords, position) => {
  const coordinates = coords || position.coords
  const { hits } = await index.search({
    aroundLatLng: `${coordinates.latitude}, ${coordinates.longitude}`,
    getRankingInfo: true,
    hitsPerPage: 3,
    facetFilters: ['scheduled_service:yes']
  })

  return hits
}

export const getDataPerIp = async () => {
  const { hits } = await index.search({
    aroundLatLngViaIP: true,
    getRankingInfo: true,
    hitsPerPage: 3,
    facetFilters: ['scheduled_service:yes']
  })

  return hits
}
