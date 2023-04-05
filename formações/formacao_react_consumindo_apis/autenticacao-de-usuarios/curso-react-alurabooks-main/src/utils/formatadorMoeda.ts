export default function formatadorMoeda(item: number) {
  return item.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
}