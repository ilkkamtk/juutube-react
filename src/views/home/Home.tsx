import { useMediaContext } from '@/hooks/contextHooks';
import FrontThumbnail from './FrontThumbnail';

const Home = () => {
  const { mediaItems } = useMediaContext();

  return (
    <div className="flex flex-wrap">
      {mediaItems &&
        mediaItems.map((mediaItem) => (
          <FrontThumbnail key={mediaItem._id} mediaItem={mediaItem} />
        ))}
    </div>
  );
};

export default Home;
