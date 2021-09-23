/***
 * 3) Crie uma classe de Funcionários com os atributos nome, salario hora, dias
trabalhados, total de faltas no ano. Crie os getters e setters.
Crie um método para calcular o salário bruto que será a multiplicação do salario
hora pelos dias trabalhados.
Crie um método para calcular a PLR. Se o numero de faltas for igual a zero a PLR
será igual ao salário bruto. Se o número de faltas for igual a 1 a PLR será 94% do
salário bruto. Se o número de faltas for igual a 2 a PLR será 92% do salário bruto.
Se o número de faltas for igual a 3 a PLR será 90% do salário bruto. se o número de
faltas for igual a 4 a PLR será 88% do salário bruto. Se o número de faltas for maior
ou igual a 5 a PLR será zero.
Crie um método para calcular o desconto que será 5% do salário bruto.
Crie um método para calcular o salário liquido. Salario bruto - desconto + PLR.
Imprima as seguintes mensagens
O funcionário de nome xx tem o salário bruto de 999, teve 99 falta(s) e sua PLR foi
de 999
O funcionário de nome xx tem o salário bruto de 999, o desconto de 999, a PLR de
999 e o salário líquido de 9999
*/

interface IFuncionario {
  nome : string;
  salarioHora : number;
  diasTrabalhados : number;
  totalFaltas : number;
}
class Funcionario {
  private nome : string;
  private salarioHora : number;
  private diasTrabalhados : number;
  private totalFaltas : number;
  constructor({nome,salarioHora,diasTrabalhados,totalFaltas} : IFuncionario) {
    this.nome = nome; 
    this.salarioHora = salarioHora;  
    this.diasTrabalhados = diasTrabalhados;   
    this.totalFaltas = totalFaltas; 
  }
  get getNome() : string {
    return this.nome;
  }
  get getSalarioHora() : number {
    return this.salarioHora;
  }
  get getDiasTrabalhados() : number {
    return this.diasTrabalhados;
  }
  get getTotalFaltas() : number {
    return this.totalFaltas;
  }
  set setNome(nome : string) {
    this.nome = nome;
  }
  set setSalarioHora(salarioHora : number) {
    this.salarioHora = salarioHora;
  }
  set setDiasTrabalhados(diasTrabalhados : number) {
    this.diasTrabalhados = diasTrabalhados;
  }
  set setTotalFaltas(totalFaltas : number) {
    this.totalFaltas = totalFaltas;
  }

  public salarioBruto() : number {
    return this.salarioHora * this.diasTrabalhados;
  }
  public calcularPLR() : number {
    switch(this.totalFaltas) {
      case 0:
        return this.salarioBruto()
      case 1:
        return this.salarioBruto() * 0.94;
      case 2:
        return this.salarioBruto() * 0.92;
      case 3:
        return this.salarioBruto() * 0.90;
      case 4:
        return this.salarioBruto() * 0.88;
      case 5:
        return 0;
    }
  }
  public desconto() : number {
    return this.salarioBruto() * 0.05;
  }
  public salarioLiquido() : number {
    return this.salarioBruto() - this.desconto() + this.calcularPLR();
  }
}



const nome = 'Fulano';
const salarioHora = 100;
const diasTrabalhados = 500 
const totalFaltas = 1
const funcionario = new Funcionario({nome,salarioHora,diasTrabalhados,totalFaltas});
console.log(`
O funcionário de nome ${funcionario.getNome} tem o salário bruto de ${funcionario.salarioBruto()}, teve ${funcionario.getTotalFaltas} falta(s) e sua PLR foi ${funcionario.calcularPLR()}
de ${funcionario.salarioLiquido()}

----------------------------------------------------------------------------------------------------

O funcionário de nome ${funcionario.getNome} tem o salário bruto de ${funcionario.salarioBruto()}, o desconto de ${funcionario.desconto()}, a PLR de ${funcionario.calcularPLR()} e o salário líquido de ${funcionario.salarioLiquido()}
`)