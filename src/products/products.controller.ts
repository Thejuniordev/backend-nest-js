import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/shared/jwt-auth.guard';
import { Product } from './shared/product';
import { ProductService } from './shared/product.service';

@Controller('products')
export class ProductsController {

    constructor(
        private productService: ProductService
    ) { }

    @UseGuards(JwtAuthGuard)
    @Get()
    async getAll() : Promise<Product[]> {
        return this.productService.getAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getById(@Param('id') id: string) : Promise<Product> {
        return this.productService.getById(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() product: Product): Promise<Product> {
        return this.productService.create(product);
    }

    @UseGuards(JwtAuthGuard)
    @Put()
    async update(@Param('id') id: string, @Body() product: Product): Promise<Product> {
        return this.productService.update(id, product);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async delete(@Param('id') id: string) {
        this.productService.delete(id)
    }
}
