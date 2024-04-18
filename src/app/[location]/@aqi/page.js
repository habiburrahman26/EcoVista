import AQIComponent from '@/components/aqiComponent';

const AqiPage = ({ params: { location }, searchParams: { lat, lon } }) => {
  return <AQIComponent lat={lat} lon={lon} />;
};

export default AqiPage;
