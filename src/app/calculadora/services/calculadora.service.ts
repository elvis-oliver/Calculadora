/**
 * Serviço responsável por executar as operações da calculadora.
 * @author Elvis S. M. de Oliveira <elvismuse@gmail.com>
 * @since 1.0.0
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  /* Define as constantes utilizadas 
  para identificar as operações de cálculo */
  static readonly ADICAO: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }

  /**
   * Método que calcula uma operação matemática dado dois números.
   * Suporta as operações de soma, subtração, divisão e multiplicação
   * @param num1 num1 number
   * @param num2 num2 number
   * @param operacao operacao string / Operação a ser executada 
   * @returns number / Resultado da operação
   */
  
  calcular (num1: number, num2: number, operacao: string): any {
    let resultado: number; //armazena o resultado da operação
    switch(operacao) {
      case CalculadoraService.ADICAO:
        resultado = num1 + num2;
        break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
        break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
        break;
      default:
        resultado = 0;
      }
    return resultado;
  }
}
