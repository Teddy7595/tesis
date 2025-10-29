export class UserEntity {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
    private laboratoryId: string;
    private institutionId: string;
    private createdAt: Date;
    private updatedAt: Date;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        laboratoryId: string,
        institutionId: string,
        createdAt: Date,
        updatedAt: Date
    ) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.password = password;
        this.laboratoryId = laboratoryId;
        this.institutionId = institutionId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

}
