import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentDto } from './create-student.dto';

// PartialType => function untuk mengambil class yang telah dibuat untuk bisa digunakan kembali secara optional

export class UpdateStudentDto extends PartialType(CreateStudentDto) {}
