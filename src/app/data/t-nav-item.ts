import { ReactNode } from 'react';

export type TnavItem = {
  reference: string;
  children: ReactNode;
  callback?: any;
};
