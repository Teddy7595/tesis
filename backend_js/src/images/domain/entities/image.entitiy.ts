import { Entity, Enum, ManyToOne, OneToMany, Property, Rel } from "@mikro-orm/core";
import { BaseEntity } from "../../../core/entities/base.entity";

@Entity()
export class ImageEntity extends BaseEntity
{
    public name!: string;
    public keywords!: string[];
    public type!: string;
    public url!: string;
    public description!: string;
    public is_deleted: boolean;
}