import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductService } from './shared/product.service';
import { ProductSchema } from './schemas/product.schema';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema}])
    ],
    controllers: [ProductsController],
    providers: [ProductService],
})
export class ProductsModule {}
