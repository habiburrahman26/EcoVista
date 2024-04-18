import WeatherComponent from '@/components/weatherComponent';

const WeatherPage = ({ params, searchParams: { lat, lon } }) => {
  return <WeatherComponent lat={lat} lon={lon} />;
};

export default WeatherPage;
