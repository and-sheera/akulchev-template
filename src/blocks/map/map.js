export default async function map() {
  await ymaps3.ready

  const mapBlock = document.querySelector('.map')

  for (const mapBlock of document.querySelectorAll('.map')) {
    const map = new ymaps3.YMap(mapBlock, {
      location: {
        // eslint-disable-next-line unicorn/numeric-separators-style
        center: mapBlock.dataset.center?.split(',').map(value => +value) || [19.051399, 47.492647],
        zoom: +mapBlock.dataset.zoom || 10
      }
    })
    map.addChild(new ymaps3.YMapDefaultSchemeLayer())
    map.addChild(new ymaps3.YMapDefaultFeaturesLayer())

    const markers = mapBlock.dataset.markers
    if (markers) {
      for (const coordinates of markers.split(';')) {
        const markerCoordinates = coordinates.split(',').map(value => +value)
        const markerElement = document.createElement('div')
        markerElement.className = 'map__marker'
        markerElement.addEventListener('click', () => map.update({ location: { center: markerCoordinates, duration: 600, zoom: 14 } }))
        map.addChild(new ymaps3.YMapMarker({
          coordinates: markerCoordinates
        }, markerElement))
      }
    }

    const markersXs = mapBlock.dataset.markersPin
    if (markersXs) {
      for (const coordinates of markersXs.split(';')) {
        const markerCoordinates = coordinates.split(',').map(value => +value)
        const markerElement = document.createElement('div')
        markerElement.className = 'map__marker map__marker--pin'
        markerElement.addEventListener('click', () => map.update({ location: { center: markerCoordinates, duration: 600, zoom: 14 } }))
        map.addChild(new ymaps3.YMapMarker({
          coordinates: markerCoordinates
        }, markerElement))
      }
    }
  }
}
