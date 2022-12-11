import { IsString, MaxLength, IsNotEmpty, IsNumber } from 'class-validator';

// DTO files are use for defining object model & define the swagger property
// DTO ini untuk menampung request dari user, untuk kemudian dikirim ke database mongoo

export class CreateStudentDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly name: string;

  @IsNumber()
  @IsNotEmpty()
  readonly roleNumber: number;

  @IsNumber()
  @IsNotEmpty()
  readonly class: number;

  @IsString()
  @IsNotEmpty()
  readonly gender: string;

  @IsNumber()
  @IsNotEmpty()
  readonly marks: number;
}
