import { PropertyMissingException, PropertyTooShortException, PropertyTooLongException } from "src/core/exceptions/general.exceptions";
import { MIN_CHARACTERS, MAX_TITLE_LENGTH, MAX_DESCRIPTION_LENGTH, SECURE_URL_RULE, URL_RULE } from "src/core/rules/texts.rules";
import { ProjectEntity } from "../entities/project.entitiy";
import { ITEMS_LIST } from "src/core/types/types";

export class ProjectEntityFactory
{
    public static create(data: Partial<ProjectEntity>): ProjectEntity
    {
        ProjectEntityFactory.ValidateName(data.name);
        ProjectEntityFactory.ValidateDescription(data.description);
        ProjectEntityFactory.ValidateObjectives(data.objective);

        data.id = data.id ?? crypto.randomUUID();
        data.is_public = data.is_public ?? false;
        data.created_at = data.created_at ?? new Date();
        data.updated_at = undefined;
        const project = new ProjectEntity();
        Object.assign(project, data);
        return project;
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

    public static ValidateObjectives(objectives: ITEMS_LIST[] | undefined): void
    {
        if (!Array.isArray(objectives))
            throw new PropertyMissingException('objectives');
        for (const objective of objectives)
        {
            if (typeof objective !== 'object')
                throw new PropertyMissingException('objectives');
            if (typeof objective.icon !== 'string')
                throw new PropertyMissingException('objectives.icon');
            if (typeof objective.name !== 'string')
                throw new PropertyMissingException('objectives.name');
        }
    }

}