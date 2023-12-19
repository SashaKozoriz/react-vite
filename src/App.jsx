import { useState } from 'react';
import { GoodList } from './components/GoodList';
import { Header } from './components/Header';
import './App.scss';
import goodsFromServer from './goods.json';
import { SORT_FIELD } from './constants';

// Function to prepare goods based on sort field and query
function getPreparedGoods(goods, { sortField, query }) {
  let preparedGoods = [...goods];

  if (query) {
    preparedGoods = preparedGoods.filter((good) =>
      good.name.toLowerCase().includes(query)
    );
  }

  if (sortField) {
    preparedGoods.sort((good1, good2) => {
      switch (sortField) {
        case SORT_FIELD.ID:
          return good1[sortField] - good2[sortField];
        case SORT_FIELD.NAME:
        case SORT_FIELD.COLOR:
          return good1[sortField].localeCompare(good2[sortField]);
        default:
          return 0;
      }
    });
  }

  return preparedGoods;
}

// Function to move a good up in the list
const moveGood = (goods, good, direction) => {
  const index = goods.indexOf(good);

  if (index < 1 && direction === 'up') {
    return goods;
  }

  if (index === -1 || index === goods.length - 1 && direction === 'down') {
    return goods;
  }

  const newIndex = direction === 'up' ? index - 1 : index + 1;

  return [
    ...goods.slice(0, newIndex),
    goods[index],
    goods[newIndex],
    ...goods.slice(newIndex + 1),
  ];
};

const App = () => {
  const [goods, setGoods] = useState(goodsFromServer);
  const [sortField, setSortField] = useState('');
  const [query, setQuery] = useState('');

  const visibleGoods = getPreparedGoods(goodsFromServer, {
    sortField,
    query,
  });

  const moveUp = (good) => setGoods((goods) => moveGood(goods, good, 'up'));
  const moveDown = (good) => setGoods((goods) => moveGood(goods, good, 'down'));

  const moveDown3 = (good) => {
    for (let i = 0; i < 3; i++) {
      setGoods((goods) => moveGood(goods, good, 'down'));
    }
  };

  return (
    <div className="App">
      {false && (
        <Header
          sortField={sortField}
          sortBy={setSortField}
          query={query}
          filterBy={setQuery}
        />
      )}

      <GoodList
        goods={visibleGoods}
        moveUp={moveUp}
        moveDown={moveDown}
        moveDown3={moveDown3}
      />
    </div>
  );
};

export default App;