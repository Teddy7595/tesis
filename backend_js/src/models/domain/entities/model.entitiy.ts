import { Entity, Enum, ManyToOne, OneToMany, Property, Rel } from "@mikro-orm/core";
import { BaseEntity } from "../../../core/entities/base.entity";
import { UserEntity } from "src/users/domain/entities/user.entity";
import { TagsEntity } from "src/tags/domain/entities/tag.entitiy";

@Entity()
export class ModelEntity extends BaseEntity
{
    public name: string;
    public tags: TagsEntity[];
    public description: string;
    public created_by: UserEntity;
    public source_code: string;
}