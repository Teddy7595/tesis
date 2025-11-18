import { Entity, Enum, ManyToOne, OneToMany, Property, Rel } from "@mikro-orm/core";
import { BaseEntity } from "../../../core/entities/base.entity";

@Entity()
export class UserEntity extends BaseEntity
{
    public name!: string;
    public email!: string;
    public password!: string;
    public username!: string;
    public is_deleted: boolean;


}
