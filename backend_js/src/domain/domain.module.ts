import { Module } from '@nestjs/common';
import
{
    UserNotFoundException,
    UserEmailAlreadyExistsException,
    UserInactiveException,
    UserDeletedException,
    InvalidUserCredentialsException
} from './exceptions/user.exceptions';
import 
{
    ProjectDescriptionLengthException,
    ProjectEntityPropertyException,
    ProjectNameLengthException
} from './exceptions/project.exceptions';

import { UserEntity, UserEntityFactory } from './entities/user.entity';
import { ProjectEntity, ProjectEntityFactory } from './entities/project.entity';

@Module({
    imports: [],
    controllers: [],
    providers: [
        UserNotFoundException,
        UserEmailAlreadyExistsException,
        UserInactiveException,
        UserDeletedException,
        InvalidUserCredentialsException,
        ProjectEntityPropertyException,
        ProjectDescriptionLengthException,
        ProjectNameLengthException,
        UserEntity,
        UserEntityFactory,
        ProjectEntity,
        ProjectEntityFactory
    ],
    exports: [
        UserNotFoundException,
        UserEmailAlreadyExistsException,
        UserInactiveException,
        UserDeletedException,
        InvalidUserCredentialsException,
        ProjectEntityPropertyException,
        ProjectDescriptionLengthException,
        ProjectNameLengthException,
        UserEntity,
        UserEntityFactory,
        ProjectEntity,
        ProjectEntityFactory
    ]
})
export class DomainModule { }
