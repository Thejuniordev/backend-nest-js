import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Product } from './shared/product';
import { ProductService } from './shared/product.service';

@Controller('products')
export class ProductsController {

    constructor(
        private productService: ProductService
    ) { }

    @Get()
    async getAll() : Promise<Product[]> {
        return this.productService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: number) : Promise<Product> {
        return this.productService.getById(id);
    }

    @Post()
    async create(@Body() product: Product): Promise<Product> {
        return this.productService.create(product);
    }

    @Put()
    async update(@Param('id') id: number, @Body() product: Product): Promise<Product> {
        product.id = id;
        return this.productService.update(product);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        this.productService.delete(id)
    }
}
