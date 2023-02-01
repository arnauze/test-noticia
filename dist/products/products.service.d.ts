export declare class ProductsService {
    constructor();
    getProductByName(product_name: string): Promise<any>;
    getProductByCode(code: number): Promise<any>;
}
