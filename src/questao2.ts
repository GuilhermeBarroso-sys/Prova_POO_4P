/**
 * 2) Escreva a classe ConversaoDeUnidadesDeTempo com métodos estáticos para
conversão
 das unidades de velocidade segundo a lista abaixo, por exemplo
converMinutoParaSegundo. O método deverá receber a quantidade de minutos e
retornar o valor em segundos.
• 1 minuto = 60 segundos
• 1 hora = 60 minutos
• 1 dia = 24 horas
• 1 semana = 7 dias
• 1 mês = 30 dias
• 1 ano = 365.25 dias
 */
abstract class ConversaoDeUnidadesDeTempo {
  public static minutoParaSegundo(tempo : number) : string {
    const conversao = tempo * 60;
    return `${tempo} minuto(s) = ${conversao} segundos`
  }
  public static horaParaMinuto(tempo : number) : string {
    const conversao = tempo * 60
    return `${tempo} hora(s) = ${conversao} minutos`
  }
  public static diaParaHora(tempo : number) : string {
    const conversao = tempo * 24
    return `${tempo} dia(s) = ${conversao} horas`
  }
  public static semanaParaDia(tempo : number) : string {
    const conversao = tempo * 7
    return `${tempo} semana(s) = ${conversao} dias`
  }
  public static mesParaDia(tempo : number) : string {
    const conversao = tempo * 30
    return `${tempo} mês(s) = ${conversao} dias`
  }
  public static anoParaDia(tempo : number) : string {
    const conversao = tempo * 365.25
    return `${tempo} ano(s) = ${conversao} dias`
  }
}

console.log(`
${ConversaoDeUnidadesDeTempo.minutoParaSegundo(2)}
${ConversaoDeUnidadesDeTempo.horaParaMinuto(2)}
${ConversaoDeUnidadesDeTempo.diaParaHora(2)}
${ConversaoDeUnidadesDeTempo.semanaParaDia(2)}
${ConversaoDeUnidadesDeTempo.mesParaDia(2)}
${ConversaoDeUnidadesDeTempo.anoParaDia(2)}
`)