import { useParams } from 'react-router-dom';
import GalleryCountryDetails from '../../components/GalleryCountryDetails';

const GalleryCountry = () => {
  const params = useParams();
  const countryId = params.id;

  return <GalleryCountryDetails countryId={countryId} />;
};

export default GalleryCountry;
