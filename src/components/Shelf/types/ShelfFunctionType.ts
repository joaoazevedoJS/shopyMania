import { FC } from 'react';

import { ShelfProductFunctionType } from '../ShelfProduct/types/ShelfProductFunctionType';

import { ShelfProps } from './ShelfProps';

export type ShelfFunctionType = FC<ShelfProps> & {
  ShelfProduct: ShelfProductFunctionType;
};
