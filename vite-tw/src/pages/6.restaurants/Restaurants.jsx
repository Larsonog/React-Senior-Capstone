import ConwayMap from "./ConwayMap"
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
crossorigin=""/>

const Restaurants = () => {
  return (
    <div>
      <h1>
        Restaurants
      </h1>
      <ConwayMap/>
    </div>
  )
}

export default Restaurants