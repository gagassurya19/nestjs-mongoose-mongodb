import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

// Decorator => @Schema, @Prop

@Schema()
export class Student {
  @Prop()
  name: string;

  @Prop()
  roleNumber: number;

  @Prop()
  class: number;

  @Prop()
  gender: string;

  @Prop()
  marks: number;
}

export const studentSchema = SchemaFactory.createForClass(Student);
