import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { DisciplinesModule } from './disciplines/disciplines.module';
import { LessonsModule } from './lessons/lessons.module';
import { ContentsModule } from './contents/contents.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    GraphQLModule.forRoot({
      debug: false,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    StudentsModule,
    DisciplinesModule,
    LessonsModule,
    ContentsModule,
  ],
  providers: [AppService],
})
export class AppModule {}
