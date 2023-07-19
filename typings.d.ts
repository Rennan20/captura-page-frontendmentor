export type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
  thumb: string;
  about?: string;
  quantity?: number;
};

export type RootState = {
  cart: Product[]; // Assuming 'Product' is the type for your cart items
};
