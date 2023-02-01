"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const mongo = require("mongodb");
const MONGO_URL = "mongodb://127.0.0.1:27017";
const client = new mongo.MongoClient(MONGO_URL);
let ProductsService = class ProductsService {
    constructor() {
        client.connect();
    }
    async getProductByName(product_name) {
        const database = client.db("noticia");
        const collection = database.collection("products");
        const product = await collection.findOne({
            "product_name": product_name
        });
        return product;
    }
    async getProductByCode(code) {
        const database = client.db("noticia");
        const collection = database.collection("products");
        const product = await collection.findOne({
            "code": code
        });
        return product;
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map