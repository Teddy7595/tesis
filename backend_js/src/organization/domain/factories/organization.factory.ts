import { PropertyMissingException, PropertyTooLongException, PropertyTooShortException } from "src/core/exceptions/general.exceptions";
import { OrganizationEntity } from "../entities/organization.entitiy";
import { MIN_CHARACTERS, MAX_DESCRIPTION_LENGTH, MAX_TITLE_LENGTH } from "src/core/rules/texts.rules";


export class OrganizationEntityFactory
{
    public static create(data: Partial<OrganizationEntity>): OrganizationEntity
    {
        OrganizationEntityFactory.ValidateName(data.name);
        OrganizationEntityFactory.ValidateDescription(data.description);

        const organization = new OrganizationEntity();
        Object.assign(organization, data);
        return organization;
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
}