import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStudentDto } from 'src/dto/create-student.dto';
import { UpdateStudentDto } from 'src/dto/update-student.dto';
import { IStudent } from 'src/interface/student.interface';

@Injectable()
export class StudentService {
  constructor(@InjectModel('Student') private studentModel: Model<IStudent>) {}

  //   Create
  async createStudent(createStudentDto: CreateStudentDto): Promise<IStudent> {
    const newStudent = await new this.studentModel(createStudentDto);
    return newStudent.save();
  }

  //   Update
  async updateStudent(
    studentId: string,
    updateStudentDto: UpdateStudentDto,
  ): Promise<IStudent> {
    const existingStudent = await this.studentModel.findByIdAndUpdate(
      studentId,
      updateStudentDto,
      {
        new: true,
      },
    );

    if (!existingStudent) {
      throw new NotFoundException(`Student #${studentId} not found`);
    }
    return existingStudent;
  }

  //   Get All with pagination
  async findAll(query: any) {
    const page: number = parseInt(query.page) || 1;
    const limit = query.limit || 9;

    const findQuery = this.studentModel
      .find()
      .sort({ marks: query.sort })
      .skip((page - 1) * limit)
      .limit(limit);

    const data = await findQuery;
    const total = await this.studentModel.count();

    return {
      data,
      total,
      page,
      total_page: Math.ceil(total / limit),
    };
  }

  //   Get All
  async getAllStudents(): Promise<IStudent[]> {
    const studentData = await this.studentModel.find();
    if (!studentData || studentData.length == 0) {
      throw new NotFoundException('Students data not found!');
    }
    return studentData;
  }

  //   Get by Id
  async getStudent(studentId: string): Promise<IStudent> {
    const existingStudent = await this.studentModel.findById(studentId).exec();
    if (!existingStudent) {
      throw new NotFoundException(`Student #${studentId} not found`);
    }
    return existingStudent;
  }

  //   Delete
  async deleteStudent(studentId: string): Promise<IStudent> {
    const deletedStudent = await this.studentModel.findByIdAndDelete(studentId);
    if (!deletedStudent) {
      throw new NotFoundException(`Student #${studentId} not found`);
    }
    return deletedStudent;
  }
}
