import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
// import { jwtConstants } from './constants/jwt.constant';
console.log(process.env.JWT_SECRET);
@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: 'qWVxOftXdUy4@delWEFFFSC',
      signOptions: { expiresIn: '24h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
