import { UsersService } from './users/shared/users.service';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://db_user:uSXJiGzQfj8lOXBX@clusterecommerce.nyzc8.mongodb.net/ecommercedb?retryWrites=true&w=majority'),
    ProductsModule,
    UsersModule, 
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
