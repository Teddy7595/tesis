import { BaseEntity } from "../../../core/entities/base.entity";
import { TYPE } from "src/core/types/types";


export class TagsEntity extends BaseEntity
{
    public name: string;
    public type: TYPE;
    public description: string;
}