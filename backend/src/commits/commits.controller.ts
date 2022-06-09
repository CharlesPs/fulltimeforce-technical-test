import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CommitsService } from './commits.service';

@ApiBearerAuth()
@ApiTags('commits')
@Controller('commits')
export class CommitsController {
  constructor(private readonly commitsService: CommitsService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'The commits record',
    // type: any,
  })
  findAll(): any {

    return this.commitsService.findAll();
  }
}