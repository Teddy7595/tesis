import { Entity, Enum, ManyToOne, OneToMany, Property, Rel } from "@mikro-orm/core";
import { BaseEntity } from "../../../core/entities/base.entity";
import { UserEntity } from "src/users/domain/entities/user.entity";

@Entity()
export class ReportEntity extends BaseEntity
{
    public name: string;
    public description: string;
    public file_path: string;
    public owner: UserEntity;
    public is_public: boolean;
    public modified_by: UserEntity[];
}