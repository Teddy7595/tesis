import { BaseEntity } from "../../../core/entities/base.entity";
import { UserEntity } from "src/users/domain/entities/user.entity";
import { OrganizationEntity } from "src/organization/domain/entities/organization.entitiy";
import { ModelEntity } from "src/models/domain/entities/model.entitiy";
import { ReportEntity } from "src/reports/domain/entities/report.entitiy";
import { TagsEntity } from "src/tags/domain/entities/tag.entitiy";
import { ITEMS_LIST } from "src/core/types/types";


export class ProjectEntity extends BaseEntity
{
    public name: string;
    public description: string;
    public objective: ITEMS_LIST[];
    public owner: UserEntity;
    public organization: OrganizationEntity;
    public category: TagsEntity[];
    public is_public: boolean;
    public models?: ModelEntity[];
    public reports?: ReportEntity[];
}