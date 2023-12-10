import { useParams } from 'react-router-dom';
import GalleryDetails from '../../components/GalleryDetails';

const GalleryDetail = () => {
  const params = useParams();
  const galleryId = params.id;
  return <GalleryDetails galleryId={galleryId} />;
};

export default GalleryDetail;
