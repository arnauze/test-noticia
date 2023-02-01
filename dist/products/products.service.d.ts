import { ProductInterface } from './interfaces/product.interface';
export declare class ProductsService {
    constructor();
    getProductByName(product_name: string): Promise<ProductInterface>;
    getProductByCode(code: number): Promise<ProductInterface>;
}
