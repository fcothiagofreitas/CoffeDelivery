import { Minus, Plus } from 'phosphor-react';
import { ControlerQuanti } from './styles';

interface QuantiControlerProps {
  value: number;
  onAdd?: () => void;
  onRemove?: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

export function QuantiControler({
  value,
  onAdd,
  onRemove,
  type,
}: QuantiControlerProps) {
  return (
    // Controle de quantidade de itens
    <ControlerQuanti>
      <button type={type} onClick={onRemove}>
        <Minus size={14} weight="bold" />
      </button>
      <p>{value}</p>
      <button type={type} onClick={onAdd}>
        <Plus size={14} weight="bold" />
      </button>
    </ControlerQuanti>
  );
}
