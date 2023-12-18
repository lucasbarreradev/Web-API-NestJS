import { Injectable,HttpException,HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { proveedores } from './proveedor.entity';
import { Repository } from 'typeorm';
import { create } from 'domain';
import { creaproveedordto } from './creaproveedor.dto';
import {modificaproveedordto} from './modificaproveedor.dto';

@Injectable()
export class ProveedoresService {
    constructor(@InjectRepository(proveedores) private Repositorioproveedores: Repository<proveedores>) { }
    async crearproveedores(proveedor:creaproveedordto) {
        const apellidoigual = await this.Repositorioproveedores.findOne({
            where: {
                Apellido: proveedor.Apellido
            }
        })

        if (apellidoigual) {
            return new HttpException('Apellido igual en la tabla', HttpStatus.AMBIGUOUS)
        }
        const nuevoproveedor = this.Repositorioproveedores.create(proveedor)
        this.Repositorioproveedores.save(nuevoproveedor)
    }
    listarproveedores() {
    return this.Repositorioproveedores.find()
}
async listarunproveedor(id:number) {
    const proveedorencontrado = await
       this.Repositorioproveedores.findOne({
    where: {
        idproveedor:id
    }
});
if (!proveedorencontrado) {
    return new HttpException('El proveedor no existe', HttpStatus.NOT_FOUND);
}
return proveedorencontrado
}
async borrarproveedor(id: number) {
    const proveedorencontrado = await
    this.Repositorioproveedores.findOne({
        where: {
            idproveedor:id
        }
    });
    if (!proveedorencontrado){
        return new HttpException('El proveedor no existe',HttpStatus.NOT_FOUND);
    }

    return this.Repositorioproveedores.delete({ idproveedor: id });
   }
   async modificarproveedor(id: number, proveedor: modificaproveedordto){
    const proveedorencontrado = await
    this.Repositorioproveedores.findOne({
        where: {
        idproveedor:id
      }
    });
    if (!proveedorencontrado) {
        return new HttpException('El proveedor no existe',HttpStatus.NOT_FOUND);
    }
    const modifica = Object.assign(proveedorencontrado,proveedor);
    return this.Repositorioproveedores.save(modifica);
}
}