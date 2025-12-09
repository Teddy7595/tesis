import { BaseEntity } from "../../../core/entities/base.entity";
import { IMAGE_TYPE, } from "src/core/types/types";
import { TagsEntity } from "src/tags/domain/entities/tag.entitiy";

export class ImageEntity extends BaseEntity
{
    public name: string;
    public keywords: string[];
    public format: string;
    public tags: TagsEntity[];
    public url: string;
    public description: string;
    public image_type: IMAGE_TYPE;
}