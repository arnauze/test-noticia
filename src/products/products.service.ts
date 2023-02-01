import { Injectable, Param } from '@nestjs/common';
import { ProductInterface } from './interfaces/product.interface';
import * as mongo from "mongodb"

const MONGO_URL = "mongodb://127.0.0.1:27017"
const client = new mongo.MongoClient(MONGO_URL);

@Injectable()
export class ProductsService {
    constructor() {
        client.connect()
    }

    async getProductByName(product_name: string): Promise<any> {
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

    async getProductByCode(code: number): Promise<any> {
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
