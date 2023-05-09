import { Minus, Plus } from 'phosphor-react';
import { ControlerQuanti } from './styles';

export function QuantiControler() {
  return (
    // Controle de quantidade de itens
    <ControlerQuanti>
      <button>
        <Minus size={14} weight="bold" />
      </button>
      <p>1</p>
      <button>
        <Plus size={14} weight="bold" />
      </button>
    </ControlerQuanti>
  );
}
