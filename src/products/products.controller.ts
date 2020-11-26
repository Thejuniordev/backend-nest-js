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
    async getById(@Param('id') id: string) : Promise<Product> {
        return this.productService.getById(id);
    }

    @Post()
    async create(@Body() product: Product): Promise<Product> {
        return this.productService.create(product);
    }

    @Put()
    async update(@Param('id') id: string, @Body() product: Product): Promise<Product> {
        return this.productService.update(id, product);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        this.productService.delete(id)
    }
}
