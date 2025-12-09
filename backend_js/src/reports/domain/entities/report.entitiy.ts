import { BaseEntity } from "../../../core/entities/base.entity";
import { UserEntity } from "src/users/domain/entities/user.entity";


export class ReportEntity extends BaseEntity
{
    public name: string;
    public description: string;
    public file_url: string;
    public owner: UserEntity;
    public is_public: boolean;
    public tags?: string;
    public modified_by?: UserEntity[];
}