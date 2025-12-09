import { UserEntity } from '../entities/user.entity';
import { MIN_CHARACTERS, MAX_TITLE_LENGTH, PASSWORD_RULE } from 'src/core/rules/texts.rules';
import { EmptyUserPasswordException, InvalidUserEmailException, InvalidUserNameException, WeakUserPasswordException } from '../exceptions/exceptions';


export default class UserFactory
{
    public static create(data: Partial<UserEntity>): UserEntity
    {
        UserFactory.ValidateUsername(data.name);
        UserFactory.ValidateUsername(data.username);
        UserFactory.ValidateEmail(data.email);
        UserFactory.ValidatePassword(data.password);
        data.id = crypto.randomUUID();
        data.is_deleted = false;
        data.created_at = new Date();
        data.updated_at = undefined;
        const user = new UserEntity();
        Object.assign(user, data);
        return user;
    }

    public static ValidateUsername(username: string | undefined): void
    {
        if (typeof username !== 'string' || typeof username === 'undefined')
            throw new InvalidUserNameException();
        if (username.length < MIN_CHARACTERS || username.length > MAX_TITLE_LENGTH)
            throw new InvalidUserNameException();
    }

    public static ValidateEmail(email: string | undefined): void
    {
        if (typeof email !== 'string' || typeof email === 'undefined')
            throw new InvalidUserEmailException();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email))
            throw new InvalidUserEmailException();
    }

    public static ValidatePassword(password: string | undefined): void
    {
        if (typeof password !== 'string' || typeof password === 'undefined' || password.length === 0)
            throw new EmptyUserPasswordException();
        if (password.length < MIN_CHARACTERS || !PASSWORD_RULE.test(password))
            throw new WeakUserPasswordException();
    }
}