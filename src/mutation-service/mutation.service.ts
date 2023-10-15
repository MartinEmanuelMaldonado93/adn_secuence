import { Injectable } from '@nestjs/common';

@Injectable()
export class MutationService {
  // validate if a matrix has a mutation
  hasMutation(dna: string[]): boolean {
    // contador de secuencias de mismas letras iguales horizontal vertical oblicua
    const n = dna.length;
    if (n === 0 || dna[0].length !== n) {
      // Verificar que la matriz sea cuadrada y no esté vacía
      return false;
    }

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        // Verificar horizontal
        if (
          j + 3 < n &&
          dna[i][j] === dna[i][j + 1] &&
          dna[i][j] === dna[i][j + 2] &&
          dna[i][j] === dna[i][j + 3]
        ) {
          return true;
        }
        // Verificar vertical
        if (
          i + 3 < n &&
          dna[i][j] === dna[i + 1][j] &&
          dna[i][j] === dna[i + 2][j] &&
          dna[i][j] === dna[i + 3][j]
        ) {
          return true;
        }
        // Verificar diagonal (arriba-izquierda a abajo-derecha)
        if (
          i + 3 < n &&
          j + 3 < n &&
          dna[i][j] === dna[i + 1][j + 1] &&
          dna[i][j] === dna[i + 2][j + 2] &&
          dna[i][j] === dna[i + 3][j + 3]
        ) {
          return true;
        }
        // Verificar diagonal (arriba-derecha a abajo-izquierda)
        if (
          i + 3 < n &&
          j - 3 >= 0 &&
          dna[i][j] === dna[i + 1][j - 1] &&
          dna[i][j] === dna[i + 2][j - 2] &&
          dna[i][j] === dna[i + 3][j - 3]
        ) {
          return true;
        }
      }
    }
    return false;
  }
  getStats(): Stats | void {
    return;
  }
}
