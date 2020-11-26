import { Injectable } from '@nestjs/common';
import { Product } from './product';

@Injectable()
export class ProductService {
    products: Product[] = [
        { id: 1, available: true, name: "garrafa"},
        { id: 2, available: false, name: "copo"},
        { id: 3, available: true, name: "mesa"},
        { id: 4, available: false, name: "fone"},
        { id: 5, available: true, name: "cadeira"}
    ];

    getAll() {
        return this.products;
    }

    getById(id: number) {
        const product = this.products.find((value) => value.id == id );
        return product;
    }

    create(product: Product) {
        let lastId = 0;
        if (this.products.length > 0) {
            lastId = this.products[this.products.length - 1].id;
        }

        product.id = lastId + 1;
        this.products.push(product);

        return product;
    }

    update(product: Product) {
        const productArray = this.getById(product.id);
        if (productArray) {
            productArray.available = product.available;
            productArray.name = product.name;
        }

        return productArray;
    }

    delete(id: number) {
        const index = this.products.findIndex((value) => value.id == id);
        this.products.splice(index, 1);
    }

}
