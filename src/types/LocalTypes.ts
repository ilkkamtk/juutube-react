import { User, UserWithNoPassword } from '@sharedTypes/DBTypes';
import { MessageResponse } from '@sharedTypes/MessageTypes';

type ServerToClientEvents = {
  addMedia: (message: string) => void;
};

type ClientToServerEvents = {
  update: (message: string) => void;
};

// type for userdata stored in mongodb
type MongoUser = Pick<User, 'user_id' | 'username'>;

// Type for a comment
type Comment = {
  _id: string;
  text: string;
  author: MongoUser;
  replies: Comment[];
  upvotes: MongoUser[];
  downvotes: MongoUser[];
  createdAt: Date;
};

// Type for posting comment
type PostComment = Pick<Comment, 'text' | 'author'>;

// Type for the metadata of media items
type MediaMetadata = Record<string, string | number>;

// Type for a media item
type MediaItem = {
  _id: string;
  title: string;
  description?: string;
  type: 'video' | 'live_stream';
  url: string;
  tags: string[];
  metadata: MediaMetadata;
  uploadedAt: Date;
  comments: Comment[];
  upvotes: MongoUser[];
  downvotes: MongoUser[];
  owner: MongoUser;
  screenshots: string[];
};

type MediaResponse = MessageResponse & {
  media: MediaItem | MediaItem[];
};

type Credentials = Pick<User, 'username' | 'password'>;

type AuthContextType = {
  user: UserWithNoPassword | null;
  handleLogin: (credentials: Credentials) => void;
  handleLogout: () => void;
  handleAutoLogin: () => void;
};

type MediaContextType = {
  mediaItems: MediaItem[] | null;
  singleMediaItem: MediaItem | null;
  setSingleMediaItemId: (id: string) => void;
  refreshMedia: () => void;
  refreshSingleMedia: () => void;
};

type UploadResponse = MessageResponse & {
  data: {
    filename: string;
    media_type: string;
    filesize: number;
    screenshots?: string[];
  };
};

export type {
  ServerToClientEvents,
  ClientToServerEvents,
  Comment,
  PostComment,
  MediaMetadata,
  MediaItem,
  MediaResponse,
  Credentials,
  AuthContextType,
  UploadResponse,
  MediaContextType,
};
