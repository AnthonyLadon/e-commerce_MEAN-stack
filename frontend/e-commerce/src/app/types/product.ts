export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  creationAt: Date;
  updatedAt: Date;
  category: {
    id: number;
    name: string;
    image: string;
    creationAt: Date;
    updatedAt: Date;
  };
  images: string[];
};

export type ProductDataTypeObject = {
  page: number;
  results: Product[];
  total_pages: number;
  total_results: number;
};
