import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { ImagesModule } from './images/images.module';
import { ModelModule } from './models/model.module';
import { OrganizationModule } from './organization/organization.module';
import { ProjectModule } from './projects/project.module';
import { ReportsModule } from './reports/reports.module';
import { ResultsModule } from './results/results.module';
import { TagsModule } from './tags/tags.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [OrganizationModule,
    MikroOrmModule.forRoot(),
    ReportsModule,
    ImagesModule,
    TagsModule,
    ResultsModule,
    ModelModule,
    ProjectModule,
    CoreModule,
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
