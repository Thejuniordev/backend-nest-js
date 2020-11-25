import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { Product.Service } from './products/shared/product.service';

@Module({
  imports: [],
  controllers: [AppController, ProductsController],
  providers: [AppService, Product.Service],
})
export class AppModule {}
