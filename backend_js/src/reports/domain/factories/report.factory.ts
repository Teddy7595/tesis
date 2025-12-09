import { ReportEntity } from "../entities/report.entitiy";
import { PropertyMissingException, PropertyTooLongException, PropertyTooShortException } from "src/core/exceptions/general.exceptions";
import { MIN_CHARACTERS, MAX_TITLE_LENGTH, MAX_DESCRIPTION_LENGTH, SECURE_URL_RULE, URL_RULE } from "src/core/rules/texts.rules";

export class ReportEntityFactory
{
    public static create(data: Partial<ReportEntity>): ReportEntity
    {
        ReportEntityFactory.ValidateName(data.name);
        ReportEntityFactory.ValidateDescription(data.description);
        ReportEntityFactory.ValidateFileUrl(data.file_url);


        data.id = data.id ?? crypto.randomUUID();
        data.created_at = data.created_at ?? new Date();
        data.updated_at = undefined;
        const report = new ReportEntity();
        Object.assign(report, data);
        return report;
    }

    public static ValidateName(name: string | undefined): void
    {
        if (typeof name !== 'string' || typeof name === 'undefined')
            throw new PropertyMissingException('name');
        if (name.length < MIN_CHARACTERS)
            throw new PropertyTooShortException('name', MIN_CHARACTERS);
        if (name.length > MAX_TITLE_LENGTH)
            throw new PropertyTooLongException('name', MAX_TITLE_LENGTH);
    }

    public static ValidateDescription(description: string | undefined): void
    {
        if (typeof description !== 'string' || typeof description === 'undefined')
            throw new PropertyMissingException('description');
        if (description.length < MIN_CHARACTERS)
            throw new PropertyTooShortException('description', MIN_CHARACTERS);
        if (description.length > MAX_DESCRIPTION_LENGTH)
            throw new PropertyTooLongException('description', MAX_DESCRIPTION_LENGTH);
    }

    public static ValidateFileUrl(file_url: string | undefined): void
    {
        if (typeof file_url !== 'string' || typeof file_url === 'undefined')
            throw new PropertyMissingException('file_url');
        if (!SECURE_URL_RULE.test(file_url) || !URL_RULE.test(file_url))
            throw new PropertyTooShortException('file_url', MIN_CHARACTERS);
    }

    public static ValidateTags(tags: string[] | undefined): void
    {
        if (!Array.isArray(tags))
            throw new PropertyMissingException('tags');
        for (const tag of tags)
        {
            if (typeof tag !== 'string')
                throw new PropertyMissingException('tags');
            if (tag.length < MIN_CHARACTERS)
                throw new PropertyTooShortException('tags', MIN_CHARACTERS);
            if (tag.length > MAX_TITLE_LENGTH)
                throw new PropertyTooLongException('tags', MAX_TITLE_LENGTH);
        }
    }

}