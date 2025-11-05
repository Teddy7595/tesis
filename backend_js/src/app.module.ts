import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DomainModule } from './domain/domain.module';
import { ApplicationModule } from './application/application.module';

@Module({
  imports: [DomainModule, ApplicationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
