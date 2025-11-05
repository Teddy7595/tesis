import
{
    ProjectEntityPropertyException,
    ProjectNameLengthException,
    ProjectDescriptionLengthException
} from '../exceptions/project.exceptions';

export enum ProjectVisibility
{
    PRIVATE = "private",
    PUBLIC = "public",
}

export enum ProjectStatus
{
    ACTIVE = "active",
    ARCHIVED = "archived"
}

export class ProjectEntity
{
    public id: string // ID del proyecto
    public name: string // nombre del proyecto
    public description: string // descripción del proyecto
    public visibility: ProjectVisibility // privado o público
    public status: ProjectStatus // activo o archivado
    public ownerId: string // ID del Usuario dueño
    public institutionId: string // ID de la Institución dueña o donde se realiza el proyecto
    public is_deleted: boolean // indica si el proyecto ha sido eliminado
    public createdAt: Date // fecha de creación
    public updatedAt: Date | null // fecha de última actualización
}

export class ProjectEntityFactory
{
    private static readonly MAX_NAME_LENGTH = 100;
    private static readonly MAX_DESCRIPTION_LENGTH = 500;
    private static readonly MIN_CHARACTERS = 20;

    public static create(data: Partial<ProjectEntity>): ProjectEntity
    {
        ProjectEntityFactory.validateName(data.name);
        ProjectEntityFactory.validateDescription(data.description);
        ProjectEntityFactory.validateVisibility(data.visibility);
        ProjectEntityFactory.validateStatus(data.status);
        ProjectEntityFactory.validateOwnerId(data.ownerId);
        ProjectEntityFactory.validateInstitutionId(data.institutionId);

        data.createdAt = new Date();
        data.updatedAt = null;
        data.is_deleted = false;
        data.id = crypto.randomUUID();
        const newEntity = new ProjectEntity();
        return Object.assign(newEntity, data);
    }

    private static validateInstitutionId(institutionId?: string): void
    {
        if (!institutionId || typeof institutionId !== "string")
            throw new ProjectEntityPropertyException("institutionId");
    }

    private static validateOwnerId(ownerId?: string): void
    {
        if (!ownerId || typeof ownerId !== "string")
            throw new ProjectEntityPropertyException("ownerId");
    }

    private static validateVisibility(visibility?: ProjectVisibility): void
    {
        // Check that the provided value is one of the enum values
        if (!visibility || !Object.values(ProjectVisibility).includes(visibility))
            throw new ProjectEntityPropertyException("visibility");
    }

    private static validateStatus(status?: ProjectStatus): void
    {
        // Check that the provided value is one of the enum values
        if (!status || !Object.values(ProjectStatus).includes(status))
            throw new ProjectEntityPropertyException("status");
    }

    private static validateName(name?: string): void
    {
        if (!name)
            throw new ProjectEntityPropertyException("name");
        if (name.length < this.MIN_CHARACTERS || name.length > this.MAX_NAME_LENGTH)
            throw new ProjectNameLengthException(this.MIN_CHARACTERS, this.MAX_NAME_LENGTH);
    }

    private static validateDescription(description?: string): void
    {
        if (!description)
            throw new ProjectEntityPropertyException("description");
        if (description.length < this.MIN_CHARACTERS || description.length > this.MAX_DESCRIPTION_LENGTH)
            throw new ProjectDescriptionLengthException(this.MIN_CHARACTERS, this.MAX_DESCRIPTION_LENGTH);
    }
}