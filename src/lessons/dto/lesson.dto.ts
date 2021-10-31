import {
  FilterableField,
  FilterableOffsetConnection,
} from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { ContentDTO } from '../../contents/dto/content.dto';
import { BaseDTO } from '../../bases/dto/base.dto';

@ObjectType('Lesson')
@FilterableOffsetConnection('contents', () => ContentDTO, { nullable: true })
export class LessonDTO extends BaseDTO {
  @FilterableField()
  description: string;
}
