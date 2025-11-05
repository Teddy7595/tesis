export class ProjectEntityPropertyException extends Error
{
    constructor(property: string)
    {
        super(`The ${ property } property of Project entity is required and cannot be an empty value.`);
        this.name = "ProjectEntityPropertyException";
    }
}

export class ProjectNameLengthException extends Error
{
    constructor(minLength: number, maxLength: number)
    {
        super(`Project name must be between ${ minLength } and ${ maxLength } characters long.`);
        this.name = "ProjectNameLengthException";
    }
}

export class ProjectDescriptionLengthException extends Error
{
    constructor(minLength: number, maxLength: number)
    {
        super(`Project description must be between ${ minLength } and ${ maxLength } characters long.`);
        this.name = "ProjectDescriptionLengthException";
    }
}
