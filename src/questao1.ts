interface IUnidade {
  produto: string;
  preco: number;
  quantidade: number
}
class Unidade {
  private produto : string;
  private preco : number
  private quantidade : number
  constructor({produto,preco,quantidade}:IUnidade) {
    this.produto = produto;
    this.preco = preco;
    this.quantidade = quantidade;
  }
  get getProduto() : string {
    return this.produto;
  }
  get getPreco() : number {
    return this.preco;
  }
  get getQuantidade() : number {
    return this.quantidade;
  }
  set setProduto(produto : string) {
    if(produto.length < 1) {
      throw new Error("Nome invalido!");
    }
    this.produto = produto;
  }
  set setPreco(preco: number) {
    if(preco <= 0) {
      throw new Error("preço invalido!")
    }
    this.preco = preco;
  }
  set setQuantidade(quantidade: number) {
    if(quantidade <= 0) {
      throw new Error("quantidade invalida!")
    }
    this.quantidade = quantidade;
  }
  public desconto() : number {
    if(this.quantidade <= 10) {
      return 0;
    }
    else if(this.quantidade > 10 && this.quantidade <= 20) {
      return (this.preco * this.quantidade) * 0.10;
    }
    else if(this.quantidade > 20 && this.quantidade <= 50) {
      return (this.preco * this.quantidade) * 0.20;
    }
    else {
      return (this.preco * this.quantidade) * 0.25;
    }
  }
  public valor() : number {
    return (this.preco * this.quantidade) - this.desconto();
  }
}
const produto = 'Notebook';
const preco = 10000;
const quantidade = 12;
const unidade = new Unidade({produto,preco,quantidade});
console.log(`
O produto ${unidade.getProduto} de preço R$${preco}, quantidade comprada
de ${unidade.getQuantidade} teve o desconto de ${unidade.desconto()} e o valor pago foi de ${unidade.valor()}
`)