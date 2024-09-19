import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import { useMediaContext } from '@/hooks/contextHooks';
import { MediaItem } from '@sharedTypes/DBTypes';
import { LuTrash } from 'react-icons/lu';

const DeleteMedia = (props: { mediaItem: MediaItem }) => {
  const { mediaItem } = props;

  const { deleteMediaItem } = useMediaContext();

  const deleteHandler = async () => {
    try {
      await deleteMediaItem(mediaItem._id);
      alert('Media Deleted');
    } catch (e) {
      console.error('delete failed', (e as Error).message);
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <LuTrash className="h-5 w-5" />
        <span className="sr-only">Delete</span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            video from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="ghost" onClick={deleteHandler}>
            Delete
          </Button>
          <DialogClose asChild>
            <Button variant="ghost">Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteMedia;
