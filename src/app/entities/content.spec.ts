import { Content } from './content';

test('Criar conteudo', () => {
  const content = new Content('Novo conteudo disponivel!');

  expect(content).toBeTruthy();
});

test('Não seja possivel criar conteudo com menos caracteres que o permitido', () => {
  expect(() => new Content('Novo')).toThrow();
});

test('Não seja possivel criar conteudo com mais caracteres que o permitido', () => {
  expect(() => new Content('Novo'.repeat(70))).toThrow();
});
