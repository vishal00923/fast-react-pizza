import { formatCurrency } from '../../utils/helpers';

const MenuItem = ({ pizza }) => {
  const { id, imageUrl, ingredients, name, soldOut, unitPrice } = pizza;

  return (
    <li>
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(', ')}</p>
        <div>{soldOut ? <p>Sold out</p> : <p>{formatCurrency(unitPrice)}</p>}</div>
      </div>
    </li>
  );
};

export default MenuItem;
