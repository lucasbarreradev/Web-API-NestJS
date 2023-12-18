import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({name:'proveedores'})

export class proveedores{
  @PrimaryGeneratedColumn()
  idproveedor:number
  @Column({unique:true})
  Apellido:string
  @Column({nullable:true})
  Nombre:string
  @Column({nullable:true})
  Cuit:string
  @Column({nullable:true})
  Direccion:string
  @Column({nullable:true})
  Telefono:string
  @Column({nullable:true})
  Mail:string
  @Column({nullable:true})
  Ciudad:string
  @Column({nullable:true})
  Provincia:string
  @Column({nullable:true})
  Contacto:string
  @Column({nullable:true})
  Observaciones:string
}