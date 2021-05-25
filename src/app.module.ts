require('dotenv').config()
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [CoffeesModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.DB_NAME,
    autoLoadEntities: true,
    synchronize: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
