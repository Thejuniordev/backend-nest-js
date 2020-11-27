import { AuthController } from './auth.controller';
import { Module } from '@nestjs/common';
import { AuthService } from './shared/auth.service';
import { UsersModule } from 'src/users/users.module';
import { LocalStrategy } from './shared/local.strategy';
import { JwtStrategy } from './shared/jwt.strategy';

@Module({
    imports: [UsersModule],
    controllers: [
        AuthController, ],
    providers: [
        AuthService,
        LocalStrategy,
        JwtStrategy
    ],
})
export class AuthModule {}
