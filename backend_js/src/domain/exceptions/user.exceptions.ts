export class UserNotFoundException extends Error
{
    constructor(user: string)
    {
        super(`User ${ user } not found.`);
        this.name = "UserNotFoundException";
    }
}

export class UserEntityPropertyException extends Error
{
    constructor(property: string)
    {
        super(`User property ${ property } is required and cannot be an empty value.`);
        this.name = "UserEntityPropertyException";
    }
}

export class UserFullnameLengthException extends Error
{
    constructor(minLength: number, maxLength: number)
    {
        super(`User fullname must be between ${ minLength } and ${ maxLength } characters long.`);
        this.name = "UserFullnameLengthException";
    }
}

export class UserPasswordLengthException extends Error
{
    constructor(minLength: number, maxLength: number)
    {
        super(`User password must be between ${ minLength } and ${ maxLength } characters long.`);
        this.name = "UserPasswordLengthException";
    }
}

export class UserPasswordWeakException extends Error
{
    constructor()
    {
        super(`User password does not meet complexity requirements. At least one uppercase letter, one lowercase letter and one number are required.`);
        this.name = "UserPasswordWeakException";
    }
}

export class UserEmailAlreadyExistsException extends Error
{
    constructor(email: string)
    {
        super(`User with email ${ email } already exists.`);
        this.name = "UserEmailAlreadyExistsException";
    }
}

export class UserEmailInvalidException extends Error
{
    constructor()
    {
        super(`User email is invalid.`);
        this.name = "UserEmailInvalidException";
    }
}

export class UserInactiveException extends Error
{
    constructor(user: string)
    {
        super(`User ${ user } is inactive.`);
        this.name = "UserInactiveException";
    }
}

export class UserDeletedException extends Error
{
    constructor(user: string)
    {
        super(`User ${ user } is deleted.`);
        this.name = "UserDeletedException";
    }
}

export class InvalidUserCredentialsException extends Error
{
    constructor()
    {
        super(`Invalid user credentials.`);
        this.name = "InvalidUserCredentialsException";
    }
}