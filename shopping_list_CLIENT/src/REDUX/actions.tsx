import { createAction } from '@reduxjs/toolkit';
// import { Product } from '../Interface/Product'; // Assuming Product interface is defined in a separate file
interface Product1 {
    name: string;
    category: string;
    quantity: number;
}
 interface Product {
    products: Product1[];
    quantityAll:number;
}

export const addProduct = createAction<Product>('basket/addProduct');
