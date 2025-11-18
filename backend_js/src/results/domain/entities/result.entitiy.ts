import { Entity, Enum, ManyToOne, OneToMany, Property, Rel } from "@mikro-orm/core";
import { BaseEntity } from "../../../core/entities/base.entity";

@Entity()
export class ResultEntity extends BaseEntity
{
    public name!: string;
    public type!: string;
    public description!: string;
    public is_deleted: boolean;
}