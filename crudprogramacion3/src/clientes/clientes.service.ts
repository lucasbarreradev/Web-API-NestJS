
import { InjectRepository } from '@nestjs/typeorm';
import { clientes } from './cliente.entity';
import { Repository } from 'typeorm';
import { create } from 'domain';
import { creaclientedto } from './creacliente.dto';
import { modificaclientedto } from './modificacliente.dto';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class ClientesService {
    constructor(@InjectRepository(clientes) private Repositorioclientes: Repository<clientes>) { }
    async crearclientes(cliente: creaclientedto) {
        // para controlar si el apellido esta en nuestra tabla
        const apellidoigual = await this.Repositorioclientes.findOne({
            where: {
                Apellido: cliente.Apellido
            }
        })

        if (apellidoigual) {
            return new HttpException('Apellido igual en la tabla', HttpStatus.AMBIGUOUS)
        }
        const nuevocliente = this.Repositorioclientes.create(cliente)
        this.Repositorioclientes.save(nuevocliente)
    }
    listarclientes() {
        return this.Repositorioclientes.find()
    }
    async listaruncliente(id: number) {
        const clienteencontrado = await
            this.Repositorioclientes.findOne({
                where: {
                    idcliente: id
                }
            });
        if (!clienteencontrado) {
            return new HttpException('El cliente no existe', HttpStatus.NOT_FOUND);
        }
        return clienteencontrado
    }
    async borrarcliente(id: number) {
        const clienteencontrado = await
        this.Repositorioclientes.findOne({
            where: {
                idcliente:id
            }
        });
        if (!clienteencontrado){
            return new HttpException('El cliente no existe',HttpStatus.NOT_FOUND);
        }

        return this.Repositorioclientes.delete({ idcliente: id });
       }
    async modificarcliente(id: number, cliente: modificaclientedto){
        const clienteencontrado = await
        this.Repositorioclientes.findOne({
            where: {
            idcliente:id
          }
        });
        if (!clienteencontrado) {
            return new HttpException('El cliente no existe',HttpStatus.NOT_FOUND);
        }
        const modifica = Object.assign(clienteencontrado,cliente);
        return this.Repositorioclientes.save(modifica);
    }
}
