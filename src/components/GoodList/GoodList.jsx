import { Fragment } from 'react';
import { GoodCard } from '../GoodCard';
export const GoodList = ({ goods, moveUp, moveDown, moveDown3 }) => (
  <div className="GoodList">
    {goods.map((good) => (
      <Fragment key={good.id}>
        <button onClick={() => moveUp(good)}>up</button>
        <button onClick={() => moveDown(good)}>down</button>
        <button
          onClick={() => {
            moveDown3(good);
          }}
        >
          down 3
        </button>
        <GoodCard good={good} />
      </Fragment>
    ))}
  </div>
);
