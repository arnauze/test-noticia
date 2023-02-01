import { Injectable, Param } from '@nestjs/common';
import { ProductInterface } from './interfaces/product.interface';

const mongo = require("mongodb")
const client = new mongo.MongoClient("mongodb://127.0.0.1:27017");

@Injectable()
export class ProductsService {
    constructor() {
        client.connect()
    }

    async getProductByName(product_name: string): Promise<ProductInterface> {
        /*
            This function will query our local mongodb to get a product using its product_name
            Params:
                product_name: string
            
            Returns:
                ProductInterface object
        */

        const database = client.db("noticia");
        
        const collection = database.collection("products");
        
        const product = await collection.findOne({
            "product_name": product_name
        })

        return product;
    }

    async getProductByCode(code: number): Promise<ProductInterface> {
        /*
            This function will query our local mongodb to get a product using its code
            Params:
                code: number
            
            Returns:
                ProductInterface object
        */

        const database = client.db("noticia");
        
        const collection = database.collection("products");
        
        const product = await collection.findOne({
            "code": code
        })

        return product;
    }
}
