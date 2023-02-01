import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductInterface } from './interfaces/product.interface'

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get("code/:code")
    async getProductsByCode(@Param() params): Promise<ProductInterface> {
        /*
            This endpoints calls the productsService to fetch a product using its code

            Params:
                params: @Param()
            Returns:
                ProductInterface object
            Url: 
                http://localhost:3001/products/code/{code}
            Method: GET
        */

        var code_name: number = +params.code;

        var product = await this.productsService.getProductByCode(code_name)

        return product;
    }

    @Get("name/:name")
    async getProductsByName(@Param() params): Promise<ProductInterface> {
         /*
            This endpoints calls the productsService to fetch a product using its name
            
            Params:
                params: @Param()
            Returns:
                ProductInterface object
            Url: 
                http://localhost:3001/products/name/{product_name}
            Method: GET
        */

        var product = await this.productsService.getProductByName(params.name)

        return product;
    }

 }
