import { BaseEntity } from "../../../core/entities/base.entity";
import { UserEntity } from "src/users/domain/entities/user.entity";
import { OrganizationEntity } from "src/organization/domain/entities/organization.entitiy";
import { ModelEntity } from "src/models/domain/entities/model.entitiy";
import { ReportEntity } from "src/reports/domain/entities/report.entitiy";


export class ProjectEntity extends BaseEntity
{
    public name: string;
    public description: string;
    public objective: { [key: string]: string }[];
    public owner: UserEntity;
    public organization: OrganizationEntity;
    public models: ModelEntity[];
    public reports: ReportEntity[];
    public is_public: boolean;
}