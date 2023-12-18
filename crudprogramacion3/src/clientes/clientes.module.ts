import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { ClientesController } from './clientes.controller';
import { ClientesService } from './clientes.service';
import { clientes} from './cliente.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([clientes]),
  ],
  controllers: [ClientesController],
  providers: [ClientesService],
})
export class ClientesModule {}
