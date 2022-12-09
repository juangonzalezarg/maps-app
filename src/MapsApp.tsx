import { MapProvider, PlacesProvider } from './context';
import { HomeScreen } from './screens';

import './style.css';

export const MapsApp = () => {
  return (
    <PlacesProvider>
      <MapProvider>
        <HomeScreen />
      </MapProvider>
    </PlacesProvider>
  )
}
