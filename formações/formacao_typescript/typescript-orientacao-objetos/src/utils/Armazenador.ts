export class Armazenador {
  private constructor() {}

  static salvar(chave: string, valor: any) {
    const valorString = JSON.stringify(valor);
    localStorage.setItem(chave, valorString);
  }

  static obter<T>(
    chave: string,
    reviver?: (this: any, key: string, value: any) => any
  ) {
    const valor = localStorage.getItem(chave);

    if (!valor) return null;

    if (reviver) return JSON.parse(valor, reviver) as T;

    return JSON.parse(valor) as T;
  }
}
