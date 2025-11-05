import
{
    UserEmailInvalidException,
    UserEntityPropertyException,
    UserFullnameLengthException,
    UserPasswordLengthException,
    UserPasswordWeakException
} from "../exceptions/user.exceptions";

export class UserEntity
{
    public id: string;
    public fullname: string;
    public email: string;
    public passwordHash: string;
    public is_active: boolean;
    public is_deleted: boolean;
    public createdAt: Date;
    public updatedAt: Date | null;
}



export class UserEntityFactory 
{
    private static readonly MAX_FULLNAME_LENGTH = 200;
    private static readonly MAX_EMAIL_LENGTH = 100;
    // Minimum length raised to 8 to match common password policies
    private static readonly MIN_PASSWORD_LENGTH = 8;
    private static readonly MAX_PASSWORD_LENGTH = 100;
    private static readonly MIN_CHARACTER = 3;

    public static create(data: Partial<UserEntity>): UserEntity
    {
        UserEntityFactory.validateEmail(data.email);
        UserEntityFactory.validateFullname(data.fullname);
        UserEntityFactory.validatePassword(data.passwordHash);
        data.createdAt = new Date();
        data.updatedAt = null;
        data.is_active = true;
        data.is_deleted = false;
        data.id = crypto.randomUUID();
        const newEntity = new UserEntity();

        return Object.assign(newEntity, data);
    }

    private static validateEmail(email?: string): void
    {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || email.length > this.MAX_EMAIL_LENGTH)
            throw new UserEmailInvalidException();
        if (!emailRegex.test(email))
            throw new UserEmailInvalidException();
    }

    private static validateFullname(fullname?: string): void
    {
        if (!fullname || fullname.length > this.MAX_FULLNAME_LENGTH)
            throw new UserEntityPropertyException("fullname");
        if (fullname.length < this.MIN_CHARACTER || fullname.length > this.MAX_FULLNAME_LENGTH)
            throw new UserFullnameLengthException(UserEntityFactory.MIN_CHARACTER, UserEntityFactory.MAX_FULLNAME_LENGTH);

    }

    private static validatePassword(password?: string): void
    {
        if (!password)
            throw new UserEntityPropertyException("password");

        if (password.length < this.MIN_PASSWORD_LENGTH || password.length > this.MAX_PASSWORD_LENGTH)
            throw new UserPasswordLengthException(UserEntityFactory.MIN_PASSWORD_LENGTH, UserEntityFactory.MAX_PASSWORD_LENGTH);

        // Build the complexity regex dynamically so it always matches the configured length bounds
        const complexityPattern = `^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{${ this.MIN_PASSWORD_LENGTH },${ this.MAX_PASSWORD_LENGTH }}$`;
        const complexityRegex = new RegExp(complexityPattern);

        if (!complexityRegex.test(password))
            throw new UserPasswordWeakException();
    }
}
