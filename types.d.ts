type DNA = 'A' | 'T' | 'C' | 'G';

type DnaObj = {
  dna: string[];
};

type Stats = {
  count_mutations: number;
  count_no_mutation: number;
  ratio: number;
};
