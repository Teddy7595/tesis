//Exception base class for User domain
export class UserException extends Error
{
    constructor(message: string, name: string = 'UserException')
    {
        super(message);
        this.name = name;
    }
}

//When the name is too short
export class InvalidUserNameException extends UserException
{
    constructor(message: string = 'The user name is invalid.')
    {
        super(message, 'InvalidUserNameException');
    }
}

//When the email format is incorrect
export class InvalidUserEmailException extends UserException
{
    constructor(message: string = 'The user email is invalid.')
    {
        super(message, 'InvalidUserEmailException');
    }
}

//When the username is already taken
export class UsernameAlreadyTakenException extends UserException
{
    constructor(message: string = 'The username is already taken.')
    {
        super(message, 'UsernameAlreadyTakenException');
    }
}

//When the password does not meet security criteria
export class WeakUserPasswordException extends UserException
{
    constructor(message: string = 'The user password is too weak. Must contain at least 6 characters, including uppercase, lowercase, number and special character.')
    {
        super(message, 'WeakUserPasswordException');
    }
}

//When then password is empty
export class EmptyUserPasswordException extends UserException
{
    constructor(message: string = 'The user password cannot be empty.')
    {
        super(message, 'EmptyUserPasswordException');
    }
}