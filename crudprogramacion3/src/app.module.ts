import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './clientes/clientes.module';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      //tipo de base de datos que vamos a usar
      type:'mysql',
      //donde esta alojada
      host:'LocalHost',
      // puerto de acceso
      port:3306,
      //usuario
      username:'root',
      //password
      password:'',
      //nombre de la base de datos
      database:'productos',
      //Entidades o clases que se van a utilizar
      entities :[__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      }),
 
  ClientesModule,ProveedoresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}



