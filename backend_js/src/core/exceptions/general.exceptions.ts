export class GeneralException extends Error
{
    constructor(message: string, exceptionName: string = 'GeneralException')
    {
        super(message);
        this.name = exceptionName;
    }
}

export class ResourceNotFoundException extends GeneralException
{
    constructor(resource: string)
    {
        super(`Resource not found: ${ resource }, please check the provided identifier.`, 'ResourceNotFoundException');
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

export class PropertyTooLongException extends GeneralException
{
    constructor(property: string, maxLength: number)
    {
        super(`Property too long: ${ property } exceeds maximum length of ${ maxLength } characters.`, 'PropertyTooLongException');
    }
}

export class PropertyTooShortException extends GeneralException
{
    constructor(property: string, minLength: number)
    {
        super(`Property too short: ${ property } is below minimum length of ${ minLength } characters.`, 'PropertyTooShortException');
    }
}