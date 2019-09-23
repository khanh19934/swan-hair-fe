export interface IBanner {
  id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
  images: {
    id: string;
    name: string;
    url: string;
  };
}
