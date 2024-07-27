export interface IPost {
  id: string;
  userId: string;
  oshiId: string[];
  images: string[];
  caption: string | null;
  createdAt: number;
}
