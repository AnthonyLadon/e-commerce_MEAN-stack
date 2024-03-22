export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  creationAt: Date;
  updatedAt: Date;
  images: string[];
  category: {
    id: number;
    name: string;
    image: string;
    creationAt: Date;
    updatedAt: Date;
  };
};
