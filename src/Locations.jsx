import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const containerStyle = {
    width: '100%',
    height: '100vh'
};
  
const center = {
    lat: 39.2556182861328,
    lng: -76.71066284179688,
};

function Locations(){

    return (
          <div className="bg-black/90 h-full">
            <div className="p-4 flex justify-center">
              <LoadScript
                googleMapsApiKey="AIzaSyAiUjCXriWPlD9U5x1WgYYKDvkZuk17glQ"
              >
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={15}
                >
                  <Marker position={center} />
                </GoogleMap>
              </LoadScript>
            </div>
          </div>
        );
}
export default Locations;