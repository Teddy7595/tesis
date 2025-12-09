import { BaseEntity } from "../../../core/entities/base.entity";

type basicUserInfo = {
    name: string;
    email: string;
    username: string;
};


export class UserEntity extends BaseEntity
{
    public name: string;
    public email: string;
    public password: string;
    public username: string;


    public updateDetails(data: basicUserInfo): void
    {
        this.name = data.name;
        this.email = data.email;
        this.username = data.username;
    }

    public updateName(newName: string): void
    {
        this.name = newName;
        this.updated_at = new Date();
    }

    public updateUsername(newUsername: string): void
    {
        this.username = newUsername;
        this.updated_at = new Date();
    }

    public updateEmail(newEmail: string): void
    {
        this.email = newEmail;
        this.updated_at = new Date();
    }

    public updatePassword(newPassword: string): void
    {
        this.password = newPassword;
        this.updated_at = new Date();
    }

    public markAsDeleted(): void
    {
        this.is_deleted = true;
        this.updated_at = new Date();
    }

    public restore(): void 
    {
        this.is_deleted = false;
        this.updated_at = new Date();
    }
}
