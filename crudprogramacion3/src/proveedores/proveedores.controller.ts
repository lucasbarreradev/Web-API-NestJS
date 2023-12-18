import { Controller,Post,Body,Get,Param,ParseIntPipe,Delete,Patch } from '@nestjs/common';
import { creaproveedordto } from './creaproveedor.dto';
import { modificaproveedordto } from './modificaproveedor.dto';
import { proveedores } from './proveedor.entity';
import { ProveedoresService } from './proveedores.service';


@Controller('proveedores')
export class ProveedoresController {
//necesitamos instanciar nuestro servicio para poder llamarlo
//de esta manera el controlador ya lo puede usar
constructor(private servicioproveedor: ProveedoresService){
}

@Post()
crearproveedor(@Body() nuevoproveedor:creaproveedordto){
    return this.servicioproveedor.crearproveedores(nuevoproveedor)
}
@Get()
listaproveedores(){
    return this.servicioproveedor.listarproveedores()
}

@Get(':id')
listarunproveedor (@Param('id') id:number) {
return this.servicioproveedor.listarunproveedor(id);
}

@Delete(':id')
borraproveedor(@Param('id', ParseIntPipe) id:number) {
    return this.servicioproveedor.borrarproveedor(id);
}

@Patch(':id')
modificarproveedor(@Param('id', ParseIntPipe) id:number, @Body() proveedor:modificaproveedordto){
    return this.servicioproveedor.modificarproveedor(id,proveedor)
}
}