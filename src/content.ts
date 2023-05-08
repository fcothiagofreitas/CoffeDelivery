import americano from './assets/coffes/americano.png';
import cafe_com_leite from './assets/coffes/cafe_com_leite.png';
import cafe_gelado from './assets/coffes/cafe_gelado.png';
import expresso from './assets/coffes/expresso.png';
import expresso_cremoso from './assets/coffes/expresso_cremoso.png';
import latte from './assets/coffes/latte.png';
// import arabe from './assets/coffes/arabe.png';
// import capuccino from './assets/coffes/capuccino.png';
// import chocolate_quente from './assets/coffes/chocolate_quente.png';
// import cubano from './assets/coffes/cubano.png';
// import havaiano from './assets/coffes/havaiano.png';
// import irlandes from './assets/coffes/irlandes.png';
// import macchiato from './assets/coffes/macchiato.png';
// import mochaccino from './assets/coffes/mochaccino.png';

export const dataCoffe = [
  {
    id: 1,
    image: expresso,
    tag: ['tradicional', 'coco', 'tradicional2'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: '9,78',
  },
  {
    id: 2,
    image: americano,
    tag: ['tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: '9,78',
  },
  {
    id: 3,
    image: expresso_cremoso,
    tag: ['tradicional'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: '9,78',
  },
  {
    id: 4,
    image: cafe_gelado,
    tag: ['tradicional', 'gelado'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: '9,78',
  },
  {
    id: 5,
    image: cafe_com_leite,
    tag: ['tradicional', 'com leite'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: '9,78',
  },
  {
    id: 6,
    image: latte,
    tag: ['tradicional', 'com leite'],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: '9,78',
  },
];
