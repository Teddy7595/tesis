import { ProjectEntityFactory, ProjectEntity, ProjectVisibility, ProjectStatus } from './project.entity';
import { ProjectEntityPropertyException, ProjectNameLengthException, ProjectDescriptionLengthException } from '../exceptions/project.exceptions';

describe('ProjectEntityFactory', () =>
{
    const validData = (): Partial<ProjectEntity> => ({
        name: 'This is a valid project name with enough length',
        description: 'This is a valid project description that meets the minimum character requirements for tests.',
        visibility: ProjectVisibility.PRIVATE,
        status: ProjectStatus.ACTIVE,
        ownerId: 'owner-123',
        institutionId: 'inst-456'
    });

    test('create() returns a ProjectEntity with timestamps when data is valid', () =>
    {
        const data = validData();
        const entity = ProjectEntityFactory.create(data);
        expect(entity).toHaveProperty('id');
        expect(entity.name).toBe(data.name);
        expect(entity.description).toBe(data.description);
        expect(entity.visibility).toBe(data.visibility);
        expect(entity.status).toBe(data.status);
        expect(entity.ownerId).toBe(data.ownerId);
        expect(entity.institutionId).toBe(data.institutionId);
        expect(entity.createdAt).toBeInstanceOf(Date);
        expect(entity.updatedAt).toBeNull();
    });

    test('validateName throws when name is missing', () =>
    {
        const data = validData();
        delete data.name;
        const create = () => ProjectEntityFactory.create(data);
        expect(create).toThrow(ProjectEntityPropertyException);
    });

    test('validateName throws when name too short', () =>
    {
        const data = validData();
        data.name = 'short name'; // less than MIN_CHARACTERS (20)
        const create = () => ProjectEntityFactory.create(data);
        expect(create).toThrow(ProjectNameLengthException);
    });

    test('validateName throws when name too long', () =>
    {
        const data = validData();
        data.name = 'A'.repeat(2000);
        const create = () => ProjectEntityFactory.create(data);
        expect(create).toThrow(ProjectNameLengthException);
    });

    test('validateDescription throws when description is missing', () =>
    {
        const data = validData();
        delete data.description;
        const create = () => ProjectEntityFactory.create(data);
        expect(create).toThrow(ProjectEntityPropertyException);
    });

    test('validateDescription throws when description too short', () =>
    {
        const data = validData();
        data.description = 'short desc'; // less than MIN_CHARACTERS (20)
        const create = () => ProjectEntityFactory.create(data);
        expect(create).toThrow(ProjectDescriptionLengthException);
    });

    test('validateDescription throws when description too long', () =>
    {
        const data = validData();
        data.description = 'A'.repeat(2000);
        const create = () => ProjectEntityFactory.create(data);
        expect(create).toThrow(ProjectDescriptionLengthException);
    });

    test('validateVisibility throws when visibility invalid', () =>
    {
        const data = validData();
        // @ts-ignore: force invalid visibility
        data.visibility = 'invalid';
        const create = () => ProjectEntityFactory.create(data);
        expect(create).toThrow(ProjectEntityPropertyException);
    });

    test('validateStatus throws when status invalid', () =>
    {
        const data = validData();
        // @ts-ignore: force invalid status
        data.status = 'invalid';
        const create = () => ProjectEntityFactory.create(data);
        expect(create).toThrow(ProjectEntityPropertyException);
    });

    test('validateOwnerId and validateInstitutionId throw when missing', () =>
    {
        const data = validData();
        delete data.ownerId;
        const create1 = () => ProjectEntityFactory.create(data);
        expect(create1).toThrow(ProjectEntityPropertyException);

        const data2 = validData();
        delete data2.institutionId;
        const create2 = () => ProjectEntityFactory.create(data2);
        expect(create2).toThrow(ProjectEntityPropertyException);
    });
});
