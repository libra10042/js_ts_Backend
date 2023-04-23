import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatsService } from '../service/cats.service';
import { CreateCatDto } from '../dto/CreateCatDto';
import { Cat } from '../interface/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}