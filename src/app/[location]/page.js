import LocationInfo from "@/components/locationInfo";

const LocationPage = ({params,searchParams:{lat,lon}}) => {
  return <LocationInfo lat={lat} lon={lon}/>;
};

export default LocationPage;
