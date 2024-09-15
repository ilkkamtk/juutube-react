import SidebarThumbnail from './SidebarThumbnail';
import { useMediaContext } from '@/hooks/contextHooks';

const Sidebar = () => {
  const { mediaItems } = useMediaContext();
  return (
    <aside className="border-l bg-muted/40 p-4">
      <h3 className="mb-4 text-lg font-semibold">Playlist</h3>
      <div className="grid gap-4">
        {mediaItems &&
          mediaItems.map((mediaItem) => (
            <SidebarThumbnail key={mediaItem._id} mediaItem={mediaItem} />
          ))}
      </div>
    </aside>
  );
};

export default Sidebar;
