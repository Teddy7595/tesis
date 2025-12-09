import { TagsEntity } from "../entities/tag.entitiy";
import { TAG_TYPES } from "src/core/rules/enums.rules";
import { MIN_CHARACTERS, MAX_TITLE_LENGTH } from "src/core/rules/texts.rules";
import { TagInvalidPropsException, TagMissingPropsException } from "../exceptions/exceptions";


export class TagFactory
{
    public static create(data: Partial<TagsEntity>): TagsEntity
    {
        TagFactory.ValidateTagName(data.name);
        TagFactory.ValidateTagDescription(data.description);
        TagFactory.ValidateType(data.type);

        // Validation logic can be added here
        data.id = crypto.randomUUID();
        data.is_deleted = false;
        data.created_at = new Date();
        data.updated_at = undefined;
        const tag = new TagsEntity();
        Object.assign(tag, data);
        return tag;
    }

    public static ValidateTagName(name: string | undefined): void
    {
        if (typeof name !== 'string' || typeof name === 'undefined')
            throw new TagInvalidPropsException('name');
        if (name.length < MIN_CHARACTERS || name.length > MAX_TITLE_LENGTH)
            throw new TagInvalidPropsException('name');
    }

    public static ValidateTagDescription(description: string | undefined): void
    {
        if (typeof description !== 'string' || typeof description === 'undefined')
            throw new TagInvalidPropsException('description');
        if (description.length < MIN_CHARACTERS || description.length > MAX_TITLE_LENGTH)
            throw new TagInvalidPropsException('description');
    }

    public static ValidateType(type: string | undefined): void
    {
        if (typeof type !== 'string' || typeof type === 'undefined')
            throw new TagMissingPropsException('type');
        if (!Object.values(TAG_TYPES).includes(type as TAG_TYPES))
            throw new TagInvalidPropsException('type');
    }
}