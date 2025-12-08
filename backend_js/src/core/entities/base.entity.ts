import { Config, DefineConfig, PrimaryKey, Property } from "@mikro-orm/core";

export class BaseEntity
{

    public id: string;
    public created_at?: Date;
    public updated_at?: Date;
    public is_deleted: boolean;

}