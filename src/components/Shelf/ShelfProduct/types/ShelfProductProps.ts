export interface IShelfProduct {
  id: string;
  selling_price: number;
  price: number;
  installment: number;
  installment_rate: number;
  description: string;
  image_url: string;
}

export type ShelfProductProps = {
  productProps: IShelfProduct;
};
