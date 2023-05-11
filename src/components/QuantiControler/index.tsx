import { Minus, Plus } from 'phosphor-react';
import { ControlerQuanti } from './styles';

interface PropsQuantiControler {
  value: number;
  onAdd?: () => void;
  onSubtract?: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

export function QuantiControler({
  value,
  onAdd,
  onSubtract,
  type,
}: PropsQuantiControler) {
  return (
    // Controle de quantidade de itens
    <ControlerQuanti>
      <button onClick={onSubtract} type={type}>
        <Minus size={14} weight="bold" />
      </button>
      <p>{value}</p>
      <button onClick={onAdd} type={type}>
        <Plus size={14} weight="bold" />
      </button>
    </ControlerQuanti>
  );
}
