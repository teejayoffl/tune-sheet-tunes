import { useParams, Navigate } from "react-router-dom";
import LocationTemplate from "./LocationTemplate";
import { londonLocations, LocationKey } from "@/data/locations";

const LocationPage = () => {
  const { location } = useParams();
  const locationData = location ? londonLocations[location as LocationKey] : null;

  if (!locationData) {
    return <Navigate to="/locations" replace />;
  }

  return <LocationTemplate location={locationData} />;
};

export default LocationPage;