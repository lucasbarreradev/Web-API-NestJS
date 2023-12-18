import { Controller,Post,Body,Get,Param,ParseIntPipe,Delete,Patch } from '@nestjs/common';
import { creaclientedto } from './creacliente.dto';
import {modificaclientedto} from './modificacliente.dto';
import { clientes } from './cliente.entity';
import { ClientesService } from './clientes.service';


@Controller('clientes')
export class ClientesController {
//necesitamos instanciar nuestro servicio para poder llamarlo
//de esta manera el controlador ya lo puede usar
constructor(private serviciocliente: ClientesService){
}

@Post()
crearcliente(@Body() nuevocliente:creaclientedto){
    return this.serviciocliente.crearclientes(nuevocliente)
}

@Get()
listaclientes(){
    return this.serviciocliente.listarclientes()
}

@Get(':id')
listaruncliente (@Param('id') id:number) {
return this.serviciocliente.listaruncliente(id);
}

@Delete(':id')
borracliente(@Param('id', ParseIntPipe) id:number) {
    return this.serviciocliente.borrarcliente(id);
}

@Patch(':id')
modificarcliente(@Param('id', ParseIntPipe) id:number, @Body() cliente:modificaclientedto){
    return this.serviciocliente.modificarcliente(id,cliente)
}
}