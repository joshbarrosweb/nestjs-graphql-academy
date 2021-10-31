import { CreateLessonInput } from './create-lesson.input';
import { InputType, Field, ID, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLessonInput extends PartialType(CreateLessonInput) {
  @Field(() => ID)
  id?: string;
}
