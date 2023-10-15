import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { MutationService } from './mutation-service/mutation.service';

@Controller()
export class AppController {
  constructor(private readonly mutationService: MutationService) {}

  @Post('/mutation')
  getMutationResult(@Body() body: DnaObj) {
    const result = this.mutationService.hasMutation(body.dna);

    if (result) return HttpStatus.OK;
    return HttpStatus.FORBIDDEN;
  }
  @Get('/mutation/stats')
  showMutation(): string {
    this.mutationService.getStats();
    return 'hello';
  }
}
