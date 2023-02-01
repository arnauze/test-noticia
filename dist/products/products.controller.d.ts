import { ProductsService } from './products.service';
import { ProductInterface } from './interfaces/product.interface';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getProductsByCode(params: any): Promise<ProductInterface>;
    getProductsByName(params: any): Promise<ProductInterface>;
}
