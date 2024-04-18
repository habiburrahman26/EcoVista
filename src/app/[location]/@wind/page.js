import WindComponent from '@/components/windComponent';

const WindPage = ({ params, searchParams: { lat, lon } }) => {
  return <WindComponent lat={lat} lon={lon} />;
};

export default WindPage;
