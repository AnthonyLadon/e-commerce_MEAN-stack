export type Product = {
  id: number;
  title: string;
  price: number;
  creationAt: Date;
  updatedAt: Date;
  category: {
    id: number;
    name: string;
    image: string;
  };
  images: string[];
};

export type ProductDataTypeObject = {
  page: number;
  results: Product[];
  total_pages: number;
  total_results: number;
};
