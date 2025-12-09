export class GeneralException extends Error
{
    constructor(message: string, exceptionName: string = 'GeneralException')
    {
        super(message);
        this.name = exceptionName;
    }
}

export class PropertyMissingException extends GeneralException
{
    constructor(property: string)
    {
        super(`Missing property: ${ property }, please provide all required data.`, 'PropertyMissingException');
    }
}

export class PropertyInvalidException extends GeneralException
{
    constructor(property: string)
    {
        super(`Invalid property: ${ property }, please check the provided data and rules.`, 'PropertyInvalidException');
    }
}

export class ResourceNotFoundException extends GeneralException
{
    constructor(resource: string)
    {
        super(`Resource not found: ${ resource }, please check the provided identifier.`, 'ResourceNotFoundException');
    }
}