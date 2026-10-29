import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, afterEach } from 'vitest';
import Header from './index';

describe('Componente Header', () => {
  const tamanhoOriginal = window.innerWidth;

  afterEach(() => {
    window.innerWidth = tamanhoOriginal;
    window.dispatchEvent(new Event('resize'));
  });

  it('deve abrir o menu ao clicar no botão de hambúrguer em telas pequenas', async () => {
    window.innerWidth = 500;
    window.dispatchEvent(new Event('resize'));

    const user = userEvent.setup();
    render(<Header />);

    const botaoAbrir = screen.getByRole('button', { name: /abrir menu/i });
    await user.click(botaoAbrir);

    const linkInformacoes = screen.getByText('Informações do jogo');
    expect(linkInformacoes).toBeInTheDocument();
  });
});
