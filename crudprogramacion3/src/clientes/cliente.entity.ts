import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({name:'clientes'})

export class clientes{
  @PrimaryGeneratedColumn()
  idcliente:number
  @Column({unique:true})
  Apellido:string
  @Column({nullable:true})
  Nombre:string
  @Column({nullable:true})
  Ciudad:string
  @Column({nullable:true})
  Provincia:string
  @Column({nullable:true})
  Direccion:string
  @Column({nullable:true})
  Telefono:string
  @Column({nullable:true})
  Mail:string
}