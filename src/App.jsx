import { useState } from 'react';

import { GoodList } from './components/GoodList';
import { Header } from './components/Header';
import './App.scss';
import goodsFromServer from './goods.json';
import { SORT_FIELD } from './constants';

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

const App = () => {
  const [sortField, setSortField] = useState('');
  const [query, setQuery] = useState('');

  const visibleGoods = getPreparedGoods(goodsFromServer, {
    sortField,
    query,
  });
  return (
    <div className="App">
      <Header
        sortField={sortField}
        sortBy={(field) => {
          setSortField(field);
        }}
        query={query}
        filterBy={(newQuery) => {
          setQuery(newQuery);
        }}
      />

      <GoodList goods={visibleGoods} />
    </div>
  );
};

export default App;
