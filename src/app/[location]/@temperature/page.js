const {
  default: TemperatureComponent,
} = require('@/components/temperatureComponent');

const TemperaturePage = ({ params, searchParams: { lat, lon } }) => {
  return <TemperatureComponent lat={lat} lon={lon} />;
};

export default TemperaturePage;
