import { Document } from 'mongoose';

// Interface for student.schema => define data object structure for mongoo

export interface IStudent extends Document {
  readonly name: string;
  readonly roleNumber: number;
  readonly class: number;
  readonly gender: string;
  readonly marks: number;
}
