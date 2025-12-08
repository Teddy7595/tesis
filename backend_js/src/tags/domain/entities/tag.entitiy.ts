import { Entity, Enum, ManyToOne, OneToMany, Property, Rel } from "@mikro-orm/core";
import { BaseEntity } from "../../../core/entities/base.entity";
import { TYPE } from "src/core/rules/types";

@Entity()
export class TagsEntity extends BaseEntity
{
    public name: string;
    public type: TYPE;
    public description: string;
}