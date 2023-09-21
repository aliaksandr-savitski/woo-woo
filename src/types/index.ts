import type { WooCommerceProduct } from 'src/lib/woocommerce/types';

export type User = {
  id: number;
  name: string;
  email: string;
};

export type Product = Omit<WooCommerceProduct, 'price' | 'regular_price' | 'sale_price'> & {
  price: number;
  regular_price: number;
  sale_price: number;
};

export class ErrorResponse {
  constructor(public message: string, public status: number) {}
}

export class DbConcurrencyError implements ErrorResponse {
  constructor(public message: string, public status: number) {}
}

export class InternalServerError implements ErrorResponse {
  constructor(public message: string, public status: number) {}
}

export enum StatusCode {
  Unauthorized = 401,
  Forbidden = 403,
  TooManyRequests = 429,
  InternalServerError = 500
}
