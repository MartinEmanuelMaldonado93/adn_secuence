import { Test, TestingModule } from '@nestjs/testing';
import { MutationService } from './mutation.service';

describe('MutationServiceService', () => {
  let service: MutationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MutationService],
    }).compile();

    service = module.get<MutationService>(MutationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

// const dna = ['ATGCGA', 'CAGTGC', 'TTATGT', 'AGAAGG', 'CCCCTA', 'TCACTG']; //true
// const hasMutationResult = this.hasMutation(dna); // TRUE
// console.log(hasMutationResult, 'testmutation');