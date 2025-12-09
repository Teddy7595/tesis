export class TagInvalidPropsException extends Error
{
    constructor(property: string)
    {
        super(`Invalid property: ${ property }, please check the provided data and rules.`);
        this.name = 'TagInvalidPropsException';
    }
}

//When a property is empty or missing
export class TagMissingPropsException extends Error
{
    constructor(property: string)
    {
        super(`Missing property: ${ property }, please provide all required data.`);
        this.name = 'TagMissingPropsException';
    }
}

//When tag type is invalid
export class TagInvalidTypeException extends Error
{
    constructor(type: string)
    {
        super(`Invalid tag type: ${ type }, please use a valid type.`);
        this.name = 'TagInvalidTypeException';
    }
}
